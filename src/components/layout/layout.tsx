import { Header } from '../header/header';
import { LayoutProps } from './layout.props';
import './layout.scss';

export const Layout = ({children}:LayoutProps):JSX.Element => {
	return(
		<div className={'layout'}>
			<div className={"layout__header"}>
				<Header/>
			</div>
			
			<div className={"layout__body"}>
				{children}
			</div>	

			{/* <div className={"layout__footer"}>
				
				footer
			</div>		 */}
		</div>
	);
};

