import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { generateNewChoices } from '../../functions/generateNewChoices';
import {
	foods,
	nextChoicesAtom,
	nextFoodAtom,
} from '../../store/nextFoodsAtom';
import { scoreAtom } from '../../store/scoreAtom';
import { timerAtom } from '../../store/timerAtom';
import { FoodIcon } from '../FoodIcon/FoodIcon';

export const GameBody = (): JSX.Element => {
	const [timer, setTimer] = useRecoilState(timerAtom);
	const [nextFood, setNextFood] = useRecoilState(nextFoodAtom);
	const [nextChoices, setNextChoices] = useRecoilState(nextChoicesAtom);
	const [score, setScore] = useRecoilState(scoreAtom);

	const increaseTimer = useCallback(() => {
		setTimer(timer + 1000);
	}, [setTimer, timer]);

	const handleClickOnCorrectTile = useCallback(() => {
		const amountOfChoices = Math.min(2 + score, foods.length);
		const newChoices = generateNewChoices(amountOfChoices);
		const randomIndex = Math.floor(Math.random() * newChoices.length);
		const randomFood = newChoices[randomIndex];

		increaseTimer();
		setNextFood(randomFood);
		setNextChoices(newChoices);
		setScore(score + 1);
	}, [increaseTimer, score, setNextChoices, setNextFood, setScore]);

	return (
		<div className="body">
			<div className="choices">
				{nextChoices.map((c) => {
					if (c === nextFood) {
						return (
							<FoodIcon key={c} onClick={handleClickOnCorrectTile} food={c} />
						);
					}
					return <FoodIcon food={c} />;
				})}
			</div>
		</div>
	);
};
