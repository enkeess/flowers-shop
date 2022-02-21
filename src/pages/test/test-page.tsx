import { DropdownModal } from '../../components/dropdown-modal/dropdown-modal';
import { ImageBlock } from '../../components/image-block/image-block';
import data from '../../app/data.json';
import { Side } from '../../components/side/side';
export const TestPage = ( ) => {
	return(
		<div style={{background: "#e5e5e5"}}>TestPage
			<Side title={"Фильтр"} showSide={true} toggleShowSide={() => {console.log('click');}}>
				<DropdownModal title='Кому' content={data.toWhom}/>
				<DropdownModal title='Повод' content={data.occasion}/>
				<DropdownModal title='Сортировка' content={data.sortType}/>
			</Side>
		</div>
		
	);
};