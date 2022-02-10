import { ListProps } from './list.props';
import './list.scss';

export const List = ({children}:ListProps) => {
	return(
		<ul className={'list'}>
			List
			{/* {children && children.} */}
		</ul>
	);
};