import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './employee.list.style.css';

class EmployeeList extends React.Component {
    constructor() {
        super();
        this.state = {
            employeelist: [],
            msg: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8002/employee/getall')
            .then(response => {
                if (response.data.length === 0) {
                    this.setState({ msg: 'Not Yet Register Any Employee !' });
                }
                else {
                    this.setState({ employeelist: [...response.data] });
                }

            })
    }

    render() {
        return (
            <div className="list-container">
                <h1>All Registered Employee</h1>
                <h4>{this.state.msg}</h4>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Date Of Birth</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    {this.state.employeelist.map((item) =>
                        <thead key={item.id}>
                            <tr >
                                <td >{item.firstName}</td>
                                <td >{item.lastName}</td>
                                <td >{item.gender}</td>
                                <td >{item.dateOfBirth}</td>
                                <td >{item.department}</td>
                            </tr>
                        </thead>
                    )}
                </table>
                <Link to="/" className='link-text'>Back To Registration</Link>
            </div>
        );
    }
}
export default EmployeeList;