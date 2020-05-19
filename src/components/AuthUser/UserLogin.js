import React,{Component} from "react";
import firebase from "../FirebaseConfig";

class UserLogin extends Component{

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
      
        const email= e.target.elements.email.value;
        const password= e.target.elements.password.value;

        firebase.auth().signInWithEmailAndPassword(email, password).then(res=> this.props.userCredential(res.user.email));
            
    }
    
    onSubmitRegister(e){
        const email= e.target.elements.email.value;
        const password= e.target.elements.password.value;
    //  const displayName = e.target.elements.username.value;
        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(email, password).then(res=> this.props.userCredential(res.user.email));
                    
    }
    
       render(){
           return(
               <div>
                
                
                {this.state.condition  && <form   onSubmit={this.onSubmitLogin.bind(this)}>
                       <input type="email" name="email" placeholder="Mail"/>
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
    
export default UserLogin;