import React from "react";
import { Link } from "react-router-dom";

class RegisterSuccess extends React.Component{

    render(){
        return(
              <div className="container">
                    <h1> Successfully Registered </h1>
                    <Link to="/allemployee">See all Registered employee </Link>
               </div>
        )
    }
}

export default RegisterSuccess;