import { Food } from '../../store/nextFoodsAtom';

export const FoodIcon = ({
	food,
	onClick,
}: {
	food: Food;
	onClick?: () => void;
}) => {
	const handleClick = () => {
		if (onClick) onClick();
	};
	return <img onClick={handleClick} src={`/icons8-${food}-100.png`} />;
};
