import { BusketItem } from '../busket-item/busket-item';
import './busket-list.scss';


export const BusketList = () => {
	return(
		<div>
			<div className='busket-list__top'>

			</div>

			<ul className='busket-list'>
				<BusketItem/>
				<BusketItem/>
				<BusketItem/>
				<BusketItem/>
			</ul>
			
		</div>
	);
};