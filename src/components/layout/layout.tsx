import { FunctionComponent } from 'react';
import { Footer } from '../footer/footer';
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

			<div className={"layout__footer"}>
				<Footer/>
			</div>		
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T):JSX.Element {
		return(
			<Layout>
				<Component {...props}/>
			</Layout>
		);
	};
};
