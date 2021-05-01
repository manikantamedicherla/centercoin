import React from 'react'
import { useState } from 'react';
import { useGoogleAuth } from '../helpers/gauth.js'
// import { writeUserData } from '../helpers/firebaseHelpers'
import './signin.css'

const GoogleLoginButton = () => {
    // const { signIn, isSignedIn } = useGoogleAuth() || {}
    const [showLabel, setShowLabel] = useState(false);
    // const [isWritingDataInPending, updateWriteStatus] = useState(false);
    // console.log(isWritingDataInPending, 'isWritingDataInPending')
    let googleAuthObj = useGoogleAuth() || {}
    console.log(googleAuthObj)
    debugger
    let { googleUser = {}, isSignedIn, signIn, signOut } = googleAuthObj || {}
    let { profileObj } = googleUser || {}
    let { email, familyName, givenName, googleId, imageUrl, name } = profileObj || {}
    console.log({ email, familyName, givenName, googleId, imageUrl, name })
    if (isSignedIn) {

        // return <div className='circle-object'>
        //     <i class="fa fa-user user-icon icon-item"></i>
        // </div>
        return <div className='user-bubble'>
            <img className='circle-object' src={imageUrl} alt='Profile-img' onClick={() => {
                setShowLabel(!showLabel)
            }} />
            {
                showLabel ?
                    <div className='user-name'>
                        <small>Hello {givenName}</small>
                        <br />
                        <button onClick={() => {
                            signOut()
                            localStorage.clear()
                            window.location.assign('/')
                            // window.location.reload()
                        }}>Sign out</button>
                    </div> : null
            }
        </div>

    } else {
        return <button
            className='sigin-btn'
            onClick={() => {
                // signIn()
                let signPromise = signIn()
                signPromise.then(response => {
                    let { profileObj } = response || {}
                    let { email, googleId: userId, imageUrl, name } = profileObj || {}
                    console.log(imageUrl, name, email)
                    localStorage.setItem('userId', userId)
                    // updateWriteStatus(true)
                    // writeUserData(userId, name, email, imageUrl, () => {
                    //     window.location.reload()
                    //     // updateWriteStatus(false)
                    // }, () => {
                    //     window.location.reload()
                    //     // updateWriteStatus(false)
                    // })
                    window.location.reload()
                })
                    .catch(err => {
                        debugger
                        console.log(err)
                    })
            }}>Click here to Signin</button>
    }
}

// class GoogleLoginButton extends Component {
//     constructor() {
//         super()
//         let googleAuthObj = useGoogleAuth() || {}
//         console.log(googleAuthObj)
//         let { googleUser = {} } = googleAuthObj || {}
//         let { profileObj } = googleUser || {}
//         // let { email, familyName, givenName, googleId, imageUrl, name } = profileObj || {}
//         // console.log({ email, familyName, givenName, googleId, imageUrl, name })
//         this.state = { googleAuthObj, profileObj }
//     }
//     render() {

//         let { showLabel = false, googleAuthObj, profileObj } = this.state
//         let { isSignedIn, signIn, signOut } = googleAuthObj || {}
//         let { email, familyName, givenName, googleId, imageUrl, name } = profileObj || {}
//         console.log({ email, familyName, givenName, googleId, imageUrl, name })
//         if (isSignedIn) {
//             return <div className='user-bubble'>
//                 <img className='circle-object' src={imageUrl} alt='Profile-img' onClick={() => { this.setState(prevState => ({ showLabel: !prevState.showLabel })) }} />
//                 {
//                     showLabel ?
//                         <div className='user-name'>
//                             <small>Hello {givenName}</small>
//                             <br />
//                             <button onClick={() => {
//                                 signOut()
//                                 localStorage.clear()
//                                 window.location.assign('/')
//                                 // window.location.reload()
//                             }}>Sign out</button>
//                         </div> :
//                         null
//                 }
//             </div>

//         } else {
//             return <button
//                 className='sigin-btn'
//                 onClick={() => {
//                     // signIn()
//                     let signPromise = signIn()
//                     signPromise.then(response => {
//                         let { profileObj } = response || {}
//                         let { email, googleId: userId, imageUrl, name } = profileObj || {}
//                         writeUserData(userId, name, email, imageUrl, () => { window.location.reload() })
//                         localStorage.setItem('userId', userId)
//                         // window.location.reload()
//                     })
//                         .catch(err => {
//                             debugger
//                             console.log(err)
//                         })
//                 }}>Click here to Signin</button>
//         }
//     }
// }


export default GoogleLoginButton