import React, {Component} from "react";
import firebase from "../FirebaseConfig";

class Users extends Component{

    logout(){
        firebase.auth().signOut();
        console.log("välkommen åter");
        localStorage.clear();
        window.location.reload(false);
    }


    deleteAccount(){
        const userfromLocal = localStorage.getItem("user");
        console.log(userfromLocal);
        var user = firebase.auth().currentUser;
        console.log(user);
    
    if(user){
        user.delete().then(function() {
            localStorage.clear();
            window.location.reload(false);
        }).catch(function(error) {

        });
    }
}

    render(){
        return(
        <div className={"Users"}>
            Users Profile: {this.props.userData}
            
            <button onClick={this.logout.bind(this)}>Logout</button>
            <button onClick={this.deleteAccount.bind(this)}>Ta bort konto</button>

        </div>
        )
    }
}
export default Users;