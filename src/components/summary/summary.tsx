import { Link } from 'react-router-dom';
import { Btn } from '..';
import { SummaryProps } from './summary.props';
import './summary.scss';
export const Summary = ({children}:SummaryProps) => {
	return(
		<div className='summary'>
			<div className='summary__title'>
				Ваш заказ
			</div>

			<div className='summary__list'>
				{children}
			</div>
			

			<div className='summary__total'>
				<div className='summary__total-caption'>Всего</div>
				<div className='summary__total-price'>5150 руб</div>
			</div>

			<Btn>
				Оформить заказ
			</Btn>

		</div>
	);
};

{/* <div className='busket__total'>


	<ul className='busket__total-list'>
		<li className='busket__total-item'>
			<div className='busket__total-caption'>Товары</div>
			<div className='busket__total-price'>5500 руб</div>
		</li>
		<li className='busket__total-item'>
			<div className='busket__total-caption'>Скидка</div>
			<div className='busket__total-price'>350 руб</div>
		</li>
	</ul>

	<div className='busket__total-sum'>
		<div className='busket__total-caption busket__total-caption_big'>Всего</div>
		<div className='busket__total-price busket__total-price_big'>5150 руб</div>
	</div>

	<Btn>
		<Link to={"/order"}>Оформить заказ</Link>
	</Btn>
</div> */}