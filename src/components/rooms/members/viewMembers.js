import React from 'react'
import firebase from '../../helpers/firebaseHelpers/firebase'

class ViewMembers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentWillMount() {
        // members/roomId
        let { roomId } = this.props
        if (!roomId) return
        const roomsRef = firebase.database().ref(`members/${roomId}`);
        roomsRef.on('value', (snapshot) => {
            let membersInaRoom = snapshot.val()
            if (!membersInaRoom) return
            debugger
            let membersInaRoomArray = Object.keys(membersInaRoom)
            this.setState({ membersInaRoom: membersInaRoomArray })
        }, (e) => {
            debugger
        })
    }
    render() {
        let { membersInaRoom = [] } = this.state
        return membersInaRoom.map((memberUserId, index) => <p>{index}:{memberUserId}</p>)
    }
}
export default ViewMembers