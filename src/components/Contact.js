import React, {Component} from "react";
import firebase from "./FirebaseConfig";
import "./styles/_contact.scss";



export default class Contact extends Component{
    
    onSubmitForm(e){
        e.preventDefault();

        const db = firebase.firestore();

        const docRef = db.collection("contactFormData").doc("userId");

        docRef.set({
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            meddelande: e.target.elements.textarea.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitForm.bind(this)}>
                    <input type="text" name="name" placeholder="Namn"/>
                    <input type="email" name="email" placeholder="Mail"/>
                    <textarea name="textarea" placeholder="Fråga"/>
                    
                    <button>Skicka</button>

                </form>            
            
            </div>
        )
    }
}