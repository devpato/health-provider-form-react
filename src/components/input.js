import React from 'react';
export const renderInput = (props) => {
	const { label, input, type, placeholder, meta } = props;
	return (
		<div className={className(meta)}>
			<label>{label}</label>
			<input {...input} placeholder={placeholder} type={type} autoComplete="off" />
			{renderError(meta)}
		</div>
	);
};

export const renderError = ({ error, touched }) => {
	if (touched && error) {
		return (
			<div className="ui error message">
				<div className="header"> {error}</div>
			</div>
		);
	}
};

export const className = (meta) => {
	return `field ${meta.error && meta.touched ? 'error' : ''} `;
};
