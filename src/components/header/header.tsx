import './header.scss';
import * as Icons from "../../icons";

import data from '../../app/data.json';

import { useEffect, useState } from 'react';

import { Socials } from '../socials/socials';
import {Btn} from '../btn/btn';
import { Link } from 'react-router-dom';
import { Side } from '../side/side';
import { SideList } from '../side-list/side-list';
import { SideListItem } from '../side-list-item/side-list';
import { IconCounter } from '../icon-counter/icon-counter';
import { DropdownModal } from '../dropdown-modal/dropdown-modal';

interface RouteInterface {
	text:string;
	link: string;
}

const routes:RouteInterface[] = [
		{
			text: 'Форум',
			link: '/forum'
		},{
			text: 'Отзывы',
			link: '/reviews'
		},{
			text: 'Акции',
			link: '/promotions'
		},{
			text: 'Новости',
			link: '/news'
		},{
			text: 'Информация',
			link: '/info'
		}
	];

export const Header = () => {
	

	const getRoutes = () => {
		return(routes.map((item) => {
			return(
				<Link to={item.link} className="header__link">
					{item.text}
				</Link>
				
			);
		}));
	};

	const [withSide, setWithSide] = useState<boolean>(false);
	const [showSide, setShowSide] = useState<boolean>(false);

	const toggleShowSide = () => {
		setShowSide(!showSide);
	};

	const updateWithSide = () => {
		const width = window.innerWidth;

		if(width <= 768 && !withSide) {
			setWithSide(true);
		} else if(width > 768 && width) {
			setWithSide(false);
		}
	};

	window.addEventListener('resize', updateWithSide);

	useEffect(updateWithSide, []);

	const renderHeader = () => {
		return(
			<header className={'header'}>
					<div className={'header__top'}>
						<div className={'header__top-container'}>
							<div className={'header__block'}>
								<div className={'header__block-item'}> 
									Валюта
									<select className={'header__select'} >            
										<option value="rub">Руб</option>
										<option value="usd">Usd</option>
									</select>	
								</div>
								<div className={'header__block-item'}>
									Язык 
									<select className={'header__select'} >            
										<option value="rus">Русский</option>
										<option value="en">English</option>
									</select>	
								</div>
								<div className={'header__block-item'}>
									Город 
									<select className={'header__select'} >            
										<option value="москва">Москва</option>
										<option value="new-york">New-York</option>
									</select>	
								</div>
								
								<Link to="/favorites" className={'header__block-item'}>
									<Icons.HeartSmallIcon/>
									Закладки
								</Link>
								
								<Link to="/delivery" className={'header__block-item'}>
									<Icons.DeliveryIcon/>
									Доставка
								</Link>

								<Link to="/contacts" className={'header__block-item'}>
									<Icons.ContactsIcon/>
									Контакты
								</Link>
							</div>
							<div className={'header__auth'} >  
								<Icons.UserIcon/>
								<div>
									Вход | Регистрация
								</div>
								
							</div>
						</div>
					</div>

					<div >
						<div className={'header__nav'} >  
							<div className={'header__logo'} >  
								<Link to="/">
									<Icons.LogoIcon/>
								</Link>
								
							</div>
							<div className={'header__find'} >  
								
								<div className={'header__filter'} >  
									Поиск по категориям	
								</div>
								
								<div className={'header__search'} >  
									<input placeholder='Поиск по товарам'/>
									<Icons.SearchIcon/>
								</div>
							</div>

							<div className={'header__route'} >  
								<div>
									Каталог товаров
								</div>

								{getRoutes()}
								
							</div>

							<div className={'header__contacts'} >  
								<div className={'header__socials'} > 
									<Socials/> 
								</div>
								<div className={'header__number'}>
									<a href='tel: 380678293030'> +38 (067) 829 30 30</a>
								</div>
							</div>

							<div className={'header__icons'}>
								<IconCounter icon={<Icons.HeartIcon/>}/>
								<IconCounter icon={<Icons.BusketIcon/>}/>
								<span>₽ 150 </span>
							</div>
						</div>
					</div>
			</header>
		);
	};

	const renderSmallHeader = () => {
		return(
			<>
				<header className={'header'}>
					<div className={'header__top'}>
						<div className={'header__top-container'}>
							<div className={'header__block'}>
								<div className={'header__block-item'}> 
									<span>Валюта</span>   
									<select className={'header__select'} >            
										<option value="rub">Руб</option>
										<option value="usd">Usd</option>
									</select>	
								</div>

								<Link to="/delivery" className={'header__block-item'}>
									<Icons.DeliveryIcon/>
									Доставка и оплата
								</Link>

								<div className={'header__block-item'}>
									<span>Язык </span> 
									<select className={'header__select'} >            
										<option value="rus">Русский</option>
										<option value="en">English</option>
									</select>	
								</div>
								
							</div>
							
						</div>
					</div>

					
					
					<div  className={'header__nav'}>  
						<div className={'header__menu'}>
							<Icons.MenuIcon onClick={toggleShowSide}/>
						</div>

						<div  className={'header__logo'}> 
							<Link to="/">
								<Icons.LogoIcon/>
							</Link> 
						</div>
						
						<div className={'header__icons'}>
							<div  >  
								<Icons.SearchIcon/>
							</div>
							
							<div>
								<Link to="/busket">
									<Icons.BusketIcon/>
								</Link>
							</div>
						</div>
					</div>
				</header>

				<Side 
					title={"Меню"} 
					showSide={showSide}  
					toggleShowSide={toggleShowSide}	
				>
				
					<div className='header__number'>
						<div className='header__number-tel'>+38 (067) 829 30 30</div>
						<Btn>
							<a href='tel:+380678293030'> Позвонить</a>
						</Btn>
					</div>


					<DropdownModal title="Город" content={data.city}/>
					{/* <DropdownModal title='Кому' content={data.toWhom}/> */}
					{/* <DropdownModal title='Повод' content={data.occasion}/> */}

					<SideList>
						{routes.map(route => {
							return(
								<SideListItem>
									<Link to={route.link}>
										{route.text}
									</Link>
								</SideListItem>
							);
						})}
					</SideList>

					<div className='header__socials'>
						<Socials/>
					</div>	
					
				</Side>
			</>
		);
	};

	return (
		<>{!withSide ? renderHeader() : renderSmallHeader()}</>	
	); 
};