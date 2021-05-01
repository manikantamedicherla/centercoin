import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { writeData } from '../helpers/firebaseHelpers/index'
import firebase from '../helpers/firebaseHelpers/firebase'

class EnterCheatNum extends Component {
    constructor() {
        const userId = JSON.parse(localStorage.getItem('userId'))
        const allowedUserIds = [104411267325024284383, 112087310556876153468]
        const cheatAccess = allowedUserIds.includes(userId)
        super()
        let oneToNinety = []
        for (let i = 1; i <= 90; i++) {
            oneToNinety.push(i)
        }
        this.state = { oneToNinety, cheatAccess }
        this.getCheatNumbers = this.getCheatNumbers.bind(this)
        this.postNumbers = this.postNumbers.bind(this)
        this.makeTimeToPick = this.makeTimeToPick.bind(this)
    }
    componentWillMount() {
        this.getCheatNumbers()

    }
    getCheatNumbers() {
        const coinPickerRef = firebase.database().ref(`coin-picker`);
        this.setState({ loading: true })
        coinPickerRef.on('value', (snapshot) => {
            let coinPickerData = snapshot.val()
            debugger
            if (!coinPickerData) return
            let { data: { cheatNumbers: cheatNumbersArr = '[]', timeToPick } = {} } = coinPickerData || {}
            cheatNumbersArr = JSON.parse(cheatNumbersArr)
            this.setState({ cheatNumbers: cheatNumbersArr, timeToPickCheatNumber: timeToPick, loading: false })
        }, (e) => {
            debugger
            this.setState({ loading: false })
        })
    }
    postNumbers(numArray) {
        // {
        //     "coin-picker":
        //     {
        //         "data": {
        //             "cheatNumbers": [],
        //             "timeToPick": true or false
        //         }
        //     }
        // }
        let { cheatNumbers = [], timeToPick = false } = this.state
        if (Array.isArray(numArray)) {
            var cheatNumbersArr = numArray
        } else {
            cheatNumbersArr = cheatNumbers
        }
        let dataObj = {
            cheatNumbers: JSON.stringify(cheatNumbersArr),
            timeToPick
        }
        this.setState({ posting: true })
        debugger
        writeData('coin-picker', 'data', dataObj, (a, b, c, d) => {
            this.setState({ posting: false })
        }, (err) => {
            this.setState({ posting: false, isPostFailed: true, message: err })
        })
    }
    makeTimeToPick() {
        this.setState({ timeToPick: true }, this.postNumbers)
    }
    render() {
        let { oneToNinety = [], cheatNumbers = [], cheatAccess } = this.state
        let { posting } = this.state
        if (!cheatAccess) {
            return <Redirect to={{ pathname: "/" }} />
        }
        return <div>
            <button onClick={this.postNumbers} disabled={posting} >
                {posting ? 'Posting..' : 'Post'}
            </button>

            <button onClick={this.makeTimeToPick} disabled={posting} >
                Time to pick number-  {`${this.state.timeToPickCheatNumber}`}
            </button>


            <button onClick={() => {
                this.postNumbers([])
            }}>reset</button>
            <br /><br />
            <div className='container'>
                {oneToNinety.map(number => {
                    return <div
                        className='container-item'
                        style={{ ...cheatNumbers.includes(number) ? { backgroundColor: 'pink' } : {} }}
                        onClick={() => {
                            let { cheatNumbers = [] } = this.state
                            let cheatNumbersSet = new Set(cheatNumbers)
                            if (cheatNumbersSet.has(number)) {
                                cheatNumbersSet.delete(number)
                            } else {
                                cheatNumbersSet.add(number)
                            }
                            this.setState({ cheatNumbers: [...cheatNumbersSet] })

                        }}
                    >
                        <span className='container-item-child'>{this.state.loading ? '...' : number}</span>
                    </div>
                })}
            </div>
            <br />
            <button className='btn'>
                <Link to="/">{' < < Go Home'}</Link>
            </button>

        </div >
    }
}
export default EnterCheatNum