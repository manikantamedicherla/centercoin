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

// In another component...
export const GoogleLoginButton = () => {
  const { signIn } = useGoogleAuth() || {}
  return <button onClick={signIn}>Sign in with Google</button>
}
 
