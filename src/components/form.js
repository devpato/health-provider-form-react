import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../components/input';
import { required, alphaNumeric,number, minLength, phoneNumber, email  } from '../validation/index';

import '../components/form.css';

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
					validate={[ required, alphaNumeric, minLength ]}
				/>
				<Field name="npi" component={renderInput} type="text" placeholder="NPI" label="NPI" validate={[ required,  number ]}/>
                <Field name="businessAdress" component={renderInput} type="text" placeholder="Business Address" label="Business Address" validate={[ required,  alphaNumeric,  minLength]}/>
                <Field name="telephone" component={renderInput} type="text" placeholder="XXX-XXX-XXXX" label="Telephone" validate={[ required,  phoneNumber]}/>
                <Field name="email" component={renderInput} type="text" placeholder="example@example.com" label="E-mail" validate={[ required,  email]}/>
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
