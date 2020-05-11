import React, {Component} from "react";
import Admins from "./Auth/Admins";
import AdminLogin from "./Auth/AdminLogin";


class AdminSida extends Component{

    state={
        user:true
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