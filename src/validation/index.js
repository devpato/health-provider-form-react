export const required = (value) => {
	return value ? undefined : 'Value is required';
};

export const minLength = (value) => {
	return value.length < 4 ? 'Value must be at least 4 characters' : undefined;
};
