import styles from './card.module.css';
import src from'./img.png';
import { StarIcon } from '../../icons';

export const Card = ():JSX.Element => {
	
	const alt = "alt";
	const name = "101 красная роза";
	const currency = "Руб";
	const oldPrice = 8900;
	const curPrice = 8900;
	return(
		<div className={styles.card}>
			<div className={styles.img__container}>
				<img src={src} alt={alt} className={styles.img}/>
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
					{name}
				</div>
				<div className={styles.card__prices}>
					<div className={styles.card__oldPrice}>
						{oldPrice} {currency}
					</div>
					<div className={styles.card__curPrice}>
						{curPrice} {currency}
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