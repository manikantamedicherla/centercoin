import firebase from '../firebase'
function writeUserData(userId, name, email, imageUrl, resolve = () => { }, reject = () => { }) {
    if(!userId) return
    const promiseObj =firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageUrl,
        user_id: userId
    });
    promiseObj.then(resolve, reject)
}

export default writeUserData