import { useState } from 'react';
import { HeartFillIcon, HeartSmallIcon } from '../../icons';
import { ImageBlockProps } from './image-block.props';
import './image-block.scss';

import cn from 'classnames';

// import src from'./img.png';

export const ImageBlock = ({type, src}:ImageBlockProps) => {
	const alt = "Текст";
	const sale = 10;
	const isTop = true;

	const [like, setLike] = useState<boolean>(false);

	return (
		<div className={cn('image-block', {
			['image-block_gallery'] : type == 'gallery'
		})}>
			<img src={src} alt={alt} className={"image-block__img"}/>
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

