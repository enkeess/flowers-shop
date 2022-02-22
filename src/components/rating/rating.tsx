import { StarIcon } from '../../icons';

export const Rating = () => {
	const rating = 4;

	return (
		<div className={"rating"}>
			{new Array(rating).fill(<StarIcon/>).map(item => (item))}
		</div>
	);
};