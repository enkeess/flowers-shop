import { useState } from 'react';
import { Card } from '../card/card';
import styles from './carousel.module.css';

export const Carousel = () => {
	const title = 'Carousel';

	
	const content = [<Card />, <Card/>, <Card/>, <Card/>, <Card />, <Card />, <Card/>, <Card/>, <Card/>, <Card />];

	const [width, setWidth] = useState<number>(window.innerWidth);

	window.addEventListener('resize', () => {
		if(window.innerWidth < 768 && width > 768) {
			setWidth(window.innerWidth);
		}

		if(window.innerWidth > 768 && width < 768) {
			setWidth(window.innerWidth);
		}
		
	});



	return(
		<div className={styles.carousel}>
			<div className={styles.carousel__title}>
				{title}
			</div>
			<div className={styles.carousel__viewbox}>
				<div className={styles.carousel__content}>
					{content.map((item) => (<div className={styles.carousel__item}>{item}</div>))}
				</div>
				
			</div>
			
		</div>
	);
};