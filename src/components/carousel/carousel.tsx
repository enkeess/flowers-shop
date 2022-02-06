import { useLayoutEffect, useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../../icons';
import { Card } from '../card/card';
import styles from './carousel.module.css';

export const Carousel = () => {
	const title = 'Carousel';
	const [width, setWidth] = useState<number>(0);
	const [maxOffset, setMaxOffset] = useState<number>(0);
	const [step, setStep] = useState<number>(8);
	const [offset, setOffset] = useState<number>(0);

	const [activePage, setActivePage] = useState<number>(0);

	
	const viewboxRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	const content = [
						<Card />, <Card/>, <Card/>, <Card/>, 
						<Card />, <Card />, <Card/>, <Card/>, 

						<Card/>, <Card />, <Card />, <Card/>, 
						<Card/>, <Card/>, <Card />, <Card />, 

						<Card/>, <Card/>, <Card/>, <Card />
					];
	
	const maxPage = Math.trunc(content.length / step);

	useEffect(() => {
		const width = viewboxRef.current?.clientWidth;
		const maxOffset = contentRef.current?.scrollWidth;

		width && setWidth(width);
		maxOffset && setMaxOffset(maxOffset);
		
	}, []);

	const leftOffset = () => {


		if(activePage > 0) {
			setActivePage(activePage - 1);
		} else {
			setActivePage(maxPage);
		}
		
	};

	const rightOffset = () => {
		if(activePage < maxPage) {
			setActivePage(activePage + 1); 
		} else {
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
	
	window.addEventListener('resize', () => {
		const width = viewboxRef.current?.clientWidth;

		// if(width && width < 1200) {
		// 	setStep();
		// }
		const maxOffset = contentRef.current?.scrollWidth;

		width && setWidth(width);
		maxOffset && setMaxOffset(maxOffset);
	});

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
			
		</div>
	);
}


// width:`${width * Math.ceil(content.length / step)}px`}