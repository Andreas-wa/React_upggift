import React from "react";
import "./styles/_cards.scss";


const Card = (props) => {
    
    return (
        <div className="card">
        <div className={"card-one"}>
            <img src={props.bild} className={"card-one-img-top"}/>
            <div className={"card-one-body"}>
                <h5 className={"card-one-title"}>{props.title}</h5>
                <p className={"card-one-text"}>{props.beskrivning}</p>
                <p className={"card-one-pris"}>{props.pris}</p>
                <button className={"btn btn-one-primary"}>Boka</button>
            </div>
        </div>
        </div>
    )
}

export default Card;