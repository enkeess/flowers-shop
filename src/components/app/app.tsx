import React from 'react';
import { Card } from '../card/card';
import { Carousel } from '../carousel/carousel';
import './app.css';

export  const App = () => {
  return (
    <div className="app">
		Приложение
		<Carousel/>
    </div>
  );
};
