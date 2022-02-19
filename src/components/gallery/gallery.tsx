import { useState } from 'react';
import { Btn } from '..';
import { ArrowLeftIcon, ArrowRightIcon } from '../../icons';
import { GalleryProps } from './gallery.props';
import cn from 'classnames';
import './gallery.scss';

export const Gallery = ({children}:GalleryProps) => {

	const content = Array.isArray(children) ? children : [children];

	const step = 12;
	const [range, setRange] = useState<{from:number, to:number}>({from:0, to:12});

	
	return(
		<div className='gallery'>

			<div className='gallery__list'>
				{
					content.slice(range.from, range.to).map(item => {
					return(
						<div className='gallery__item'> 
							{item} 
						</div>
					);})
				}
			</div>

			<div className={"gallery__more"} onClick={() => {
				setRange({...range, to: Math.min(range.to + step, content.length)});
			}}>
				{range.to < content.length &&  <Btn> Ещё 12 товаров </Btn>}
			</div>
			
			<div className={"gallery__btns"}>
				<button 
					className='gallery__move' 
					onClick={() => {
						const newFrom = Math.max(0, range.from - step);
						const newTo = Math.max(newFrom + 1, range.from);
						setRange({from: newFrom, to: newTo});
					}}
				
				> <ArrowLeftIcon/> </button>
				<div className={"gallery__indicators-viewbox"}>
					<div className={"gallery__indicators-list"}>
						{new Array(Math.ceil(content.length / step)).fill(0).map((item, i) => {
							return(
								<button 
									className={cn('gallery__indicators-item', {
										['gallery__indicators-item_active']: i + 1 == Math.ceil(range.to / step)
									})}

									onClick={() => {
										setRange({from: i * step, to: Math.min((i+1)* step, content.length)});
									}}	
								>
									{i + 1}
								</button>
							);
						})}
					</div>
				</div>

				<button 
					className='gallery__move'
					onClick={() => {
						const newFrom = Math.min(content.length - 1, range.to);
						const newTo = Math.min(newFrom + step, content.length);
						setRange({from: newFrom, to: newTo});
					}}
				> <ArrowRightIcon/> </button>
			</div>
		</div>
	);
};