import { TitleProps } from './title.props';
import './title.scss';

export const Title = ({children}:TitleProps) => {
	return(
		<h2 className='title'> {children} </h2>
	);
};