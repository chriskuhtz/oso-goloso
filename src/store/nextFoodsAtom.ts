import { atom } from 'recoil';

export const foods = [
	'bento',
	'cheese',
	'cheesecake',
	'chocolate-bar',
	'dumplings',
	'noodles',
	'paella',
	'pancake-stack',
	'raspberry',
	'rice-bowl',
	'salad',
	'seafood',
	'sunny-side-up-eggs',
	'sushi',
	'tapas',
] as const;
export type Food = (typeof foods)[number];

export const nextFoodAtom = atom<Food>({
	key: 'food',
	default: 'raspberry',
});

export const nextChoicesAtom = atom<Food[]>({
	key: 'choices',
	default: ['raspberry', 'cheese'],
});
