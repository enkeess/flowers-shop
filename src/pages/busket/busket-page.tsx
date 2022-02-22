import { Btn, Counter, Layout, Title } from '../../components';

import { Link } from 'react-router-dom';


import { HeartIcon, TrashIcon } from '../../icons';
import src from '../../img/card/101.png';


import './busket-page.scss';


export const BusketPage = () => {

	const items = [1,2,3,4];


	const getItems = () => {
		
		const alt = "alt";
		const name = "25 желтых тюльпанов";
		const price = 795;
		const oldprice = 995;
		const sum = price;

		return(
			items.map(item => {
				return(
					<div className='busket__item'>
					<div className='busket__item-img'> <img src={src} alt={alt}/> </div>
					<div className='busket__item-name'>{name}</div>
					<div className='busket__item-prices'>
						<div className='busket__item-price'>{price} руб</div>
						<div className='busket__item-oldprice'>{oldprice} руб</div>
					</div>
					<div className='busket__item-counter'> <Counter/> </div>
					<div className='busket__item-sum'> {sum} руб</div>
					<div className='busket__item-icons'> 
						<TrashIcon/>
						<HeartIcon/>
					</div>
				</div>
				);
			})
		);
	};

	return(
		<Layout>
			<Title>
				Корзина
			</Title>
			<div className='busket'>
				
				<div className='busket__columns'>
					<div></div>
					<div>Название</div>
					<div>Цена за шт</div>
					<div>Кол-во</div>
					<div>Итог</div>
				</div>

				<div className='busket__link'>
					<Link to="/catalog">
						Продолжить покупки
					</Link>
				</div>
				
				<div className='busket__list'> 
					{getItems()}
				</div>


				<div className='busket__total'>
					<div className='busket__total-title'>
						Ваш заказ
					</div>

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
						Оформить заказ
					</Btn>
				</div>
			</div>
		</Layout>
	);
};