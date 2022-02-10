import { BtnProps } from './btn.props';
import './btn.scss';
import cn from 'classnames';

export const Btn = ({type = "default", children}:BtnProps) => {
	console.log(type);



	return(
		<button className={cn('btn', {
			["btn_fill"] : type == "fill",
			["btn_outline"] : type == "outline",
			["btn_card"] : type == "card",
			["btn_in-form"] : type == "in-form"
		})}>
			{children}	
		</button>
	);
};