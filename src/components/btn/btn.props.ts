import { ReactNode } from 'react';



export interface BtnProps {
	type?: "fill" | "outline" | "card" | "in-form" | "default";
	children?: ReactNode;
}