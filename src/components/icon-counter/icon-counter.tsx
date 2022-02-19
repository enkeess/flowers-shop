import { IconCounterProps } from './icon-counter.props';
import './icon-counter.scss';

export const IconCounter = ({icon}:IconCounterProps) => { 
	const counter = 2;

	return(
		<div className='icon-counter'>
			{icon}
			<div className='icon-counter__counter'>
				{counter}
			</div>
		</div>
	);
};