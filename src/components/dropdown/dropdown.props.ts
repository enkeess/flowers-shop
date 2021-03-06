import { ReactNode } from 'react';

export interface DropdownProps {
	title: string;
	children: ReactNode | ReactNode[];
	type?: "default" | "category" | "footer";
	isActive? : boolean;
}