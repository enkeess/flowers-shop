import React from 'react';
import ReactDOM from 'react-dom';
import {App, Layout} from './components';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <Layout>
		<App />
	</Layout>
	
  </React.StrictMode>,
  document.getElementById('root')
);
