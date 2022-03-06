import cn from 'classnames';
import { SummaryItemProps } from './summary-item.props';
import './summary-item.scss';
export const SummaryItem = ({caption, counter = "", price, dark = false} : SummaryItemProps) => {
	

	return(
		<li className={cn('summary-item', {
			['summary-item_dark'] : dark
		})}>
			<div className='summary-item__caption'>{caption}</div>
			<div className='summary-item__counter'>{counter}</div>
			<div className='summary-item__price'>{price}руб</div>
		</li>
	);
};