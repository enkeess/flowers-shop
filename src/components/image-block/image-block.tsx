import { useState } from 'react';
import { HeartFillIcon, HeartSmallIcon } from '../../icons';
import './image-block.scss';

import src from'./img.png';

export const ImageBlock = () => {
	const text = "Текст";
	const sale = 10;
	const isTop = true;

	const [like, setLike] = useState<boolean>(false);

	return (
		<div className='image-block'>
			<img src={src} alt={text} className={"image-block__img"}/>
			{sale && <div className={"image-block__sale"}> -{sale}%</div>}
			{isTop && <div className={"image-block__top"}>TOP</div> }
			<div 
				className={"image-block__like"} 
				onClick={() => setLike(!like)}
			> 
				{like ? <HeartFillIcon/> : <HeartSmallIcon/> }
			</div>
		</div>
	);
};

