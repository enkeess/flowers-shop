import { useRef, useEffect, useState } from 'react';
import { CarouselProps } from './carousel.props';
import styles from './carousel.module.css';

import cn from 'classnames';

import { ArrowLeftIcon, ArrowRightIcon } from '../../icons';

export const Carousel = ({title, content, loop = true}:CarouselProps) => {

	//state
	const [width, setWidth] = useState<number>(0);
	const [step, setStep] = useState<number>(8);
	const [maxPage, setMaxPage] = useState<number>(0);
	const [activePage, setActivePage] = useState<number>(0);
	
	//ref
	const viewboxRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	//effect
	useEffect(() => {
		const width = viewboxRef.current?.clientWidth;
		width && setWidth(width);	
		setMaxPage(Math.ceil(content.length / step) - 1);	
		updateStep();
	}, []);

	useEffect(() => {
		setMaxPage(Math.ceil(content.length / step) - 1);	
	}, [step]);

	//function
	const leftOffset = () => {
		
		if(activePage > 0) {
			setActivePage(activePage - 1);
		} else if (loop){
			setActivePage(maxPage);
		}	
	};

	const rightOffset = () => {
		
		if(activePage < maxPage) {
			setActivePage(activePage + 1); 
		} else if (loop){
			setActivePage(0);
		}
	};

	const getPages = (step:number) => {
		const pages:JSX.Element[][] = [];
		for(let page = 0; page < content.length ; page = page + step) {
			pages[page / step] = (content.slice(page, page + step));
		}

		return pages.map((page) => {
			return(
				<div className={styles.carousel__page} style={{minWidth: `${width}px`}}> 
					{page.map(item => {
						return(
							<div className={styles.carousel__item}>{item}</div>
						);
					})}
				</div>
			);
		});
	};
	
	const updateStep = () => {
		const newWidth = viewboxRef.current?.clientWidth;

		if(newWidth && newWidth != width) {
			setWidth(newWidth);
		}

		if(newWidth && newWidth >= 1024 - 20) {
			if(step != 8) {
				setStep(8);
				setActivePage(0);
			}
		} else if(newWidth && newWidth < 1024 - 20 && newWidth >= 576 - 20) {
			if(step != 6) {
				setStep(6);
				setActivePage(0);
			}
		} else {
			if(step != 4) {
				setStep(4);
				setActivePage(0);
			}
		}
	};

	//listener for adaptive
	window.addEventListener('resize', updateStep);

	return(
		<div className={styles.carousel} data-name='carousel'>
			<h2 className={styles.carousel__title}>
				{title}
			</h2>

			<div className={styles.carousel__btns}>
				<button className={styles.carousel__btn}
					onClick={leftOffset}
				> <ArrowLeftIcon/> </button>
				
				<button className={styles.carousel__btn}
					onClick={rightOffset}
				> <ArrowRightIcon/> </button>
			</div>

			

			<div className={styles.carousel__viewbox}  ref={viewboxRef}>
				<div className={styles.carousel__content} style={{transform: `translateX(${ - width * activePage}px)`}} ref={contentRef}>
					{getPages(step)}
				</div>
			</div>

			<div className={styles.carousel__indicators}>
				{/* {new Array(maxPage + 1).fill(<button className={styles.carousel__indicator}/>).map(i => i)} */}
				{
					new Array(maxPage + 1).fill(0).map((item, i) => {
						
						return(
							<button 
								className={cn(styles.carousel__indicator, {
									[styles.carousel__indicator_active] : i == activePage
								})}

								onClick={() => setActivePage(i)}
							
							/>
						);})}
				{/* <button className={cn(styles.carousel__indicator, styles.carousel__indicator_active)}/>
				
				<button className={styles.carousel__indicator}/>
				<button className={styles.carousel__indicator}/>
				<button className={styles.carousel__indicator}/> */}
			</div>
		</div>
	);
};
