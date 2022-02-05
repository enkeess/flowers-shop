import { Dropdown } from '../dropdown/dropdown';
import styles from './navbar.module.css';

export const Navbar = ():JSX.Element => {
	return(
		<nav className={styles.nav}>
			
			<Dropdown/>
			{/* <ul>
				<li>
					<Dropdown/>
				</li>
				<li>
					<Dropdown/>
				</li>
				<li>
					<Dropdown/>
				</li>
				<li>
					<Dropdown/>
				</li>
			</ul> */}
		</nav>
	);
};