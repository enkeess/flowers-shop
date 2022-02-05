import {ReactComponent as Arrow} from './arrow.svg';
import styles from './dropdown.module.css';

export const Dropdown = ():JSX.Element => {
	const text = "ru";
	return(
		<div>
			<div className={styles.title}> Dropdown title </div>
			<button> {text} <Arrow/> </button>
			{/* <ul> 
				<li key={1}> item 1</li>
				<li key={2}> item 2</li>
				<li key={3}> item 3</li>
				<li key={4}> item 4</li>
			</ul> */}

		</div>
	);
};