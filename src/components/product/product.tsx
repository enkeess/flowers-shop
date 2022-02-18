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
	const price = 1990;
	const oldprice = 2500;
	const sale = 20;
	const isTop = true;
	const descr = text;
	const size = "50-60 см";
	const materials = ["Декоративный флористический материал"];
	const additions = ["Оформление"];

	return(
		<div className='product'>
			<div className='product__gallery'>

			</div>

			<div className='product__info'>

			</div>
		</div>
	);
};