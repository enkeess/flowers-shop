import React from 'react';
import { HomePage } from '../../pages/home';
import { Card } from '../card/card';
import { Carousel } from '../carousel/carousel';
import { Dropdown } from '../dropdown/dropdown';


import './app.scss';

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

	

  return (
    <div className="app">
		{/* Приложение */}
		{/* <Socials/> */}
		{/* <Carousel title={'Акции'} content={content} lines={2}/>
		<Carousel title={'Сезонные'} content={content}/>
		<Carousel title={'Подарки'} content={content}/> */}
		{/* <Dropdown title="test">
			<span>
				pop
			</span>
			
		</Dropdown> */}
		<HomePage/>
    </div>
  );
};
