import './dropdown-modal.scss';
import { ArrowIcon, CloseIcon } from '../../icons';
import { DropdownModalProps } from './dropdown-modal.props';

import cn from 'classnames';

import { useEffect, useRef, useState } from 'react';

export const DropdownModal = ({title, content, type = "default"}:DropdownModalProps) => {

	const [active, setActive] = useState<boolean>(false);
	const [activeChoose, setActiveShoose] = useState<string>(content[0]);
	
	const toggleActive = () => setActive(!active);
	const closeModal = () => {
		setActive(false);
		window.removeEventListener('click', closeModal, false);
	};

	useEffect(() => {
		if(active) {
			window.addEventListener('click', closeModal, false);
		}
	}, [active]);
	
	return(
		<div className={cn('dropdown-modal', {
			["dropdown-modal_short"] : type == "short",
			["dropdown-modal_def"] : type == "default"
		})}>
			<div className='dropdown-modal__top'>
				{title && 
					<div className='dropdown-modal__title'>
						{title}
					</div>
				}

				<div 
					className={cn('dropdown-modal__btn', {
						['dropdown-modal__btn_active']:active
					})} 
					onClick={toggleActive}
				>
					<span className='dropdown-modal__active-choose'>
						{activeChoose}
					</span>

					<ArrowIcon/>
				</div>
			</div>
			
			
			<div className={cn('dropdown-modal__overlay',{
					['dropdown-modal__overlay_active']:active
				})}>
			
				<div className={cn('dropdown-modal__dropdown',{
					['dropdown-modal__dropdown_active']:active
				})}>

					<div className='dropdown-modal__dropdown-top'>
						<div className='dropdown-modal__dropdown-title'>
							{title}
						</div>

						<div className={'dropdown-modal__dropdown-close'} onClick={closeModal}>
							<CloseIcon/>
						</div>
					</div>

					<ul className='dropdown-modal__dropdown-list'>
						{content.map(item => {
							return(
								<li 
									key={item} 
									className={cn('dropdown-modal__dropdown-item', {
										['dropdown-modal__dropdown-item_active']:activeChoose == item
									})}

									onClick={() => {
										closeModal();
										setActiveShoose(item);
									}}
								>
									{item}
								</li>
							);
						})}
					</ul>
				</div>

			</div>
		</div>
	);
};