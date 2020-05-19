import React, {Component} from "react";
import firebase from "../FirebaseConfig";

class Users extends Component{

    logout(){
        firebase.auth().signOut();
        console.log("välkommen åter");
        localStorage.clear();
        window.location.reload(false);
    }

    render(){
        return(
        <div>
            Users Profile: {this.props.userdata}
            
            <button onClick={this.logout.bind(this)}>Logout</button>
        </div>
        )
    }
}
export default Users;