import { SideListProps } from './side-list.props';
import './side-list.scss';

export const SideList = ({children}:SideListProps) => {
	return(
		<ul className='side-list'>
			{children}
		</ul>
	);
};