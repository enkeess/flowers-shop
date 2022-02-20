import { Card, Carousel, Layout, Product } from '../components';
import data from '../app/data.json';
export const ProductPage = () => {

	const content = data.cards.map(card => {
		return(
			<Card {...card}/>
		);
	});

	return(
		<Layout>
			<Product/>
			<Carousel title={"Сопутствующие товары"} content={content}/>
			<Carousel title={"Вы просматривали"} content={content}/>
		</Layout>
	);
};