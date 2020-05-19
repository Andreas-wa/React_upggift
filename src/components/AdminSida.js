import React, {Component} from "react";
import Admins from "./Auth/Admins";
import AdminLogin from "./Auth/AdminLogin";


class AdminSida extends Component{

    // state={
    //     user:true
    // }
    state = {
        user: null || localStorage.getItem("user"),
        jwt: null
    }
    callback(user, jwt) {
        this.setState({ user: user.email, jwt: jwt })
        localStorage.setItem("jwt", this.state.jwt)
        localStorage.setItem("user", this.state.user)
    }
    findUserInfo(e){
        console.log(e);
    }
    render(){
        return(
            <div>
                <Admins/>
                eller
                <AdminLogin userInfo={this.findUserInfo}/>
            </div>
        )

    }

}

export default AdminSida;