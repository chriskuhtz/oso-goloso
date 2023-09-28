import { atom } from 'recoil';

export const scoreAtom = atom<number>({ default: 0, key: 'score' });
