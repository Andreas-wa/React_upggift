import React,{Component} from "react";
import firebase from "../FirebaseConfig";
import Users from "./Users";


class UserLogin extends Component {
  state = {
    condition: true,
    user: "",
  };

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
            <div>
                {this.state.condition  && 
                <form onSubmit={this.onSubmitLogin.bind(this)}>
                    <input type="email" name="email" placeholder="Mail"/>
                   <input type="password" name="password" placeholder="Lösenord"/>
                   <button>Login</button>
                </form>}

                {this.state.condition && 
                <form onSubmit={this.resetPassword.bind(this)}>
                    <input type="email" name="resetEmail" placeholder="Mail"></input>
                    <button>Reset password </button>
                </form>
                } 

                {!this.state.condition && 
                <form onSubmit={this.onSubmitRegister.bind(this)}>
                    <input type="text" name="username" placeholder="Användarnamn"/>
                    <input type="email" name="email" placeholder="Mail"/>
                    <input type="password" name="password" placeholder="Lösenord"/>
                    <button>Register</button>
                </form>} 
                
                <button onClick={this.onClickLogin.bind(this)}>Login</button>
                <button onClick={this.onClickRegister.bind(this)}>Register</button>
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