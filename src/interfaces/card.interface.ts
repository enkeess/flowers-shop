export interface CardInterface {
	id : number,
	text: string,
	src : string,
	price: number,
	oldPrice: number,
	sale: number,
	isTop: boolean,
	categories: string[],
	toWhom : string[],
	color: string,
	occasions : string[]
}