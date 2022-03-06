import { Children } from 'react';
import { DropdownModal } from '../dropdown-modal/dropdown-modal';
import { FormBlockProps } from './form-block.props';
import './form-block.scss';

export const FormBlock = ({title, type, selectData, name, content = []}:FormBlockProps) => {
	const isSelect = ():JSX.Element => {
		return(
			<div className='form-block'>
				<label htmlFor={title} className='form-block__title'> {title}</label>
				<div className='form-block__field'>
					<DropdownModal title='' type={"short"} content={content}/>
				</div>
			</div>
		);
	};

	const def = () => {
		return(
			<div className='form-block'>
				<label htmlFor={title} className='form-block__title'> {title}</label>
				<input name={title} type={type} className='form-block__field'/>
			</div>
		);
	};

	const isToggle = () => {
		return(
			<>
				<label htmlFor={title}> {title}</label>
				<input name={title} type="checkbox" value="pop"></input>
			</>
		);
	};

	const manager = () => {
		switch(type) {
			case "select":
				return isSelect();
			case "toggle":
				return isToggle();
			default :
				return def();
		}
	}
	return(
		<>
			{
				manager()
			}
		</>
	);
};