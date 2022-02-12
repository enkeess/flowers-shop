import { GiftboxIcon, PhotosIcon, VideoIcon } from '../../icons';
import './promo.scss';

export const Promo = () => {
	return(
		<div className={'promo'}>

			<div className={'promo__gallery'}>
				Тут должны быть картинки с акциями и тд но займемся этим позже
			</div>

			<div className={'promo__info'}>
				
				<div className={'promo__info-block'}>
					<div className={'promo__info-text'}>
						<div className={'promo__info-title'}>
							Фото доставок <br/> наших букетов
						</div>

						<div className={'promo__info-descr'}>
							Безупречное качество обслуживания и доставка в любую точку города
						</div>
					</div>

					<div className={'promo__info-icon'}>
						<PhotosIcon/>
					</div>

					<div className={'promo__info-alt'}>
						Фото доставок
					</div>
				</div>

				<div className={'promo__info-block'}>
					<div className={'promo__info-text'}>
						<div className={'promo__info-title'}>
							Видео отчеты клиентов
						</div>

						<div className={'promo__info-descr'}>
							Наши счастливые клиенты с букетами от Flowers-Ukraine 
						</div>
					</div>

					<div className={'promo__info-icon'}>
						<VideoIcon/>
					</div>

					<div className={'promo__info-alt'}>
						Видео отчеты
					</div>
				</div>


				<div className={'promo__info-block'}>
					<div className={'promo__info-text'}>
						<div className={'promo__info-title'}>
							Подарок <br/> каждому клиенту
						</div>

						<div className={'promo__info-descr'}>
							К каждому заказу мы прилогаем комплимент от компании <br/> в виде маленького презента
						</div>
					</div>

					<div className={'promo__info-icon'}>
						<GiftboxIcon/>
					</div>

					<div className={'promo__info-alt'}>
						Подарок клиентам
					</div>
				</div>
				
			</div>
		</div>
	);
};