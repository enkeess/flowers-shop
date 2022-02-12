import React from 'react';
import ReactDOM from 'react-dom';
import App  from './app/app';
import {Layout} from './components';
import './index.scss';



ReactDOM.render(
  <React.StrictMode>
    {/* <Layout> */}
		<App />
	{/* </Layout> */}
	
  </React.StrictMode>,
  document.getElementById('root')
);
