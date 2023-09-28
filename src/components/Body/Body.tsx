import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { timerAtom } from '../../store/timerAtom';

export const Body = (): JSX.Element => {
	const [timer, setTimer] = useRecoilState(timerAtom);

	const increaseTimer = useCallback(() => {
		setTimer(timer + 1000);
	}, [setTimer, timer]);

	return (
		<div className="body">
			<button onClick={increaseTimer}>Food</button>
		</div>
	);
};
