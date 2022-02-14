import { Card, Gallery } from '..';
import './products-page.scss';
import data from '../../app/data.json';
import { Dropdown } from '../dropdown/dropdown';
import { Subcategory } from '../subcategory/subcategory';

export const ProductsPage = () => {

	interface CategoryInterface {
		name: string;
		subcategories: string[]; 
	}

	const categories:CategoryInterface[] = data.categories;

	interface TestProps {
		id:number;
	}

	console.log(categories);
	const getCatedories = () => {
		return(
			categories.map((category,i) => {
				return(
					<Dropdown title={category.name} type={"category"} isActive={i == 0}>
						{category.subcategories.map(item => {
							return(
								<Subcategory>{item}</Subcategory>
							);
						})}
					</Dropdown>
				);
			})
		);
	};

	const content = data.cards.map(card => <Card {...card}/>);

	return(
		<div className='products-page'>
			<div className='products-page__top'>
				top
			</div>

			<div className='products-page__side'>
				{getCatedories()}
			</div>

			<div className='products-page__products'>
				<Gallery>
					{content}
				</Gallery>
			</div>

			<div className='products-page__recomendation'>
				recomendation
			</div>
		</div>
	);
};