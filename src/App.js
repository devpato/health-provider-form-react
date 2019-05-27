import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import logo from './assets/availity-logo.png';

class App extends Component {
  submit = values => {
    console.log(JSON.stringify(values));
  };

  render() {
    return (
      <div className='registration-form ui container'>
        <img src={logo} />
        <h1>New Provider Form</h1>
        <Form onSubmit={this.submit} initialValues={this.getInitialValues()} />
      </div>
    );
  }

  getInitialValues() {
    return {
      fullName: '',
      npi: '',
      businessAddress: '',
      telephone: '',
      email: ''
    };
  }
}

export default App;
