import { Btn, Card, Gallery } from '..';
import './products-page.scss';
import data from '../../app/data.json';
import { Dropdown } from '../dropdown/dropdown';
import { Subcategory } from '../subcategory/subcategory';
import { DropdownModal } from '../dropdown-modal/dropdown-modal';
import { Side } from '../side/side';
import { useState } from 'react';
import { List } from '../list/list';
import { SideListItem } from '../side-list-item/side-list';
import { SideList } from '../side-list/side-list';

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

	const [showSide, setShowSide] = useState<boolean>(false);

	const toggleShowSide = () => setShowSide(!showSide);

	const cats:CategoryInterface[] = categories;

	interface TestProps {
		id:number;
	}

	
	const getCatedories = (isOpen:boolean) => {
		return(
			categories.map((category,i) => {
				return(
					<Dropdown title={category.name} type={"category"} isActive={i == 0 && isOpen}>
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
			
			<div className='products-page__categories'>
				{getCatedories(true)}
			</div>

			<div className='products-page__products'>
				<Gallery>
					{content}
				</Gallery>
			</div>

			<div className='products-page__recomendation'>
				recomendation
			</div>

			<div className='products-page__btns'>
				<Btn 
					type='fill'
					onClick={toggleShowSide}
				>
					Фильтр
				</Btn>

				<Btn type="outline">
					<DropdownModal content={sortType} type="short"/>
				</Btn>
			</div>

			<Side title='Фильтр' showSide={showSide} toggleShowSide={toggleShowSide}>
				
				<Btn>
					Сбросить фильтр
				</Btn>

				<DropdownModal title="Кому" content={toWhom}/>
				<DropdownModal title="По цвету" content={colors}/>
				<DropdownModal title="Повод" content={occasion}/>

				<SideList>
					{
						getCatedories(false).map(category => {
							return(
								<SideListItem>
									{category}
								</SideListItem>
							);
						})
					}
					
				</SideList>
			</Side>
		</div>
	);
};