import styles from './card.module.css';
import src from'./img.png';
import { StarIcon, HeartSmallIcon, HeartFillIcon } from '../../icons';
import { useState } from 'react';

export const Card = ():JSX.Element => {
	const id = 2545342;
	const alt = "alt";
	const text = "101 красная роза";
	const currency = "Руб";
	const oldPrice = 8900;
	const price = 8900;
	const sale = 19;
	const isTop = true;
	const [like, setLike] = useState<boolean>(false);
	
	return(
		<div key={id} className={styles.card}>
			
			<div className={styles.img__container}>
				

			<img src={src} alt={alt} className={styles.img}/>
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
					Заказать
				</button>

				<button className={styles.fast}>
					<span>Быстрый заказ</span>
				</button>
			</div>

		</div>
	);
};