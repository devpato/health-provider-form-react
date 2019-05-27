import React, { Component } from 'react';
import './App.css';
import Form from './components/form';

class App extends Component {
	submit = (values) => {
		window.alert(JSON.stringify(values));
	};

	render() {
		return (
			<div>
				<h1>New Provider Form</h1>
				<Form onSubmit={this.submit} initialValues={this.getInitialValues()} />
			</div>
		);
	}

	getInitialValues() {
		return {
			fullName: '',
			npi: '',
			bussinessAddress: '',
			telephone: '',
			email: ''
		};
	}
}

export default App;
