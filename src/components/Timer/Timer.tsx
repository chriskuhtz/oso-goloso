import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { timerAtom } from '../../store/timerAtom';
const tick = 100;
export const Timer = (): JSX.Element => {
	const [timer, setTimer] = useRecoilState(timerAtom);

	useEffect(() => {
		const reduceByTick = () => {
			if (timer > 0) {
				setTimer(timer - tick);
			}
		};
		const timerReducer = setInterval(() => reduceByTick(), tick);

		return () => clearInterval(timerReducer);
	}, [setTimer, timer]);

	return (
		<div className={timer < 3000 ? 'lowTimer' : 'timer'}>
			{(timer / 1000).toFixed(1)}
		</div>
	);
};
