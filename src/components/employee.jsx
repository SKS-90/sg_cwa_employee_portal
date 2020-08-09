import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './employee.style.css';

class Employee extends React.Component {

    constructor() {
        super();
        this.state = {
          firstName : "",
          lastName : "",
          gender: "",
          dateOfBirth : "",
          department : ""
        }
      }

      handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
      }
    
      handleSubmit = (event) => {
        axios.post('http://localhost:8002/employee/register', {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          dateOfBirth: this.state.dateOfBirth,
          gender: this.state.gender,
          department: this.state.department
        })
          .then(response => {
            if (response.data === "") {
              console.log("Registration Failed");
            }
            else {
              this.props.history.push('/success');
            }
          })
        event.preventDefault();
      }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
              <div className="signup-container">
                <h1>Employee Registration Portal</h1>
                <div className="form-group col-md-4">
                  <label>First Name</label>
                  <input type="text" placeholder="First Name" className="form-control" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-4">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last Name" className="form-control" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-4">
                  <label>Birth Date</label>
                  <input type="text" placeholder="Birth Date" className="form-control" name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-4">
                  <label>Gender</label>
                  <input type="text" placeholder="Gender" className="form-control" name="gender" value={this.state.gender} onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-4">
                  <label>Department</label>
                  <input type="text" placeholder="Department" className="form-control" name="department" value={this.state.department} onChange={this.handleChange} />
                </div>
                <input type="submit" value="submit"></input>
              </div>
              <div>
              <Link to="/allemployee">See All Registered Employee </Link>
              </div>
            </form>
          )
    }

}
export default Employee;