import { Card, Carousel, Layout} from '../../components';
import { ProductBlock } from './product-block/product-block';

import data from '../../app/data.json';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { scrollToTop } from '../../helpers/scripts';
export const ProductPage = () => {

	const content = data.cards.map(card => {
		return(
			<Card {...card}/>
		);
	});

	const { id } = useParams();

	useEffect(() => {
		scrollToTop();
	}, [id]);

	return(
		<Layout>
			<ProductBlock id={id ? Number(id) : 0}/>
			<Carousel title={"Рекомендации"} content={content}/>
			<Carousel title={"Вы просматривали"} content={content}/>
		</Layout>
	);
};