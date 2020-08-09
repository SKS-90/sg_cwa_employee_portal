import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './employee.list.style.css';

class EmployeeList extends React.Component {
    constructor() {
        super();
        this.state = {
            employeelist: []
        }
    }

    componentDidMount() {
        console.log("componentdidmount");
        axios.get('http://localhost:8002/employee/getall')
            .then(response => {
                this.setState(this.state.employeelist = [...response.data]);
            })
    }

    render() {
        console.log(this.state.employeelist.map((item) => item.firstName));
        return (
            <div className="list-container">
                <h1>All Registered Employee</h1>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Date Of Birth</th>
                        <th>Department</th>
                    </tr>
                    {this.state.employeelist.map((item) =>
                        <tr>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.gender}</td>
                            <td>{item.dateOfBirth}</td>
                            <td>{item.department}</td>
                        </tr>
                    )}
                </table>
                <Link to="/" className='link-text'>Back To Registration</Link>
            </div>
        );
    }
}
export default EmployeeList;