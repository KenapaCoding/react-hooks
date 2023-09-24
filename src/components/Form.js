/** @format */

import React, { useId } from 'react';

const Form = ({ text }) => {
	const id = useId();
	return (
		<>
			<label htmlFor={`${id}-1`}>{text}</label>
			<input
				id={`${id}-1`}
				type='text'
			/>
			<label htmlFor={`${id}-2`}>{text} 2</label>
			<input
				id={`${id}-2`}
				type='text'
			/>
		</>
	);
};

export default Form;
