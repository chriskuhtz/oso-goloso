import { atom } from 'recoil';

export const timerAtom = atom<number>({ default: 10000, key: 'timerAtom' });
