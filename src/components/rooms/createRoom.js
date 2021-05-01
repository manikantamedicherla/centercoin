import React from 'react'
import { writeData } from '../../helpers/firebaseHelpers/index'

class CreateRoom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.createRoomInDb = this.createRoomInDb.bind(this)
        // func to reset, value = default value||undefine
        this.formData = {
            'id': {
                'key': 'id',
                'label': 'room id',
                'description': 'js timestamp+"_"+userid(gid)',
                'placeHolder': 'pl pv',
                // "required": true,
                // 'defaultValue': 'this must be enabled when required = false',
                'value': ''
            },
            'title': {
                key: 'title',
                label: 'title',
                description: 'title is the name of the room',
                // value: undefined,
                value: 'dev room',
                validators: { type: 'string', minLength: 2, maxLength: 10 },
                validate: (key) => {
                    const value = this[key].value
                    const { type, minLength, maxLength } = this[key].validators
                    const valueType = typeof value

                    if (valueType === type) {
                        if (value.length >= minLength && value.length <= maxLength) {
                            return { isValid: true, message: 'All validation passed' }
                        } else {
                            return { isValid: false, message: 'min and max length of value not matched' }
                        }

                    } else {
                        return { isValid: false, message: 'type of value is not str' }
                    }
                }
            },
            'aop': {
                key: 'aop',
                label: 'amount per head',
                description: 'amount per head',
                // value: undefined,
                value: 10,
                validators: { type: 'number', min: 2, max: 10 },
                validate: (key) => {
                    const value = this[key].value
                    const { type, min, max } = this[key].validators
                    const valueType = typeof value

                    if (valueType === type) {
                        if (value.length >= min && value.length <= max) {
                            return { isValid: true, message: 'All validation passed' }
                        } else {
                            return { isValid: false, message: 'min and max length of value not matched' }
                        }

                    } else {
                        return { isValid: false, message: 'type of value is not str' }
                    }
                }
            },
            'user': {
                key: 'user',
                label: 'created by whom?',
                description: 'google user id, this vale will set from local storage of google user profile',
                value: undefined,
                validators: {},
                validate: (key) => { return { isValid: true, message: `No validator ${key}` } }
            },
            'createdAt': {
                key: 'createdAt',
                label: 'timestamp',
                description: 'created at what time, value will be time stamp',
                value: undefined,
                validators: {},
                validate: (key) => { return { isValid: true, message: `No validator ${key}` } }
            },
            'startCoin': {
                'key': 'startCoin',
                'label': 'start coin',
                'description': 'game starting coin',
                'value': 0
            },
            'endCoin': {
                'key': 'endCoin',
                'label': 'end coin',
                'description': 'game ending coin',
                'value': 90
            },
            'stock': {
                'key': 'stock',
                'label': 'board amount',
                'description': 'board amount is nothing but amount per head * no of members, this will get update when group admin accepst a player to the room. and when play transaction is done.',
                'value': 0
            },
            'isDeleted':{
                'key': 'isDeleted',
                'label': 'isDeleted',
                'description': 'isDeleted',
                'value': false
            }
        }

    }
    createRoomInDb() {
        const userId = localStorage.getItem('userId')
        const timestamp = new Date().getTime()
        const roomId = `${timestamp}_${userId}`
        let dataObj = {}
        Object.values(this.formData).forEach(element => {
            dataObj[element.key] = element.value
        });
        dataObj['id'] = roomId
        dataObj['user'] = userId
        dataObj['createdAt'] = timestamp
        // dataObj['title'] = 'is delete room'
        // dataObj['isDeleted'] = true
        this.setState({ isCreating: true })
        writeData('rooms', roomId, dataObj, (a, b, c, d) => {
            this.setState({ isCreating: false })
        }, (err) => {
            this.setState({ isCreating: false, isCreationFailed: true, message: err })
        })
        // writeData('rooms')

    }
    render() {
        return <div>
            Create Room
            <button
                onClick={this.createRoomInDb}
            >
                {this.state.isCreating ? 'please wait' : "click here to create"}
            </button>

        </div>
    }
}
export default CreateRoom
/*
give accept or reject users to the room to admin
calculte stok value of room whn user is acceped (stock = aop * members in the room)
*/