import React, {Component} from "react";
import Users from "./Users";
import UserLogin from "./UserLogin";


class UserSida extends Component{

    // state={
    //     user:true
    // }

    // findUserInfo(e){
    //     console.log(e);
    // }
    state = {
        user: null || localStorage.getItem("user"),
    }
    callback(user, jwt) {
        this.setState({ user: user.email, jwt: jwt })
        localStorage.setItem("jwt", this.state.jwt)
        localStorage.setItem("user", this.state.user)
    }
    render(){

        const loggedIn = this.state.user || localStorage.getItem("user");
        return(
            <div>
                {!loggedIn ?
                <UserLogin userCredential={(user) => {
                        this.setState({ user: user.email })
                        localStorage.setItem("user", this.state.user)
                    }} /> :
                    // <UserLogin userCredential={this.callback.bind(this)}/> :
                    <Users userInfo={this.state.user}/>
                }
            </div>
        )

    }

}

export default UserSida;