import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Layout } from '../components';
import { 	AboutPage, BusketPage, ContactsPage, DeliveryPage, 
			FavoritesPage, ForumPage, HomePage, NewsPage, 
			OrderPage, PromotionsPage, ReviewsPage } from '../pages';

import './app.scss';

const App = () => {
  return (
    <div className="app">
		
			<Router>
				<Routes>
					<Route path="/busket" element={<BusketPage/>}/>
					<Route path="/order" element={<OrderPage/>}/>
					<Route path="/news" element={<NewsPage/>}/>
					<Route path="/delivery" element={<DeliveryPage/>}/>
					<Route path="/contacts" element={<ContactsPage/>}/>
					<Route path="/order" element={<OrderPage/>}/>
					<Route path="/about" element={<AboutPage/>}/>
					<Route path="/forum" element={<ForumPage/>}/>
					<Route path="/favorites" element={<FavoritesPage/>}/>
					<Route path="/reviews" element={<ReviewsPage/>}/>
					{/* <Route path="/info" element={<InfoP/>}/> */}
					<Route path="/promotions" element={<PromotionsPage/>}/>
					<Route path="/" element={<HomePage/>}/>
					<Route path="*" element={
						<Layout>
							Page not found!
						</Layout>
					}/>
				</Routes>
			</Router>
		
    </div>
  );
};

export default App;