import { Card, Carousel, Layout} from '../../components';
import { ProductBlock } from './product-block/product-block';

import data from '../../app/data.json';
export const ProductPage = () => {

	const content = data.cards.map(card => {
		return(
			<Card {...card}/>
		);
	});

	return(
		<Layout>
			<ProductBlock/>
			<Carousel title={"Рекомендации"} content={content}/>
			<Carousel title={"Вы просматривали"} content={content}/>
		</Layout>
	);
};