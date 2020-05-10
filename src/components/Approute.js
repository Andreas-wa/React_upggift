import React from "react";

//npm i react-router-dom --save
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import App from "./App";
// import Card from "./Card";
import Booking from "./Booking";
import Form from "./Form";
import Notfoundpage from "./Notfoundpage";
import Adminform from "./AdminForm";
import AdminLogin from "./Auth/AdminLogin";

// import AdminInfo from "./AdminInfo";
//import Formular from "../pages/Formular";

const Approute = ()=>{

    return (
        <div>
             
            <BrowserRouter>
                 <Navbar/>
                 <Switch>
                 <Route path="/" component= {App} exact ></Route>
                 <Route path="/Bookings" component= {Booking} exact></Route>
                 <Route path="/form" exact component= {Form}></Route>
                 <Route path="/admin" exact component={Adminform}></Route>
                 <Route path="/adminLogin" exact component={AdminLogin}></Route>
                 <Route component={Notfoundpage}></Route>
                 </Switch>
            </BrowserRouter>
            
              
        </div>
    )
}

export default Approute;