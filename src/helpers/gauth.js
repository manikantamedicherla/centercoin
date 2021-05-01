import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'

const GoogleAuthContext = React.createContext() // Not necessary, but recommended.

export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    // clientId: process.env.GOOGLE_CLIENT_ID, // Your clientID from Google.
    clientId: "176240836888-m69sdrm7nbibdpdipdafg5bee77rcabk.apps.googleusercontent.com"
  })

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {/* The rest of your app */}
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)


// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {

//     // This rule allows anyone on the internet to view, edit, and delete
//     // all data in your Firestore database. It is useful for getting
//     // started, but it is configured to expire after 30 days because it
//     // leaves your app open to attackers. At that time, all client
//     // requests to your Firestore database will be denied.
//     //
//     // Make sure to write security rules for your app before that time, or else
//     // your app will lose access to your Firestore database
//     match /{document=**} {
//       allow read, write: if request.time < timestamp.date(2020, 4, 24);
//     }
//     // These rules grant access to a node matching the authenticated
// // user's ID from the Firebase auth token
//     {
//       "rules": {
//         "users": {
//           "$uid": {
//             ".read": "$uid === auth.uid",
//             ".write": "$uid === auth.uid"
//           }
//         }
//       }
//     }
//   }
// }

