import { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { nextChoicesAtom, nextFoodAtom } from '../store/nextFoodsAtom';
import { routerAtom } from '../store/routerAtom';
import { scoreAtom } from '../store/scoreAtom';
import { timerAtom } from '../store/timerAtom';

export const useHandleTimerEnd = () => {
	const setRouter = useSetRecoilState(routerAtom);
	const timer = useRecoilValue(timerAtom);
	const resetFood = useResetRecoilState(nextFoodAtom);
	const resetChoices = useResetRecoilState(nextChoicesAtom);
	const resetTimer = useResetRecoilState(timerAtom);
	const resetScore = useResetRecoilState(scoreAtom);
	useEffect(() => {
		if (timer === 0) {
			resetChoices();
			resetFood();
			resetTimer();
			resetScore();
			setRouter('GAME_OVER');
		}
	}, [resetChoices, resetFood, resetScore, resetTimer, setRouter, timer]);
};
