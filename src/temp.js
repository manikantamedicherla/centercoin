import React from 'react'
import firebase from './helpers/firebaseHelpers/firebase'
// import { writeData } from './helpers/firebaseHelpers'
import { CreateRoom, ViewRooms } from './components'

class Temp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { users: [] }
    }
    componentWillMount() {
        const usersRef = firebase.database().ref(`users`);

        usersRef.on('value',(snapshot) => {
            let rooms = snapshot.val()
            if (!rooms) return
            debugger
            let usersArray = Object.keys(rooms).map(userId => {
                return { ...rooms[userId], id: userId }
            })
            this.setState({ users: usersArray })
        }, (e) => {
            debugger
        })
        // const userId = localStorage.getItem('userId')
        // writeData('userstocks', userId, 'mk', 'sad', 'ads')
    }
    render() {
        let { users } = this.state
        return <div>
            Temp
            {users.map(userObj => <p>{userObj.email}</p>)}
            <CreateRoom />
            <ViewRooms />
        </div>
    }
}

export default Temp