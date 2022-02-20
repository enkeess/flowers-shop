import './input.scss';

export const Input = () => {

	return(
		<div className='input'>
			<input type="tel" className='input__field'/>
			<div className='input__title'>
				Номер телефона
			</div>
		</div>
	);
};