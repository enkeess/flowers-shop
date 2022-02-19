import { Card, Gallery } from '..';
import './products-page.scss';
import data from '../../app/data.json';
import { Dropdown } from '../dropdown/dropdown';
import { Subcategory } from '../subcategory/subcategory';
import { DropdownModal } from '../dropdown-modal/dropdown-modal';

// import data from '../../app/data.json';

export const ProductsPage = () => {

	const { 
		cards, 
		categories, 
		toWhom, 
		occasion,
		colors,
		sortType
	} = data;

	
	interface CategoryInterface {
		name: string;
		subcategories: string[]; 
	}

	const cats:CategoryInterface[] = categories;

	interface TestProps {
		id:number;
	}

	
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

	const content = cards.map(card => <Card {...card}/>);

	return(
		<div className='products-page'>
			<div className='products-page__top'>
				<DropdownModal title="Кому" content={toWhom}/>
				<DropdownModal title="По цвету" content={colors}/>
				<DropdownModal title="Повод" content={occasion}/>
				<DropdownModal title="Сортировка" content={sortType}/>
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