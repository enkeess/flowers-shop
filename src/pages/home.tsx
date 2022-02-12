import { Card, Carousel, Layout, Promo, withLayout } from '../components';
import data from '../app/data.json';

export const HomePage = () => {

	const content = data.cards.map(card => {
		return(
			<Card {...card}/>
		);
	});


	interface TestProps {
		id:number;
	}
	const Test = ({id}:TestProps):JSX.Element => {
		return(
			<div 
				style={{
					height: '50px',
					width: '100%',
					border: 'solid 1px black',
					background: 'red',
					textAlign: 'center'
				}}
			
			>{id}</div>
		);
	};
		

	const content1 = [
		<Test id={1}/>,
		<Test id={2}/>,
		<Test id={3}/>,
		<Test id={4}/>,
		<Test id={5}/>,
		<Test id={6}/>,
		<Test id={7}/>,
		<Test id={8}/>,
		<Test id={9}/>,
		<Test id={10}/>,
		<Test id={11}/>,
		<Test id={12}/>,
		<Test id={13}/>,
		<Test id={14}/>,
		<Test id={15}/>,
		<Test id={16}/>
	];

	return(
		<Layout>
			<Promo/>

			<Carousel title={'Акции'} content={content} lines={2}/>
			<Carousel title={'Сезонные'} content={content}/>
			<Carousel title={'Подарки'} content={content}/>
			
		</Layout>

	);
};

