import { foods } from '../store/nextFoodsAtom';

export const selectRandomFood = () => {
	const randomIndex = Math.floor(Math.random() * foods.length);
	return foods[randomIndex];
};
