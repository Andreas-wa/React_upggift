import React, {Component} from "react";
import "./styles/_cards.scss";

import firebase from "./FirebaseConfig";
import Booking from "./Booking";

class Card extends Component {
    
    onClickSaveFire(){

        const docRef = firebase.firestore().collection("Booking").doc(this.props.docId.toString());

        docRef.set({
            title: this.props.title,
            beskrivning: this.props.beskrivning,
            pris: this.props.pris
        })
        // docRef.get().then(Booking => console.log(Booking.data()));
    }

    render(){
    return (
        <div className="card">
        <div className={"card-one"}>
            <img src={this.props.bild} className={"card-one-img-top"}/>
            <div className={"card-one-body"}>
                <h5 className={"card-one-title"}>{this.props.title}</h5>
                <p className={"card-one-text"}>{this.props.beskrivning}</p>
                <p className={"card-one-pris"}>{this.props.pris}</p>
                <button className={"btn btn-one-primary"} onClick={this.onClickSaveFire.bind(this)}>Boka</button>
            </div>
        </div>
        </div>
    )
}
}

export default Card;