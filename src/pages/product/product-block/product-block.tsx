import { Btn, Counter, Input } from '../../../components';
import { SendIcon } from '../../../icons';

import { ProductGallery } from '../product-gallery/product-gallery';
import './product-block.scss';

interface ProductInfo {
	id : number,
	text: string,
	src : string,
	price: number,
	oldPrice: number,
	sale: number,
	isTop: boolean,

	descr: string;
	size: string;
	materials: string[];
	additions: string[];

}

export const ProductBlock = () => {

	const id = 101;
	const text = "25 желтых тюльпанов";
	const price = "1990.00 Руб";
	const oldprice = "2500.00 Руб";
	const sale = 20;
	const isTop = true;
	const descr = text;
	const size = "50-60 см";
	const materials = ["Декоративный флористический материал"];
	const additions = ["Оформление"];

	return(
		<div className='product-block'>
			<div className='product-block__gallery'>
				<ProductGallery/>
			</div>

			<div className='product-block__info'>
				<div className='product-block__title'>
					{text}
				</div>

				<div className='product-block__prices'>
					<div className='product-block__price'>
						{price}
					</div>
					<div className='product-block__old-price'>
						{oldprice}
					</div>
				</div>

				<div>
					<div className='product-block__info-block'>
						<div className='product-block__info-title'>
							Цветы
						</div>

						<div className='product-block__info-descr'>
							{text}
						</div>
					</div>


					<div className='product-block__info-block'>
						<div className='product-block__info-title'>
							Размер
						</div>

						<div className='product-block__info-descr'>
							{size}
						</div>
					</div>

					

					<div className='product-block__info-block'>
						<div className='product-block__info-title'>
							Материалы
						</div>

						<div className='product-block__info-descr'>
							{materials}
						</div>
					</div>

					<div className='product-block__info-block'>
						<div className='product-block__info-title'>
							Дополнительно
						</div>

						<div className='product-block__info-descr'>
							{additions}
						</div>
					</div>
				</div>
				<div className='product-block__order'>
					<Counter/>
					<Btn type='default'>	
						В корзину
					</Btn>
				</div>

				<div className='product-block__short'>

					<div className='product-block__short-title'>
						Быстрый заказ
					</div>
					
					<form className='product-block__short-form'>
						<Input/>
						<Btn type="in-form" onSubmit={() => {console.log('click');}}>
							<span>Быстрый заказ</span>
							<SendIcon/>
						</Btn>
					</form>
				</div>
				

				<div className='product-block__block'>
					
					<div>
						Доставка
					</div>

					<div>
						Описание
					</div>

					<div>
						Отзывы
					</div>

				</div>
			</div>
		</div>
	);
};