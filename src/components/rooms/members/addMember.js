import React from 'react'
import { writeData } from '../../helpers/firebaseHelpers'

class AddMember extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    // createRoomInDb() {
    //     this.setState({ isCreating: true })
    //     writeData('rooms', roomId, dataObj, (a, b, c, d) => {
    //         this.setState({ isCreating: false })
    //     }, (err) => {
    //         this.setState({ isCreating: false, isCreationFailed: true, message: err })
    //     })
    // }

    render() {
        let { membersInaRoom = [] } = this.state
        return membersInaRoom.map((memberUserId, index) => <p>{index}:{memberUserId}</p>)
    }
}
export default AddMember