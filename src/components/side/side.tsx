import { useEffect, useState } from 'react';


import { SideProps } from './side.props';
import { CloseIcon } from '../../icons';

import cn from 'classnames';
import './side.scss';


export const Side = ({title, children, showSide, toggleShowSide}:SideProps) => {

	console.log(document.querySelector('body'));

	useEffect(() => {
		const body = document.querySelector('body');

		if(showSide) {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
			body && body.classList.add('over'); 
		} else {
			body && body.classList.remove('over'); 
		}

	}, [showSide]);

	return(
		<div className={cn('side', {
			['side_active']: showSide
		})}>
			<div className={'side__upline'}>
				<div className={'side__title'}>
					{title}
				</div>
				<button className={'side__close'} onClick={toggleShowSide}>
					<CloseIcon/>
				</button>
			</div>

			<div className={'side__body'}> 
				{children}
			</div>
		</div>
	);
};