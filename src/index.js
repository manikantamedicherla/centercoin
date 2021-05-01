import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// // yarn build
// // // firebase deploy -m "Deploying the best new feature ever." --only hosting
// import React from 'react';
// import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login';
// // or
// // import { GoogleLogin } from 'react-google-login';
 
 
// const responseGoogle = (response) => {
//   debugger
//   console.log(response);
// }
 
// ReactDOM.render(
//   <GoogleLogin
//     // clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//     clientId="176240836888-m69sdrm7nbibdpdipdafg5bee77rcabk.apps.googleusercontent.com"
//     buttonText="Login"
//     onSuccess={responseGoogle}
//     onFailure={responseGoogle}
//     cookiePolicy={'single_host_origin'}
//   />,
//   document.getElementById('root')
// );