import { LogoFIcon } from '../../icons';
import { Dropdown } from '../dropdown/dropdown';
import './footer.scss';

export const Footer = () => {
	return(
		<footer className={'footer'}>
			<div className={'footer__container'}>
				<div className={'footer__top-row'}>
					<div className={'footer__logo'}>
						<LogoFIcon/>
					</div>

					
					<Dropdown title={"Информация"} type={'footer'}>
						<a href={'#'} className={'footer__link'}> О нас </a>
						<a href={'#'} className={'footer__link'}> Доставка и оплата </a>
						<a href={'#'} className={'footer__link'}> Политика конфиденциальности </a>
					</Dropdown>
					
					<Dropdown title={"Служба поддержки"} type={'footer'}>
						<a href={'#'} className={'footer__link'}> Карта сайта </a>
						<a href={'#'} className={'footer__link'}> Возврат товара </a>
						<a href={'#'} className={'footer__link'}> Связаться с нами для сотрудничества </a>
					</Dropdown>

					<Dropdown title={"Личный кабинет"} type={'footer'}>
						<a href={'#'} className={'footer__link'}> Личный кабинет </a>
						<a href={'#'} className={'footer__link'}> История заказа </a>
						<a href={'#'} className={'footer__link'}> Закладки </a>
						<a href={'#'} className={'footer__link'}> Список новостей </a>
					</Dropdown>
					

					<Dropdown title={"Дополнительно"} type={'footer'}>
						<a href={'#'} className={'footer__link'}> подарочные <br/> сертификаты </a>
						<a href={'#'} className={'footer__link'}> акции </a>
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