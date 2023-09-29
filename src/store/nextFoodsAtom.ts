import { atom } from 'recoil';

export const foods = [
	'Donuts',
	'Croissants',
	'Apples',
	'Pies',
	'Chickens',
	'Salmons',
	'Peppers',
	'Carrots',
	'Taters',
	'Spaghetti',
	'Tomatoes',
	'Gummy Worms',
	'Cookies',
	'Sandwiches',
	'Burgers',
] as const;
export type Food = (typeof foods)[number];

export const nextFoodAtom = atom<Food>({
	key: 'food',
	default: 'Donuts',
});

export const nextChoicesAtom = atom<Food[]>({
	key: 'choices',
	default: ['Donuts', 'Apples'],
});
