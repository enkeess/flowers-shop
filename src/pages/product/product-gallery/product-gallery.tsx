import { ProductGalleryProps } from './product-gallery.props';
import { ImageBlock } from '../../../components';

import src1 from './images/img1.png';
import src2 from './images/img2.png';
import src3 from './images/img1.png';

import cn from 'classnames';

import './product-gallery.scss';
import { useState } from 'react';


export const ProductGallery = ({id, isTop} :ProductGalleryProps) => {

	const images = [src1, src2, src3];

	const [activeSrc, setActiveSrc] = useState<string>(src2);

	const getImages = () => {
		return(
			images.map(image => {
				return(
					<div 
						className='product-gallery__item'
						onClick={() => setActiveSrc(image)}
					>
						<img src={image} alt={`${id} image`}/>
					</div>
				);
			})
		);
	};

	return(
		<div className='product-gallery'>
			<div className='product-gallery__item_active'>
				<ImageBlock src={activeSrc} type={'gallery'}/>
			</div>
			{getImages()}
		</div>
	);
};