import './card.scss';
import src from'./img.png';
import { BusketIcon } from '../../icons';
import { useState } from 'react';
import { CardInterface } from '../../interfaces';
import { Btn } from '../btn/btn';
import { ImageBlock } from '../image-block/image-block';
import { Link } from 'react-router-dom';
import { Rating } from '../rating/rating';

export const Card = ({id, text, price, oldPrice, sale, isTop}:CardInterface):JSX.Element => {	
	
	const currency = "Руб";
	
	const [like, setLike] = useState<boolean>(false);
	
	return(
		<div key={id} className={"card"}>
			

			<ImageBlock src={src}/>
				<div className={"card__rating"}>
					<Rating/>
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
					<Link to={`/product/${id}`}>
						<Btn type={"card"}>
							<span>Заказать</span>
							<BusketIcon/>
						</Btn>
					</Link>
					

					<button className={"fast"}>
						<Link to={"/order"}>
							<span>Быстрый заказ</span>
						</Link>
					</button>
				</div>
			
		</div>
	);
};


// export default widthRouter()