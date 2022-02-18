import { useState } from 'react';


import { SideProps } from './side.props';
import { CloseIcon } from '../../icons';

import cn from 'classnames';
import './side.scss';


export const Side = ({title, children, showSide, toggleShowSide}:SideProps) => {

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