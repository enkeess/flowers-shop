import { Layout, Title } from '../../components';
import { BusketList } from './busket-list/busket-list';
import './busket-page.scss';

export const BusketPage = () => {
	return(
		<Layout>
			<Title>
				Корзина
			</Title>
			<div className='busket'>
				<BusketList/>
			</div>
		</Layout>
	);
};