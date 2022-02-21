import { Counter } from '../../../components';
import { HeartIcon, TrashIcon } from '../../../icons';
import './busket-item.scss';

import src from './101.png';

export const BusketItem = () => {
	// const src = "src";
	const alt = "alt";
	const name = "25 желтых тюльпанов";
	const price = 795;
	const oldprice = 995;
	const sum = price;
	return(
		<div className='busket-item'>
			<div className='busket-item__img'> <img src={src} alt={alt}/> </div>
			<div className='busket-item__name'>{name}</div>
			<div className='busket-item__prices'>
				<div className='busket-item__price'>{price} руб</div>
				<div className='busket-item__oldprice'>{oldprice} руб</div>
			</div>
			<div className='busket-item__counter'> <Counter/> </div>
			<div className='busket-item__sum'> {sum} руб</div>
			<div className='busket-item__icons'> 
				<TrashIcon/>
				<HeartIcon/>
			</div>
		</div>
	);
};