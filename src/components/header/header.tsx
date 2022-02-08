import './header.scss';
import * as Icons from "../../icons";
import { useEffect, useState } from 'react';

interface RouteInterface {
	text:string;
	link: string;
}

export const Header = () => {
	const routes:RouteInterface[] = [
		{
			text: 'Форум',
			link: '#'
		},

		{
			text: 'Отзывы',
			link: '#'
		},

		{
			text: 'Акции',
			link: '#'
		},

		{
			text: 'Новости',
			link: '#'
		},

		{
			text: 'Информация',
			link: '#'
		}

	];

	const getRoutes = () => {
		return(routes.map((item) => {
			return(
				<a key={item.text} href={item.link}> {item.text}</a>
			);
		}));
	};

	const [withSide, setWithSide] = useState<boolean>(false);

	const updateWithSide = () => {
		const width = window.innerWidth;

		if(width < 768 && !withSide) {
			setWithSide(true);
		} else if(width >= 768 && width) {
			setWithSide(false);
		}
	};

	window.addEventListener('resize', updateWithSide);

	useEffect(updateWithSide, []);

	const renderHeader = () => {
		return(
			
			<header className={'header'}>
					<div className={'header__upline'}>
						<div className={'header__upline-container'}>
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
								
								<a className={'header__block-item'}>
									<Icons.HeartSmallIcon/>
									Закладки
								</a>
								
								<a className={'header__block-item'}>
									<Icons.DeliveryIcon/>
									Доставка
								</a>
								<a className={'header__block-item'}>
									<Icons.ContactsIcon/>
									Контакты
								</a>
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
								<Icons.LogoIcon/>
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
									<a href="#" className={'header__social'}>
										<Icons.ViberIcon/>
									</a>
									<a href="#" className={'header__social'}>
										<Icons.InstagramIcon/>
									</a>
									<a href="#" className={'header__social'}>
										<Icons.TelegramIcon/>
									</a>
									<a href="#" className={'header__social'}>
										<Icons.FacebookIcon/>
									</a>
								</div>
								<div className={'header__number'}>
									<a href='tel: 380678293030'> +38 (067) 829 30 30</a>
								</div>
							</div>

							<div className={'header__icons'}>
								<Icons.HeartIcon/>
								<Icons.BusketIcon/>
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
						<div className={'header__upline'}>
							<div className={'header__upline-container'}>
								<div className={'header__block'}>
									<div className={'header__block-item'}> 
										<span>Валюта</span>   
										<select className={'header__select'} >            
											<option value="rub">Руб</option>
											<option value="usd">Usd</option>
										</select>	
									</div>

									<a className={'header__block-item'}>
										<Icons.DeliveryIcon/>
										Доставка и оплата
									</a>

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
								<Icons.MenuIcon/>
							</div>

							<div  className={'header__logo'}>  
								<Icons.LogoIcon/>
							</div>
							
							<div className={'header__icons'}>
								<div  >  
									<Icons.SearchIcon/>
								</div>
								
								<div >
									<Icons.BusketIcon/>
								</div>
							</div>
							
						</div>
						
				</header>


			<div className='side'>
				<div className={'side__upline'}>
					<div className={'side__title'}>
						Меню
					</div>
					<button className={'side__close'}>
						<Icons.CloseIcon/>
					</button>
				</div>

				<ul className={'side__list'}>
					{routes.map(route => {
						return(
							<li className={'side__list-item'}>
								<a href={route.link}>
									{route.text}
								</a>
							</li>
						);
					})}
				</ul>

				<div className={'side__socials'} >  
					<a href="#" className={'side__social'}>
						<Icons.ViberIcon/>
					</a>
					<a href="#" className={'side__social'}>
						<Icons.InstagramIcon/>
					</a>
					<a href="#" className={'side__social'}>
						<Icons.TelegramIcon/>
					</a>
					<a href="#" className={'side__social'}>
						<Icons.FacebookIcon/>
					</a>
				</div>

									{/* <div className={'header__route'} >  
										<div>
											Каталог товаров
										</div>

										<a href="#">Форум</a>
										<a href="#">Отзывы</a>
										<a href="#">Акции</a >
										<a href="#">Новости</a>
										<a href="#">Информация</a>
									</div>

									<div className={'header__contacts'} >  
										
										<div className={'header__number'}>
											<a href='tel: 380678293030'> +38 (067) 829 30 30</a>
										</div>
									</div> */}
			</div>

			</>
		);
	};

	return (
		<>{!withSide ? renderHeader() : renderSmallHeader()}</>	
	);

	
};