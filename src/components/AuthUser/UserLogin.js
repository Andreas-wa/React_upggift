import React,{Component} from "react";

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import firebase from "../FirebaseConfig";
import Users from "./Users";

import "../styles/_login.scss";

class UserLogin extends Component {
  state = {
    condition: true,
    user: "",
  };

  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/Users',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
  };

componentDidMount(){
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
    this.setState({user:user.email})
    console.log(user);
    }
    else{
      console.log("Ingen användare inloggad");
    }      
  })
}

  onClickRegister() {
    this.setState({ condition: false });
  }

  onClickLogin() {
    this.setState({ condition: true });
  }

  onSubmitLogin(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => this.props.userCredential(res.user.email));
  }

  onSubmitRegister(e) {
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const displayName = e.target.elements.username.value;

    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user.sendEmailVerification();
        this.props.userCredential(res.user.email);
        this.props.showDisplayName(displayName);
      });
  }

  resetPassword(e) {
    var auth = firebase.auth();
    var emailAddress = e.target.elements.resetEmail.value;

    auth.sendPasswordResetEmail(emailAddress).then(function () {
        console.log("email skickat");
    });
    e.preventDefault();
  }

    render(){
        return(
            <div className={"UserLogin"}>
                {this.state.condition  && 
                <form className={"login-form"} onSubmit={this.onSubmitLogin.bind(this)}>
                  <h3 className={"login-text"}>Login</h3>
                  <input type="email" name="email" className={"login-email"} placeholder="Mail"/>
                  <input type="password" name="password" className={"login-password"} placeholder="Lösenord"/>
                  <button className={"login-btn"}>Login</button>
                </form>}

                  <br/>

                {this.state.condition && 
                <form onSubmit={this.resetPassword.bind(this)}>
                  <h4 className={"reset-text"}>Reset Password</h4>
                    <input type="email" name="resetEmail" className={"reset-email"} placeholder="Mail"></input>
                    <button className={"reset-btn"}>Reset</button>
                </form>
                } 

                {!this.state.condition && 
                <form onSubmit={this.onSubmitRegister.bind(this)}>
                  <h3 className={"reg-text"}>Registrera</h3>
                    <input type="text" name="username" className={"reg-name"} placeholder="Användarnamn"/>
                    <input type="email" name="email" className={"reg-email"} placeholder="Mail"/>
                    <input type="password" name="password" className={"reg-password"} placeholder="Lösenord"/>
                    <button className={"reg-btn"}>Register</button>
                </form>} 

                <div className={"UserLogin-btn"}>
                  <button className={"btn-login"} onClick={this.onClickLogin.bind(this)}>Login</button>
                  <button className={"btn-reg"} onClick={this.onClickRegister.bind(this)}>Register</button>
                </div>

                <hr className={"UserLogin-or"}/>
                
                <div className={"MyApp"}>
                  <div className={"MyApp-text"}>
                  <h1 className={"MyApp-h1"}>My App</h1>
                  <p className={"MyApp-p"}>Please sign-in:</p>
                  </div>
                  <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                </div>

                  {this.state.user? <Users userData={this.state.displayName || this.state.user}/> : <div></div>}
                
            </div>
    );
  }
}


//   render() {
//     return (
//       <div>
//         {this.state.condition && (
//           <div>
//             <h2>Login</h2>
//             <form onSubmit={this.onSubmitLogin.bind(this)}>
//               <input type="email" name="email" />
//               <input type="password" name="password" />
//               <button>Login</button>
//             </form>

//             <form onSubmit={this.resetPassword.bind(this)}>
//               <input type="email" name="resetEmail"></input>
//               <button>Reset password </button>
//             </form>
//           </div>
//         )}

//         {!this.state.condition && (
//           <div>
//             <h2>Register</h2>
//             <form onSubmit={this.onSubmitRegister.bind(this)}>
//               <input type="text" name="username" />
//               <input type="email" name="email" />
//               <input type="password" name="password" />

//               <button>Register</button>
//             </form>
//             <div> Or</div>
//             <div>
//               <h1>My App</h1>
//               <p>Please sign-in:</p>
//               {/* <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/> */}
//             </div>

//             {this.state.user ? (
//               <Users userData={this.state.user} />
//             ) : (
//               <div> </div>
//             )}
//           </div>
//         )}

//         <button onClick={this.onClickLogin.bind(this)}>Login</button>
//         <button onClick={this.onClickRegister.bind(this)}>Register</button>
//       </div>
//     );
//   }
// }
    
export default UserLogin;