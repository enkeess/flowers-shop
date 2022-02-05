// import { Navbar } from '../navbar/navbar';
import { HeaderProps } from './header.props';
import cn from 'classnames';
import styles from './header.module.css';
import {ReactComponent as Logo} from './logo.svg';
import * as Icons from "../../icons";

export const Header = ({className}:HeaderProps) => {
	return(
		<header className={cn(className, styles.header)}>
			

			
				<div className={styles.upline}>
					<div className={styles.upline__container}>
						<div className={styles.block}>
							<div className={styles.block__item}> 
								Валюта

								<select className={styles.select} >            
									<option value="rub">Руб</option>
									<option value="usd">Usd</option>
								</select>	
							</div>
							<div className={styles.block__item}>
								Язык 
								<select className={styles.select} >            
									<option value="rus">Русский</option>
									<option value="en">English</option>
								</select>	
							</div>
							<div className={styles.block__item}> 
								Город 
								<select className={styles.select} >            
									<option value="москва">Москва</option>
									<option value="new-york">New-York</option>
								</select>	
							</div>
							
							<a href="#" className={styles.block__item}>
								<Icons.HeartSmallIcon/>
								Закладки
							</a>
							
							<a href="#" className={styles.block__item}>
								<Icons.DeliveryIcon/>
								Доставка
							</a>
							<a href="#" className={styles.block__item}>
								<Icons.ContactsIcon/>
								Контакты
							</a>
						</div>
						<div className={styles.auth}>
							<Icons.UserIcon/>
							<div>
								Вход | Регистрация
							</div>
							
						</div>
					</div>
				</div>

				
				<div >
					<div className={styles.nav}>
						<div className={styles.logo}>
						<Logo/>
						</div>
						<div className={styles.find}>
							
							<div className={styles.filter}>
								поиск по категориям	
							</div>
							
							<div className={styles.search}>
								<input placeholder='Поиск по товарам'/>
								<Icons.SearchIcon/>
							</div>
							
							
							
						</div>

						<div className={styles.route}>
							<div>
								Каталог товаров
							</div>

							<a href="#">Форум</a>
							<a href="#">Отзывы</a>
							<a href="#">Акции</a >
							<a href="#">Новости</a>
							<a href="#">Информация</a>
						</div>

						<div className={styles.contacts}>
							<div className={styles.socials}>
								<a href="#" className={styles.social}>
									<Icons.ViberIcon/>
								</a>
								<a href="#" className={styles.social}>
									<Icons.InstagramIcon/>
								</a>
								<a href="#" className={styles.social}>
									<Icons.TelegramIcon/>
								</a>
								<a href="#" className={styles.social}>
									<Icons.FacebookIcon/>
								</a>
							</div>
							<div className={styles.number}>
								<a href='tel: 380678293030'> +38 (067) 829 30 30</a>
							</div>
						</div>

						<div className={styles.icons}>
							<Icons.HeartIcon/>
							<Icons.BusketIcon/>
							<span>₽ 150 </span>
						</div>
					</div>
				</div>
		</header>
	);
};