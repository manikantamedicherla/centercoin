import firebase from '../firebase'
function writeData(collectionName, collectionId, dataObj = {}, resolve = () => { }, reject = () => { }) {
    if (collectionName && collectionId && Object.keys(dataObj).length) {
        Object.assign(dataObj, { collectionId })
        const wrtingDataPromise = firebase.database().ref(`${collectionName}/${collectionId}`).set(dataObj);
        wrtingDataPromise.then(resolve, reject)
    } else {
        window.alert('write data invoked with invalid params')
    }
}
export default writeData