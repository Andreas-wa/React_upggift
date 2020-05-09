import React, { Component } from "react";
import "./styles/_form.scss";
class Form extends Component {

    constructor(props) {
        super(props);

        //initillerat state
        this.state = {
            name: undefined,
            appointmentTime: undefined,
            mobile: undefined
        }
    }
    
    //spara state i localStorage
    // this and arrow function


    /* handleOnChangeName = (e) => {
        this.setState({ name: e.target.value })

    }
    handleOnChangeTime = (e) => {
        this.setState({ appointmentTime: e.target.value })
    }
    handleOnChangeMobile = (e) => {
        this.setState({ mobile: e.target.value })
    }
 */


    //skapa en metod 
    handleOnSubmit(e){
        e.preventDefault()
     /* this.setState({name:e.target.elements.Name.value, 
          appointmentTime: e.target.elements.Time.value 
 }) */
  // console.log(e.target.elements.Name.value)
        //this.setState({})
    }
    // uppdatera state med setState()


    //form kommer att anropa metoden med hjälp av event 


    render() {
        return (
            <div className={"form"}>
                <form onSubmit={this.handleOnSubmit}>
                    <div className={"form-name"}>
                        <h3 className={"form-name-title"}>Namn:</h3>
                            <input type={"text"} className={"form-name-input"} placeholder={"Ange ditt name"} name={"Name"}></input>
                        <br/>
                    </div>

                    <div className={"form-date"}>
                        <h3 className={"form-date-title"}>Datum/tid:</h3>            
                            <input type={"date"} className={"form-date-input"} placeholder={"Ange önskat datum"} name={"Time"}></input>
                            <input type={"number"} className={"form-date-time-input"} placeholder={"Ange önskat tid"} name={"Time"}></input>
                        <br/>
                    </div>

                    <div className={"form-phoneNumber"}>
                        <h3 className={"form-phoneNumber-title"}>Telefon:</h3>
                            <input type={"number"} className={"form-phoneNumber-input"} placeholder={"Ange telefon nummer"} name={"Mobile"}></input>
                        <br/>
                    </div>

                    <button className={"form-btn"}>Bekräfta</button>
                </form>

                {this.state.name}
            </div>
        )
    }

}

export default Form;
