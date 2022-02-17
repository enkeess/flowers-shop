import { Card, Carousel, Layout, Promo } from '../components';
import data from '../app/data.json';

export const HomePage = () => {

	const content = data.cards.map(card => {
		return(
			<Card {...card}/>
		);
	});

	return(
		<Layout>
			<Promo/>

			<Carousel title={'Акции'} content={content} lines={2}/>
			<Carousel title={'Сезонные'} content={content} lines={2}/>
			<Carousel title={'Подарки'} content={content} lines={2}/>
			
		</Layout>

	);
};

