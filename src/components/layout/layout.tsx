import { Header } from '../header/header';
import { LayoutProps } from './layout.props';
import styles from './layout.module.css';

export const Layout = ({children}:LayoutProps):JSX.Element => {
	return(
		<div className={styles.layout}>
			<Header className={styles.header}/>
			<div className={styles.body}>
				{children}
			</div>			
		</div>
	);
};

