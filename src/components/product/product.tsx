import { Btn } from '..';
import { Counter } from '../counter/counter';
import { Input } from '../input/input';
import { ProductGallery } from '../product-gallery/product-gallery';
import './product.scss';

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

export const Product = () => {

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
		<div className='product'>
			<div className='product__gallery'>
				<ProductGallery/>
			</div>

			<div className='product__info'>
				<div className='product__title'>
					{text}
				</div>

				<div className='product__prices'>
					<div className='product__price'>
						{price}
					</div>
					<div className='product__old-price'>
						{oldprice}
					</div>
				</div>

				<div className='product__info-block'>
					<div className='product__info-title'>
						Цветы
					</div>

					<div className='product__info-descr'>
						{text}
					</div>
				</div>


				<div className='product__info-block'>
					<div className='product__info-title'>
						Размер
					</div>

					<div className='product__info-descr'>
						{size}
					</div>
				</div>

				<div className='product__info-block'>
					<div className='product__info-title'>
						Материалы
					</div>

					<div className='product__info-descr'>
						{materials}
					</div>
				</div>

				<div className='product__info-block'>
					<div className='product__info-title'>
						Дополнительно
					</div>

					<div className='product__info-descr'>
						{additions}
					</div>
				</div>

				<div className='product__order'>
					<Counter/>
					<Btn type='default'>	
						В корзину
					</Btn>
				</div>

				<div className='product__short'>

					<div className='product__short-title'>
						Быстрый заказ
					</div>
					
					<form className='product__short-form'>
						<Input/>
						<Btn onSubmit={() => {console.log('click');}}>
							Быстрый заказ
						</Btn>
					</form>
				</div>
				

				<div className='product__block'>
					
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