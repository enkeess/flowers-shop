import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CheckBoxProps extends DetailedHTMLProps< HTMLAttributes <HTMLInputElement>,  HTMLInputElement> {
	title: string;
	value: string;
}