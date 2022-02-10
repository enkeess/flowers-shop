import './card.scss';
import src from'./img.png';
import { StarIcon, HeartSmallIcon, HeartFillIcon, BusketIcon } from '../../icons';
import { useState } from 'react';
import { CardInterface } from '../../interfaces/card.interface';
import { Btn } from '../btn/btn';

export const Card = ({id, text, price, oldPrice, sale, isTop}:CardInterface):JSX.Element => {	
	const currency = "Руб";
	const [like, setLike] = useState<boolean>(false);
	
	return(
		<div key={id} className={"card"}>
			
			<div className={"img__container"}>
				
			<img src={src} alt={text} className={"img"}/>
			{sale && <div className={"card__sale"}> -{sale}%</div>}
			{isTop && <div className={"card__top"}>TOP</div> }
			<div className={"card__like"} onClick={() => setLike(!like)}> 
				{like ? <HeartFillIcon/> : <HeartSmallIcon/> }
			</div>
				
			</div>
			
				<div className={"card__rating"}>
					<StarIcon/>
					<StarIcon/>
					<StarIcon/>
					<StarIcon/>
					<StarIcon/>

				</div>
			<div className={"card__info"}>
				<div className={"card__name"}>
					{text}
				</div>
				<div className={"card__prices"}>
					<div className={"card__oldPrice"}>
						{oldPrice} {currency}
					</div>
					<div className={"card__curPrice"}>
						{price} {currency}
					</div>
				</div>
			</div>
			<div className={"card__btns"}>
				<Btn type={"card"}>
					<span>Заказать</span>
					<BusketIcon/>
				</Btn>
				

				<button className={"fast"}>
					<span>Быстрый заказ</span>
				</button>
			</div>

		</div>
	);
};