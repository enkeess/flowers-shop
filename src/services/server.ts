import data from '../app/data.json';

export default class Server {
	getById = (id:number) => {
		return(data.cards.find(card => (card.id == id)));
	};

	getAll = () => {
		return(data.cards);
	};

	getPromotions = () => {
		return(data.cards.filter(card => (card.sale)));
	};

	
}