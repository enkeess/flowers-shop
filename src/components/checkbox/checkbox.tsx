import { CheckBoxProps } from './checkbox.props';

import './checkbox.scss';

export const Checkbox = ({title, value, ...props}:CheckBoxProps) => {
	return(
		<div className="checkbox">
			<input className="custom-checkbox" type="checkbox" id={value} name={value} value={value} {...props}/>
			<label htmlFor={value}>{title}</label>
		</div>
	);
};