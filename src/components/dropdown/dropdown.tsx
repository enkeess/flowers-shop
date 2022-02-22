import { DropdownProps } from './dropdown.props';
import { ArrowRightIcon } from '../../icons';
import cn from 'classnames';
import './dropdown.scss';
import { useEffect, useState } from 'react';

export const Dropdown = ({title, children, type = "default", isActive=false}:DropdownProps):JSX.Element => {
	
	const content = Array.isArray(children) ? children : [children];
	const [active, setActive] = useState<boolean>(false);

	useEffect(() => {
		setActive(isActive);
	}, []);

	const toggleActive = () => {
		setActive(!active);
	};

	return(
		<div className={cn('dropdown', {
			["dropdown_f"] : type == "footer",
			["dropdown_c"] : type == "category",
		})}>
			<div 
				className='dropdown__top'
				onClick={toggleActive}
			> 
				<div className={cn('dropdown__title', 'dropdown__title_bold')}> 
					{title}
				</div>

				<button 
					className={cn('dropdown__btn', {
						["dropdown__btn_active"]:active,	
					})} 
					onClick={toggleActive}
				> 
					<ArrowRightIcon/> 
				</button>
			</div>
		
				<ul className={cn('dropdown__list', {
						["dropdown__list_active"]:active,
					})}> 
					{content.map(item => {
						return(
							<li className='dropdown__item'>
								{item}
							</li>
						);
					})}
				</ul>
			
			{/* } */}
			

			

		</div>
	);
};