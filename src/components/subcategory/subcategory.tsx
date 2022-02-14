import { useState } from 'react';
import cn from 'classnames';
import { DoneIcon } from '../../icons';
import { SubcategoryProps } from './subcategory.props';

import './subcategory.scss';

export const Subcategory = ({children, isActive = false}:SubcategoryProps) => {
	const [active, setActive] = useState<boolean>(false);

	const toggleActive = () => {
		setActive(!active);
	};

	return(
		<div 
			className={cn('subcategory', {
				['subcategory_active']: active
			})} 
			onClick={toggleActive}
		>
			<DoneIcon className='subcategory__done'/>
			<div className='subcategory__text'>
				{children}
			</div>
		</div>
	);
};