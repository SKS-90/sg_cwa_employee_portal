import React from "react";
import { Link } from "react-router-dom";

class RegisterSuccess extends React.Component{

    render(){
        return(
              <div className="container">
                    <h1>Successfully Registered</h1>
                    <Link to="/allemployee" className='link-text'>See All Registered Employee</Link>
               </div>
        )
    }
}

export default RegisterSuccess;