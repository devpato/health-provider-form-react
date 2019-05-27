export const validate = (inputs) => {
	const errors = {};
	if (!inputs.fullName) {
		errors.fullName = 'Enter your Full Name';
	}

	if (!inputs.npi) {
		errors.npi = 'Enter your NPI';
	}
	return errors;
};
