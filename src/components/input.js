import React from 'react';

export const renderInput = (props) => {
	const { label, input, type, placeholder, meta } = props;
	return (
		<div className="">
			<label>{label}</label>
			<div>
				<input {...input} placeholder={placeholder} type={type} autoComplete="off" />
				{meta.error && meta.touched && <div style={{ color: 'red' }}>{meta.error}</div>}
			</div>
		</div>
	);
};
