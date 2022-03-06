import { DropdownModal } from '../../components/dropdown-modal/dropdown-modal';
import { ImageBlock } from '../../components/image-block/image-block';
import data from '../../app/data.json';
import { Side } from '../../components/side/side';

import './test.scss';
import { FormBlock } from '../../components/form-block/form-block';

export const TestPage = ( ) => {

	return(
		<div >TestPage
			<form onSubmit={(e) => {
				e.preventDefault();
				console.log("fuck");
			}}>
				<label htmlFor='name'>Имя:</label>
				<input type="text" name="name"/>
				<button onClick={() => console.log('click')}>CLICK</button>
				<button type="submit" onClick={() => console.log('send')}>send</button>
			</form>
			
		</div>
		
	);
};