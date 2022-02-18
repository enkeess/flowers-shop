import { SideListItemProps } from './side-list.props';
import './side-list.scss';

export const SideListItem = ({children}:SideListItemProps) => {
	return(
		<li key={children?.toString()} className='side-list-item'>
			{children}
		</li>
	);
};