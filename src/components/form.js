import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../components/input';
import { required, minLength } from '../validation/index';

class Form extends Component {
	render() {
		const { handleSubmit } = this.props;
		console.log(handleSubmit);
		return (
			<form onSubmit={handleSubmit} className="ui form error">
				<Field
					name="fullName"
					component={renderInput}
					type="text"
					placeholder="Full Name"
					label="Full Name"
					validate={[ required, minLength ]}
				/>
				<Field name="npi" component={renderInput} type="text" placeholder="NPI" label="NPI" />
				<button type="submit" label="submit" className="ui button primary">
					Create
				</button>
			</form>
		);
	}
}

Form = reduxForm({
	form: 'form'
})(Form);

export default Form;
