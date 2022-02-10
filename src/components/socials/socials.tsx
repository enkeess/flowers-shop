import { FacebookIcon, InstagramIcon, TelegramIcon, ViberIcon } from '../../icons';
import './socials.scss';

export const Socials = ():JSX.Element => {
	return (
		<ul className='socials'>
			<li className='socials__item'>
				<a href="#" className='socials__item-link'>
					<ViberIcon/>
				</a>
			</li>
			<li className='socials__item'>
				<a href="#" className='socials__item-link'>
					<InstagramIcon/>
				</a>
			</li>
			<li className='socials__item'>
				<a href="#" className='socials__item-link'>
					<TelegramIcon/>
				</a>
			</li>
			<li className='socials__item'>
				<a href="#" className='socials__item-link'>
					<FacebookIcon/>
				</a>
			</li>
		</ul>
	);
};