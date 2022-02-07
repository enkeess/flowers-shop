export enum CategoriesEnum {
	'roses',
	'flowers in a box'
}

export enum ColorEnum {
	'red',
	'pink',
	'blue',
	'white',
	'yellow'
}

export enum ForEnum {
	'mother',
	'friend'
}

export enum OccasionEnum {
	'March 8',
	'birthday'
}

export interface CardInterface {
	id : number,
	text: string,
	src : string,
	price: number,
	oldPrice: number,
	sale: number,
	isTop: boolean,
	categories: CategoriesEnum[],
	forI : ForEnum[],
	color: string,
	occasions : OccasionEnum[]
}