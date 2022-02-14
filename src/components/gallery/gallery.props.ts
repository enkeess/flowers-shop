import { ReactNode } from 'react';

export interface GalleryProps {
	element?: JSX.Element;
	children: ReactNode | ReactNode[]; 
}