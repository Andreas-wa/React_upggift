import React, { Component } from "react";

import firebase from "./FirebaseConfig"
import Booking from "./Booking";
import { database } from "firebase";




class FirebaseTest extends Component {

    onClickFirebase() {
        const docRef = firebase.firestore().collection("Booking").doc("info")

        // läser data från firebase
        docRef.get().then(Booking => {
            if (Booking.exists) {
                console.log("document data: ", Booking.data() )
            }
            else{
                console.log("error");
            }
        })

        //skriver data i firebase
        docRef.set({
            price: 2000,
            item:"test"
        })

    }

    render() {

        return (
            <div>
                <button onClick={this.onClickFirebase.bind(this)}> Hämta firestore info</button>
            </div>
        )
    }

}

export default FirebaseTest;