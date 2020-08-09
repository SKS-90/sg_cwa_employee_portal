import React from 'react';
import Employee from './components/employee';
import Success from './components/Success';
import EmployeeList from './components/employee.list';
import {
  BrowserRouter as Router,Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Employee}></Route>
        <Route exact path='/success' component={Success}></Route>
        <Route exact path='/allemployee' component={EmployeeList}></Route>
      </Router>
    </div>
  );
}

export default App;
