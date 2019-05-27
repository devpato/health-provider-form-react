import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
class App extends Component {
	submit = (values) => {
		console.log(JSON.stringify(values));
	};

	render() {
		return (
			<div className="registration-form ui container">
				<img src="../../assets/availity-logo.png" />
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
