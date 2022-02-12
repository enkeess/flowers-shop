import { ReactNode } from 'react';

export interface CarouselProps {
	title: string;
	content: JSX.Element[];
	lines?: 1 | 2;
	autoplay? : boolean;
	loop? : boolean;
	children?: ReactNode | ReactNode[]
}
