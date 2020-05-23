import React, {Component} from "react";
import Users from "./Users";
import UserLogin from "./UserLogin";
import firebase from "../FirebaseConfig";



class UserSida extends Component{

    // state={
    //     user:true
    // }

    // findUserInfo(e){
    //     console.log(e);
    // }
    state = {
        user: null || localStorage.getItem("user"),
        displayname:""
    }
    // callback(user, jwt) {
    //     this.setState({ user:user.email, jwt:jwt })
    //     localStorage.setItem("jwt", this.state.jwt)
    //     localStorage.setItem("user", this.state.user)
    // }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(
          user=> this.setState({user: user.email, displayName:user.displayName})
        )
        
    }
    render(){

        const loggedIn = this.state.user || localStorage.getItem("user");
        return(
            <div className={"UserSida"}>
                {!loggedIn ?
                <UserLogin userCredential={(user) => {
                        this.setState({ user:user.email })
                        localStorage.setItem("user", this.state.user)
                    }}
                    
                    showDisplayName={ (username)=>{
                        //console.log("displyaname from parent" + username)

                         firebase.auth().onAuthStateChanged((user)=>{
                            user.updateProfile({
                                displayName: username
                            }).then( ()=>{
                                 this.setState({
                                    displayName: user.displayName
                                 })
                
                              console.log("Displayname: "+ this.state.displayName)
                            })

                         })

                    }} 

                      /> :
                    <Users userData={this.state.displayName || this.state.user} />
                }
            </div>
        )
    }
}

export default UserSida;