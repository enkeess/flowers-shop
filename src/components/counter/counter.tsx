import { useState } from 'react';
import './counter.scss';
export const Counter = () => {
	const [count, setCount] = useState<number>(1);

	const inc = () => setCount(count + 1);
	const dec = () => setCount(Math.max(1, count - 1));

	return(
		<div className='counter'>
			<button 
				className='counter__btn'
				onClick={dec}
			>
				{'<'}
			</button>

			<div className='counter__num'>
				{count}
			</div>
				

			<button 
				className='counter__btn'
				onClick={inc}
			>
				{'>'}
			</button>
		</div>
	);
};