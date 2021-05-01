import firebase from '../helpers/firebaseHelpers/firebase'
function postTimeToPick(data) {
    let coinPickerRef = firebase.database().ref('coin-picker/data');
    coinPickerRef.child('timeToPick').set(data)
}
function postCheatNumbers(data) {
    let coinPickerRef = firebase.database().ref('coin-picker/data');
    coinPickerRef.child('cheatNumbers').set(data)
}
export { postTimeToPick, postCheatNumbers }