import { atom } from 'recoil';

export type Route = 'MENU' | 'GAME' | 'GAME_OVER';
export const routerAtom = atom<Route>({ default: 'MENU', key: 'router' });
