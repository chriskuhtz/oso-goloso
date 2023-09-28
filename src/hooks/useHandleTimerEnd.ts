import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { routerAtom } from '../store/routerAtom';
import { timerAtom } from '../store/timerAtom';

export const useHandleTimerEnd = () => {
	const setRouter = useSetRecoilState(routerAtom);
	const timer = useRecoilValue(timerAtom);

	useEffect(() => {
		if (timer === 0) {
			setRouter('GAME_OVER');
		}
	}, [setRouter, timer]);
};
