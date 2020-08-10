import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './employee.style.css';

class Employee extends React.Component {

  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      department: "",
      errorMsg: ""
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    if (this.state.firstName === '' && this.state.lastName === '' &&
      this.state.gender === '' && this.state.dateOfBirth === '' && this.state.department === '') {
      this.setState({ errorMsg: "All fields are mandatory..!" });
    }
    else {
      axios.post('http://localhost:8002/employee/register', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        dateOfBirth: this.state.dateOfBirth,
        gender: this.state.gender,
        department: this.state.department
      })
        .then(response => {
          if (response.data === "") {
            this.props.history.push('/failed');
          }
          else {
            this.props.history.push('/success');
          }
        })
    }

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="signup-container">
          <h1>Employee Registration Portal</h1>
          <h4 className='error-h4'>{this.state.errorMsg}</h4>
          <div className="form-group col-md-4">
            <label>First Name<font color='red'>*</font></label>
            <input type="text" placeholder="First Name" className="form-control" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </div>
          <div className="form-group col-md-4">
            <label>Last Name<font color='red'>*</font></label>
            <input type="text" placeholder="Last Name" className="form-control" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </div>
          <div className="form-group col-md-4">
            <label>Birth Date<font color='red'>*</font></label>
            <input type="text" placeholder="Birth Date" className="form-control" name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.handleChange} />
          </div>
          <div className="form-group col-md-4">
            <label>Gender<font color='red'>*</font></label>
            <input type="text" placeholder="Gender" className="form-control" name="gender" value={this.state.gender} onChange={this.handleChange} />
          </div>
          <div className="form-group col-md-4">
            <label>Department<font color='red'>*</font></label>
            <input type="text" placeholder="Department" className="form-control" name="department" value={this.state.department} onChange={this.handleChange} />
          </div>
          <input className='input-sub' type="submit" value="Register"></input>
          <Link to="/allemployee">See All Registered Employee</Link>
        </div>
      </form>
    )
  }

}
export default Employee;