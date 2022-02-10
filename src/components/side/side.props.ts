import { ReactNode } from 'react';

export interface SideProps {
	title: string;
	children: ReactNode;
	showSide: boolean;
	toggleShowSide : () => void;
}