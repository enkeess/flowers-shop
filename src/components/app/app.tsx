import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from '../card/card';
import { Carousel } from '../carousel/carousel';
import './app.css';

import data from "./data.json";

export  const App = () => {

	// const [content, setContent] = useState<JSX.Element[]>([]);

	// const updateContent = () => {
	// 	setContent(data.cards.map(card => {
	// 		return(
	// 			<Card {...card}/>
	// 		);
	// 	}));
	// };

	// useEffect(()=> {
	// 	updateContent();
	// },[]);

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
		

	// const content = [
	// 	<Test id={1}/>,
	// 	<Test id={2}/>,
	// 	<Test id={3}/>,
	// 	<Test id={4}/>,
	// 	<Test id={5}/>,
	// 	<Test id={6}/>,
	// 	<Test id={7}/>,
	// 	<Test id={8}/>,
	// 	<Test id={9}/>,
	// 	<Test id={10}/>,
	// 	<Test id={11}/>,
	// 	<Test id={12}/>,
	// 	<Test id={13}/>,
	// 	<Test id={14}/>,
	// 	<Test id={15}/>,
	// 	<Test id={16}/>
	// ];

  return (
    <div className="app">
		Приложение
		<Carousel title={'Акции'} content={content}/>

		<Carousel title={'Сезонные'} content={content}/>

		<Carousel title={'Подарки'} content={content}/>
		
    </div>
  );
};
