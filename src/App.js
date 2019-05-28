import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import logo from './assets/availity-logo.png';
import providers from './api/providers';
import Status from './components/status';
class App extends Component {
  state = {
    status: null
  };

  submit = async values => {
    const response = await providers.post('/providers/', {
      ...values
    });
    this.setState({ status: response.status });
    if (response.status === 200) {
      this.getInitialValues();
      this.myFormRef.reset();
    } else {
      console.log('ERROR: There was an error creating a new Provider');
    }
    this.hideMessage();
  };

  render() {
    return (
      <div className='registration-form ui container'>
        <img src={logo} alt={logo} />
        <h1>New Provider Form</h1>
        <Form
          onSubmit={this.submit}
          initialValues={this.getInitialValues()}
          ref={el => (this.myFormRef = el)}
        />
        <Status status={this.state.status} />
      </div>
    );
  }

  hideMessage() {
    setTimeout(() => {
      this.setState({ status: null });
    }, 3000);
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
