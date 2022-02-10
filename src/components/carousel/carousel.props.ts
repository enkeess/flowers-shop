export interface CarouselProps {
	title: string;
	content: JSX.Element[];
	lines?: 1 | 2;
	autoplay? : boolean;
	loop? : boolean;
}