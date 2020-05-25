import React, {Component} from "react";
import firebase from "./FirebaseConfig";
import "./styles/_contact.scss";


export default class Contact extends Component{
    
    onSubmitForm(e){
        e.preventDefault();

        const db = firebase.firestore();

        const docRef = db.collection("contactFormData").doc(e.target.elements.email.value);

        docRef.set({
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            meddelande: e.target.elements.textarea.value
        })
    }

    render(){
        return(
            <div className={"contact"}>
                <form className={"contact-form"} onSubmit={this.onSubmitForm.bind(this)}>
                    <h2 className={"contact-h1"}>Kontakta oss</h2>
                    <input type="text" name="name" className={"contact-name"} placeholder="Namn"/>
                    <input type="email" name="email" className={"contact-input"} placeholder="Mail"/>
                    <textarea name="textarea" className={"contact-text"} placeholder="Fråga"/>
                    
                    <button className={"contact-btn"}>Skicka</button>

                </form>            
            
            </div>
        )
    }
}