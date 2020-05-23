import React,{Component} from "react";
import axios from "axios";

import "../styles/_admin.scss";


class AdminLogin extends Component{

    state={
        condition: true
    }

    onClickRegister(){
        this.setState({condition:false})
    }
    
    onClickLogin(){
       this.setState({condition:true})
    }
   onSubmitLogin(e){
       e.preventDefault();
       axios
     .post('http://localhost:1337/auth/local', {
       identifier: e.target.elements.email.value,
       password: e.target.elements.password.value,
     })
     .then(response => {
       // Handle success.
       console.log('Well done!');
       console.log('User profile', response.data.user);
       console.log('User token', response.data.jwt);
       this.userInfo(response.data.jwt)
     })
     .catch(error => {
       // Handle error.
       console.log('An error occurred:', error);
     });
   }
    
    onSubmitRegister(e){
        e.preventDefault();
        axios
     .post('http://localhost:1337/auth/local/register', {
       username: e.target.elements.username.value,
       email: e.target.elements.email.value,
       password: e.target.elements.password.value,
     })
     .then(response => {
       // Handle success.
       console.log('Well done!');
       console.log('User profile', response.data.user);
       console.log('User token', response.data.jwt);
     })
     .catch(error => {
       // Handle error.
       console.log('An error occurred:', error);
     });
    }
       render(){
           return(
               <div>
                
                {this.state.condition  && <form   onSubmit={this.onSubmitLogin.bind(this)}>
                       <input type="email"   name="email" placeholder="Mail"/>
                       <input type="password" name="password" placeholder="Lösenord"/>
                       <button>Login</button>
                   </form>}
                  
                {!this.state.condition && <form onSubmit={this.onSubmitRegister.bind(this)}>
                       <input type="text" name="username" placeholder="Användarnamn"/>
                        <input type="email" name="email" placeholder="Mail"/>
                       <input type="password" name="password" placeholder="Lösenord"/>
    
                       <button>Register</button>
    
                   </form>}
    
   {/* <button onClick={this.onClickRegister.bind(this)}>Don't have an account?</button> */}
   <button onClick={this.onClickLogin.bind(this)}>Login</button>
   <button onClick={this.onClickRegister.bind(this)}>Register</button>
                  
    
               </div>
           )
       }
   }
    
   export default AdminLogin;
//     onClickRegister(e) {
//         if (this.state.condition !== false) {
//           this.setState({ condition: false });
//           e.target.innerHTML = "Har redan ett konto!";
//         } else {
//           this.setState({ condition: true });
//           e.target.innerHTML = "Inget konto!?";
//         }
//       }

//     render(){
//         return(
//             <div>

//         {this.state.condition &&
//             <form>
//             Login med admin:
//                 <input type="email" placeholder="Mail"></input>
//                 <input type="password" placeholder="Lösenord"></input>
//                 <button>Login</button>
//             </form>
//         }
//             <br></br>
//         {!this.state.condition &&
//             <form>
//             Registrera admin:
//                 <input type="text" placeholder="Användarnamn"></input>
//                 <input type="email" placeholder="Mail"></input>
//                 <input type="password" placeholder="Lösenord"></input>
//                 <button>Registrera</button>
//             </form>
//             }

//             <button onClick={this.onClickRegister.bind(this)}>Inget konto!?</button>

//             </div>
//         )
//     }

// }

// export default AdminLogin;