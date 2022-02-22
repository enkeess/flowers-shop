import './header.scss';

import data from '../../app/data.json';

import { useState } from 'react';

import { Socials } from '../socials/socials';
import {Btn} from '../btn/btn';
import { Link } from 'react-router-dom';
import { Side } from '../side/side';
import { SideList } from '../side-list/side-list';
import { SideListItem } from '../side-list-item/side-list';
import { IconCounter } from '../icon-counter/icon-counter';
import { DropdownModal } from '../dropdown-modal/dropdown-modal';
import { BusketIcon, ContactsIcon, DeliveryIcon, HeartIcon, HeartSmallIcon,  MenuIcon, SearchIcon, UserIcon } from '../../icons';

import logoSrc from '../../img/logo/logo.png';

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

	const [showSide, setShowSide] = useState<boolean>(false);

	const toggleShowSide = () => {
		setShowSide(!showSide);
	};



	const renderHeader = () => {
		return(
			<header className={'header header_wide'}>
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
								<HeartSmallIcon/>
								Закладки
							</Link>
							
							<Link to="/delivery" className={'header__block-item'}>
								<DeliveryIcon/>
								Доставка
							</Link>

							<Link to="/contacts" className={'header__block-item'}>
								<ContactsIcon/>
								Контакты
							</Link>
						</div>
						<div className={'header__auth'} >  
							<UserIcon/>
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
								<img src={logoSrc} alt={"logo"}/>
								{/* <LogoIcon/> */}
							</Link>
							
						</div>
						<div className={'header__find'} >  
							
							<div className={'header__filter'} >  
								Поиск по категориям	
							</div>
							
							<div className={'header__search'} >  
								<input placeholder='Поиск по товарам'/>
								<SearchIcon/>
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
								<a href='tel: +78005553535'> +7 (800) 555 35 35</a>
							</div>
						</div>

						<div className={'header__icons'}>
							<IconCounter icon={<HeartIcon/>}/>
							<Link to="/busket">
								<IconCounter icon={<BusketIcon/>}/>
							</Link>
							
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
				<header className={'header header_narrow'}>
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
									<DeliveryIcon/>
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
							<MenuIcon onClick={toggleShowSide}/>
						</div>

						<div  className={'header__logo'}  >  
							<Link to="/">
								{/* <LogoIcon/> */}
								<img src={logoSrc} alt={"logo"}/>
							</Link> 
						</div>
						
						<div className={'header__icons'}>
							<div  >  
								<SearchIcon/>
							</div>
							
							<div>
								<Link to="/busket">
									<BusketIcon/>
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
						<div className='header__number-tel'>+7 (800) 555 35 35</div>
						<Btn>
							<a href='tel:+78005553535'> Позвонить</a>
							
						</Btn>
					</div>

					<DropdownModal title="Город" content={data.city}/>

					<SideList>
						{routes.map(route => {
							return(
								<SideListItem key={route.text}>
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
		<>
		{renderHeader()}
		{renderSmallHeader()}
		</>
	); 
};