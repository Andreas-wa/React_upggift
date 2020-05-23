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
import AdminSida from "./AdminSida";
import FirebaseTest from "./FirebaseTest";
import Users from "./AuthUser/Users";
import Contact from "./Contact";

// import UserLogin from "./AuthUser/UserLogin";
import UserSida from "./AuthUser/UserSida";

// import AdminInfo from "./AdminInfo";
//import Formular from "../pages/Formular";

const Approute = ()=>{

    return (
        <div className={"Approute"}>
             
            <BrowserRouter>
                 <Navbar/>
                 <Switch>
                 <Route path="/" component= {App} exact ></Route>
                 <Route path="/Bookings" component= {Booking} exact></Route>
                 <Route path="/form" exact component= {Form}></Route>
                 {/* <Route path="/admin" exact component={Adminform}></Route> */}
                 <Route path="/Users" exact component={Users}></Route> 
                 <Route path="/Contact" exact component={Contact}></Route>

                 <Route path="/adminlogin" exact component={AdminLogin}></Route>
                 <Route path="/FirebaseTest" exact component={FirebaseTest}></Route>

                 <Route path="/UserSida" exact component={UserSida}></Route>

                 <Route component={Notfoundpage}></Route>
                 </Switch>
            </BrowserRouter>
            
              
        </div>
    )
}

export default Approute;