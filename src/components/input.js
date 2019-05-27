import React from 'react';

export const renderInput = (props) => (
	<div className="">
		<label>{props.label}</label>
		<div>
			<input {...props.input} placeholder={props.placeholder} type={props.type} autoComplete="off" />
		</div>
	</div>
);
