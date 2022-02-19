import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';



export interface BtnProps extends DetailedHTMLProps< HTMLAttributes <HTMLButtonElement>,  HTMLButtonElement> {
	type?: "fill" | "outline" | "card" | "in-form" | "default";
	children?: ReactNode;

}