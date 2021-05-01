import React from 'react'
import firebase from '../../helpers/firebaseHelpers/firebase'

class ViewRooms extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    componentWillMount() {
        const roomsRef = firebase.database().ref(`rooms`);
        this.setState({ loading: true })
        roomsRef.on('value', (snapshot) => {
            let rooms = snapshot.val()
            if (!rooms) return
            debugger
            const userId = localStorage.getItem('userId')
            let roomsArray = Object.keys(rooms).map(roomId => {
                let roomObj = rooms[roomId]
                let { user } = roomObj
                const isAdmin = String(userId) === String(user)
                return { ...roomObj, id: roomId, isAdmin }
            }).filter(room => !room.isDeleted)
            this.setState({ rooms: roomsArray, loading: false })
        }, (e) => {
            debugger
            this.setState({ rooms: undefined, loading: false })
        })
    }
    render() {
        let { rooms, loading } = this.state
        if (loading) {
            return <p>Rooms are loading...</p>
        }
        return (rooms && Array.isArray(rooms) && rooms.length) ? rooms.map((room, index) => <p>{index}:{room.title}:{room.createdAt}, -- {room.isAdmin ? 'admin' : 'request to Join'}</p>) : <p>No rooms found</p>
    }
}
export default ViewRooms