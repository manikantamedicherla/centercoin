// // import React from 'react';
// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// import React, { Component } from 'react';
// // import { Navbar, button } from 'react-bootstrap';
// // import {}
// import './App.css';

// class App extends Component {
//   goTo(route) {
//     this.props.history.replace(`/${route}`)
//   }

//   login() {
//     this.props.auth.login();
//   }

//   logout() {
//     this.props.auth.logout();
//   }

//   componentDidMount() {
//     debugger
//     const { renewSession } = this.props.auth;

//     if (localStorage.getItem('isLoggedIn') === 'true') {
//       renewSession();
//     }
//   }

//   render() {
//     const { isAuthenticated = ()=>{} } = this.props.auth || {};

//     return (
//       <div>
//         {/* <Navbar fluid> */}
//             <div>
//           {/* <Navbar.Header> */}
//               <div>
//             {/* <Navbar.Brand> */}
//             <div>

//               <a href="#">Auth0 - React</a>
//             </div>
//             {/* </Navbar.Brand> */}
//             <button
//               bsStyle="primary"
//               className="btn-margin"
//               onClick={this.goTo.bind(this, 'home')}
//             >
//               Home
//             </button>
//             {
//               !isAuthenticated() && (
//                   <button
//                     bsStyle="primary"
//                     className="btn-margin"
//                     onClick={this.login.bind(this)}
//                   >
//                     Log In
//                   </button>
//                 )
//             }
//             {
//               isAuthenticated() && (
//                   <button
//                     bsStyle="primary"
//                     className="btn-margin"
//                     onClick={this.logout.bind(this)}
//                   >
//                     Log Out
//                   </button>
//                 )
//             }
//           {/* </Navbar.Header> */}
//         {/* </Navbar> */}

//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// import React from 'react';
// import { GoogleLogin, GoogleLogout, useGoogleLogout, useGoogleLogin }from 'react-google-login';
// // import { GoogleLogin }from 'react-google-login';

// class App extends React.Component {
//   responseGoogle = (response) => {
//     debugger
//     console.log(response);
//   }
//   logout = (response) => {
//     console.log(response)
//   }
//    componentWillMount(){

//     const { signIn, loaded } = useGoogleLogin({
//       onSuccess:this.responseGoogle,
//       clientId:"176240836888-m69sdrm7nbibdpdipdafg5bee77rcabk.apps.googleusercontent.com",
//       // cookiePolicy,
//       // loginHint,
//       // hostedDomain,
//       // autoLoad,
//       // isSignedIn,
//       // fetchBasicProfile,
//       // redirectUri,
//       // discoveryDocs,
//       // onFailure,
//       // uxMode,
//       // scope,
//       // accessType,
//       // responseType,
//       // jsSrc,
//       // onRequest,
//       // prompt
//     })
//     console.logout({ signIn, loaded })
//    }
//    render() {
//     // console.log(isSignedIn.get())
//     // const { signOut, loaded } = useGoogleLogout(
//     //   {
//     //     jsSrc,
//     //     onFailure,
//     //     clientId,
//     //     cookiePolicy,
//     //     loginHint,
//     //     hostedDomain,
//     //     fetchBasicProfile,
//     //     discoveryDocs,
//     //     uxMode,
//     //     redirectUri,
//     //     scope,
//     //     accessType,
//     //     onLogoutSuccess
//     //   }
//     // )

//     return <div>
//       {/* <GoogleLogin
//         clientId="176240836888-m69sdrm7nbibdpdipdafg5bee77rcabk.apps.googleusercontent.com"
//         buttonText="Ha chusindhi chaalu..click cheyyandi ikada"
//         onSuccess={this.responseGoogle}
//         onFailure={this.responseGoogle}
//         cookiePolicy={'single_host_origin'}
//         render={
//           renderProps => (
//           <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>

//           )}
//         buttonText="Login"
//         isSignedIn={true}
//       /> */}
//       {/* <GoogleLogout
//         clientId="176240836888-m69sdrm7nbibdpdipdafg5bee77rcabk.apps.googleusercontent.com"
//         buttonText="Logout"
//         onLogoutSuccess={this.logout}
//       >
//       </GoogleLogout> */}
//       {/* <useGoogleLogout /> */}
//       <p>sakjdjfsj jsa</p>
//     </div>
//   }
// }
// export default App

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { GoogleAuthProvider } from './helpers/gauth'
import GoogleLoginButton from './components/signin'
// import Temp from './temp'
import Play from './coin-picker/play'
import PlayHome from './coin-picker/home'
import EnterCheatNum from './coin-picker/cheat'
import DownloadTckts from './coin-picker/downloadTickets'
import './App.css'
class App extends React.Component {
  render() {
    var userId
    try {
      userId = JSON.parse(localStorage.getItem('userId'))
    } catch (e) {
      console.log(e)
      userId = false
    }
    return <GoogleAuthProvider>
      <div className='component-container'>
        <div className='component-wrap'>
          <center>

            {
              userId ?
                <React.Fragment>
                  <Router basename="/coin-picker">
                    <Switch>
                      <Route path="/play" exact >
                        <Play />
                      </Route>
                      <Route path="/cheat" exact >
                        <EnterCheatNum />
                      </Route>
                      <Route path="/download" exact>
                        <DownloadTckts />
                      </Route>
                      <Route path="/" exact>
                        <PlayHome />
                      </Route>
                      <Route path="*" >
                        <Redirect to={{ pathname: "/" }} />
                      </Route>
                    </Switch>
                  </Router>
                  <GoogleLoginButton />
                </React.Fragment>
                :
                <React.Fragment>
                  <Router basename="/coin-picker">
                    <Switch>
                      <Route path="/login" >
                        <GoogleLoginButton />
                      </Route>
                      <Route path="*" >
                        <Redirect to={{ pathname: "/login" }} />
                      </Route>
                    </Switch>
                  </Router>
                </React.Fragment>
            }
          </center>
        </div>
      </div>
    </GoogleAuthProvider>
  }
}
export default App