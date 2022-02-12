import { Link } from 'react-router-dom';
import { LogoFIcon } from '../../icons';
import { Dropdown } from '../dropdown/dropdown';
import './footer.scss';

export const Footer = () => {
	return(
		<footer className={'footer'}>
			<div className={'footer__container'}>
				<div className={'footer__top-row'}>
					<div className={'footer__logo'}>
						<Link to="/" >  
							<LogoFIcon/>
						</Link>
						
					</div>

					
					<Dropdown title={"Информация"} type={'footer'}>
						
						<Link to="/about" className={'footer__link'}> О нас </Link>
						<Link to="/delivery" className={'footer__link'}> Доставка и оплата </Link>
						<Link to="/privacy" className={'footer__link'}> Политика конфиденциальности </Link>
						
					</Dropdown>
					
					<Dropdown title={"Служба поддержки"} type={'footer'}>
						<a href={'#'} className={'footer__link'}> Карта сайта </a>
						<a href={'#'} className={'footer__link'}> Возврат товара </a>
						<Link to="/contacts" className={'footer__link'}> Связаться с нами для сотрудничества </Link>
					</Dropdown>

					<Dropdown title={"Личный кабинет"} type={'footer'}>
						<a href={'#'} className={'footer__link'}> Личный кабинет </a>
						<a href={'#'} className={'footer__link'}> История заказа </a>
						<a href={'#'} className={'footer__link'}> Закладки </a>
						<Link to="/news" className={'footer__link'}> Новости </Link>
					</Dropdown>
					

					<Dropdown title={"Дополнительно"} type={'footer'}>
						<a href={'#'} className={'footer__link'}> подарочные <br/> сертификаты </a>
						<Link to="/promotions" className={'footer__link'}> Акции </Link>
						<a href={'#'} className={'footer__link'}> цветы в офис </a>
						
					</Dropdown>

					
				</div>

				<div className={'footer__bottom-row'}>
					<div className={'footer__copy'}> Copyright © {new Date().getFullYear()}. Все права защищены</div>
					<div className={'footer__pay'}>
						<div className={'footer__pay-title'}>
							Способы оплаты:
						</div>
						<ul className={'footer__pay-list'}>
							<li className={'footer__pay-item'}>
								<a className={'footer__pay-link'}>
									link
								</a>
							</li>

							<li className={'footer__pay-item'}>
								<a className={'footer__pay-link'}>
									link
								</a>
							</li>

							<li className={'footer__pay-item'}>
								<a className={'footer__pay-link'}>
									link
								</a>
							</li>

							<li className={'footer__pay-item'}>
								<a className={'footer__pay-link'}>
									link
								</a>
							</li>

							<li className={'footer__pay-item'}>
								<a className={'footer__pay-link'}>
									link
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};