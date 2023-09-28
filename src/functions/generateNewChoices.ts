import { Food } from '../store/nextFoodsAtom';
import { selectRandomFood } from './selectRandomFood';

export const generateNewChoices = (length: number): Food[] => {
	const res: Food[] = [];

	while (res.length < length) {
		const newFood = selectRandomFood();
		if (!res.includes(newFood)) {
			res.push(newFood);
		}
	}
	return res;
};
