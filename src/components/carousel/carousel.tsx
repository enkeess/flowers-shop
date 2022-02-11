import { useRef, useEffect, useState } from 'react';
import { CarouselProps } from './carousel.props';
import './carousel.scss';

import cn from 'classnames';

import { ArrowLeftIcon, ArrowRightIcon } from '../../icons';

export const Carousel = ({title, content, loop = true, lines = 1}:CarouselProps) => {

	//state
	const [width, setWidth] = useState<number>(0);
	const [inLine, setInLine] = useState<number>(4);
	const [step, setStep] = useState<number>(lines * inLine);
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
		updateInLIne();
	}, []);

	useEffect(() => {
		setMaxPage(Math.ceil(content.length / step) - 1);	
	}, [step]);

	useEffect(() => {
		setStep(lines * inLine);
	}, [inLine]);

	
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
		const pages:JSX.Element[][][] = [];
		
		for( 
			let counter = {page: 0, i: 0}; 
			counter.page < content.length; 
			
			counter =  {
				...counter,
				i: counter.i + 1 }
		){

			pages[counter.i] = new Array(lines).fill([]);
			for(let line = 0; line < lines; line++ ) {
				pages[counter.i][line] = content.slice(counter.page, counter.page + inLine);
				counter = {...counter, page : counter.page + inLine };
			}	
		}
		
		return pages.map((page) => {
			return(
				<div 
					className={cn("carousel__page", {
						["carousel__page_db"] : lines == 2
					})} 
					style={{minWidth: `${width}px`}}
				> 
					{page.map(row => {
						return(
							<div className={"carousel__row"}> 
								{row.map(item => {
									return(
										<div className={"carousel__item"}>{item}</div>
									);
								})} 
							</div>
						);
					})}
				</div>
			);
		});
	};
	
	const updateInLIne = () => {
		const newWidth = viewboxRef.current?.clientWidth;

		if(newWidth && newWidth != width) {
			setWidth(newWidth);
		}

		if(newWidth && newWidth > 1024 - 20) {
			if(inLine != 4) {
				setInLine(4);
				setActivePage(0);
			}
		} else if(newWidth && newWidth <= 1024 - 20 && newWidth > 576 - 20) {
			if(inLine != 3) {
				setInLine(3);
				setActivePage(0);
			}
		} else {
			if(step != 2) {
				setInLine(2);
				setActivePage(0);
			}
		}
	};

	//listener for adaptive
	window.addEventListener('resize', updateInLIne);

	const getIndicators = () => {
		return(
			<div className={"carousel__indicators"}>
				{
					new Array(maxPage + 1).fill(0).map((item, i) => {
						return(
							<button 
								className={cn("carousel__indicator", {
									["carousel__indicator_active"] : i == activePage
								})}
								onClick={() => setActivePage(i)}
							/>
						);})
				}
			</div>
		);
	};

	return(
		<div className={"carousel"} data-name='carousel'>
			<h2 className={"carousel__title"}>
				{title}
			</h2>

			<div className={"carousel__btns"}>
				<button className={"carousel__btn"}
					onClick={leftOffset}
				> <ArrowLeftIcon/> </button>
				
				<button className={"carousel__btn"}
					onClick={rightOffset}
				> <ArrowRightIcon/> </button>
			</div>

			

			<div className={"carousel__viewbox"}  ref={viewboxRef}>
				<div className={"carousel__content"} style={{transform: `translateX(${ - width * activePage}px)`}} ref={contentRef}>
					{getPages(step)}
				</div>
			</div>

			{getIndicators()}
		</div>
	);
};
