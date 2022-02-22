import { OutlineBlockProps } from './outline-block.props';
import './outline-block.scss';

export const OutlineBlock = ({children}:OutlineBlockProps) => {
	return(
		<div className='outline-block'>
			{children}
		</div>
	);
};