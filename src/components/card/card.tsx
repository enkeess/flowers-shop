import styles from './card.module.css';
import src from'./img.png';
import { StarIcon, HeartSmallIcon, HeartFillIcon, BusketIcon } from '../../icons';
import { useState } from 'react';
import { CardInterface } from '../../interfaces/card.interface';

export const Card = ({id, text, price, oldPrice, sale, isTop}:CardInterface):JSX.Element => {	
	const currency = "Руб";
	const [like, setLike] = useState<boolean>(false);
	
	return(
		<div key={id} className={styles.card}>
			
			<div className={styles.img__container}>
				
			<img src={src} alt={text} className={styles.img}/>
			{sale && <div className={styles.card__sale}> -{sale}%</div>}
			{isTop && <div className={styles.card__top}>TOP</div> }
			<div className={styles.card__like} onClick={() => setLike(!like)}> 
				{like ? <HeartFillIcon/> : <HeartSmallIcon/> }
			</div>
				
			</div>
			
				<div className={styles.card__rating}>
					<StarIcon/>
					<StarIcon/>
					<StarIcon/>
					<StarIcon/>
					<StarIcon/>

				</div>
			<div className={styles.card__info}>
				<div className={styles.card__name}>
					{text}
				</div>
				<div className={styles.card__prices}>
					<div className={styles.card__oldPrice}>
						{oldPrice} {currency}
					</div>
					<div className={styles.card__curPrice}>
						{price} {currency}
					</div>
				</div>
			</div>
			<div className={styles.card__btns}>
				<button className={styles.btn}>
					<span>Заказать</span>
					<BusketIcon/>
				</button>

				<button className={styles.fast}>
					<span>Быстрый заказ</span>
				</button>
			</div>

		</div>
	);
};