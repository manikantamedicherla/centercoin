import React, { Component } from 'react'
import { Link } from "react-router-dom";
import firebase from '../helpers/firebaseHelpers/firebase'
// import EnterCheatNum from './cheat'
import { postTimeToPick } from './helper'
import './play.css'

class Play extends Component {
    constructor(props) {
        super(props)
        const userId = JSON.parse(localStorage.getItem('userId'))
        const allowedUserIds = [104411267325024284383, 112087310556876153468]
        const cheatAccess = allowedUserIds.includes(userId)
        let oneToNinety = []
        for (let i = 1; i <= 90; i++) {
            oneToNinety.push(i)
        }
        let numbersFromL
        try {
            numbersFromL = localStorage.getItem('numbers')
            numbersFromL = JSON.parse(numbersFromL)
        } catch (e) {
            numbersFromL = undefined
        }
        let lastPickedNumber
        try {
            lastPickedNumber = localStorage.getItem('number')
            lastPickedNumber = JSON.parse(lastPickedNumber)
        }
        catch (e) {
            lastPickedNumber = undefined
        }
        if (Array.isArray(numbersFromL)) {
            if (numbersFromL.length === 0) {
                numbersFromL = []
            } else if (numbersFromL.length) {
                // numbersFromL = numbersFromL
            } else {
                numbersFromL = false
            }
        } else {
            numbersFromL = false
        }
        let numbers = numbersFromL || oneToNinety
        this.state = { numbers, oneToNinety, number: lastPickedNumber, cheatAccess }


        this.saveToLocal = this.saveToLocal.bind(this)
        this.pickNumber = this.pickNumber.bind(this)
        this.numbersFromFB = this.numbersFromFB.bind(this)



    }
    saveToLocal(data, key) {
        localStorage.setItem(key, JSON.stringify(data))
        return
    }
    componentWillMount() {
        this.numbersFromFB()
    }
    numbersFromFB() {
        // let cheatNumbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]//from firebase
        // let { numbers = [] } = this.state //left numbers
        // let cheatNumbers = cheatNumbersArr.filter(cheatNuumber => numbers.includes(cheatNuumber))
        // this.setState({ cheatNumbersArr, cheatNumbers })
        // this.setState({ timeToPickCheatNumber: true })

        // {
        //     "coin-picker":{
        //         "cheatNumbers":[],
        //         "timeToPicl":true or false
        //     }
        // }
        const coinPickerRef = firebase.database().ref(`coin-picker`);
        this.setState({ loading: true })
        coinPickerRef.on('value', (snapshot) => {
            let coinPickerData = snapshot.val()
            debugger
            if (!coinPickerData) return
            let { data: { cheatNumbers: cheatNumbersArr = '[]', timeToPick } = {} } = coinPickerData || {}
            let { numbers } = this.state
            cheatNumbersArr = JSON.parse(cheatNumbersArr)
            let cheatNumbers = cheatNumbersArr.filter(cheatNuumber => numbers.includes(cheatNuumber))
            this.setState({ cheatNumbersArr, cheatNumbers, timeToPickCheatNumber: timeToPick, loading: false })
        }, (e) => {
            debugger
            this.setState({ loading: false })
        })

    }
    pickNumber(cheatNumber) {
        const { cheatAccess } = this.state
        if (!cheatAccess) {
            cheatNumber = undefined
        }
        function shuffle(array_ = []) {
            let array = [...array_]
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }
        let { timeToPickCheatNumber } = this.state
        timeToPickCheatNumber = cheatNumber ? false : timeToPickCheatNumber
        let { numbers = [] } = this.state
        if (timeToPickCheatNumber) {
            let { cheatNumbers = [] } = this.state
            cheatNumbers = cheatNumbers.filter(cheatNumber => numbers.includes(cheatNumber))
            if (cheatNumbers.length) {
                cheatNumber = cheatNumbers[0]
                cheatNumber = cheatNumber || false
                if (Number.isFinite(cheatNumber)) {
                    this.setState({ timeToPickCheatNumber: false, cheatNumbers })
                    postTimeToPick(false)
                }
            }
        }
        if (!numbers.length) return
        let shuffledNumbers = shuffle(numbers)
        var number
        debugger
        if (Number.isFinite(cheatNumber)) {
            let cheatNumberIndex = shuffledNumbers.indexOf(cheatNumber)
            let splicedCheatNmArr = shuffledNumbers.splice(cheatNumberIndex, 1)
            number = splicedCheatNmArr[0]
        }
        else {
            number = shuffledNumbers.pop()
        }
        this.setState({ numbers: shuffledNumbers, number })
        this.saveToLocal(shuffledNumbers, 'numbers')
        this.saveToLocal(number, 'number')
        return

    }

    render() {
        let { number, oneToNinety, numbers, cheatAccess } = this.state
        return <div>
            <button className='btn pick-number' onClick={() => { this.pickNumber() }}>
                {number ? `${String(number).padStart(2, '0')}` : '- -'}
            </button>
            <br />
            <small>Touch to pick next coin</small>
            <br />
            <div className='container'>
                {oneToNinety.map(number => {
                    return <div
                        className='container-item'
                        style={{ ...!numbers.includes(number) ? { backgroundColor: 'pink' } : {} }}
                        onClick={() => {
                            const { cheatAccess, numbers = [] } = this.state
                            if (cheatAccess && numbers.includes(number)) {
                                this.pickNumber(number)
                            }
                        }}
                    >
                        <span className='container-item-child'>{number}</span>
                    </div>
                })}
            </div>
            <br />
            <button className='btn'>
                <Link to="/">{' < < Go Home'}</Link>
            </button>
            &nbsp;
            {cheatAccess ? <button className='btn'><Link to="/cheat">update</Link></button> : null}
            &nbsp;
            <button className='btn'><Link to="/download">Download Tickets</Link></button>
            &nbsp;
            <button
                className='btn'
                onClick={
                    () => {
                        let { oneToNinety } = this.state
                        var yes = window.confirm(`Are you sure on your action ?`)
                        if (!yes) return
                        if (numbers.length !== 90 && numbers.length !== 0) { yes = window.confirm(`Damn!. you wonna Reset the game for sure ?`) }
                        if (!yes) return
                        this.setState({ numbers: oneToNinety, number: undefined })
                        this.saveToLocal(undefined, 'numbers')
                        this.saveToLocal(undefined, 'number')
                    }
                }>
                {numbers.length === 0 ? 'Start New Game' : 'Reset'}
            </button>
        </div >
    }

}
export default Play











// {/* <p>

// percentile: {(numbers.length / 90) * 100}<br />
// total cheatNumbers: {cheatNumbersArr}<br />
// total cheatNumbers count: {cheatNumbersArr.length}<br />
// left cheatNumbers: {cheatNumbers.filter(cheatNumber => numbers.includes(cheatNumber))}<br />
// left cheatNumbers count: {cheatNumbers.filter(cheatNumber => numbers.includes(cheatNumber)).length}
// </p> */}