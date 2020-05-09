import React from "react";
import "./styles/_booking.scss";

const Booking =()=>{
    return (
        <div className={"booking"}>
            <h2 className={"booking-title"}>Mina bookningar</h2>
            <p className={"booking-text"}>Inga bokningar nu</p>
            <button className={"btn btn-booking-change"}>Ändra</button>
        </div>
    )
}

export default Booking;