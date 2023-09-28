import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { generateNewChoices } from '../../functions/generateNewChoices';
import { nextChoicesAtom, nextFoodAtom } from '../../store/nextFoodsAtom';
import { timerAtom } from '../../store/timerAtom';

export const GameBody = (): JSX.Element => {
	const [timer, setTimer] = useRecoilState(timerAtom);
	const [nextFood, setNextFood] = useRecoilState(nextFoodAtom);
	const [nextChoices, setNextChoices] = useRecoilState(nextChoicesAtom);

	const increaseTimer = useCallback(() => {
		setTimer(timer + 1000);
	}, [setTimer, timer]);

	const handleClickOnCorrectTile = useCallback(() => {
		const newChoices = generateNewChoices(2);
		const randomIndex = Math.floor(Math.random() * newChoices.length);
		const randomFood = newChoices[randomIndex];

		increaseTimer();
		setNextFood(randomFood);
		setNextChoices(newChoices);
	}, [increaseTimer, setNextChoices, setNextFood]);

	return (
		<div className="body">
			{nextChoices.map((c) => {
				if (c === nextFood) {
					return (
						<button key={c} onClick={handleClickOnCorrectTile}>
							{c}
						</button>
					);
				}
				return <button key={c}>{c}</button>;
			})}
		</div>
	);
};
