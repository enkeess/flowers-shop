import {ReactComponent as Arrow} from './arrow.svg';
import { DropdownProps } from './dropdown.props';
import { ArrowRightIcon } from '../../icons';
import cn from 'classnames';
import './dropdown.scss';
import { useEffect, useState } from 'react';

export const Dropdown = ({title, children, type = "default"}:DropdownProps):JSX.Element => {
	
	const content = Array.isArray(children) ? children : [children];
	const [active, setActive] = useState<boolean>(false);

	useEffect(() => {
		if(type == "footer") {
			setActive(true);
		}
	}, []);

	const toggleActive = () => {
		setActive(!active);
	};

	return(
		<div className={cn('dropdown', {
			["dropdown_f"] : type == "footer"
		})}>
			<div className='dropdown__top'> 
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
			
			{active && 
				<ul className={cn('dropdown__list')}> 
					{content.map(item => {
						return(
							<li className='dropdown__item'>
								{item}
							</li>
						);
					})}
				</ul>
			
			}
			

			

		</div>
	);
};