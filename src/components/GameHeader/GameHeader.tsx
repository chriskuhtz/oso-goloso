import { useRecoilValue } from 'recoil';
import { nextFoodAtom } from '../../store/nextFoodsAtom';
import { scoreAtom } from '../../store/scoreAtom';
import { Timer } from '../Timer/Timer';

export const GameHeader = (): JSX.Element => {
	const nextChoice = useRecoilValue(nextFoodAtom);
	const score = useRecoilValue(scoreAtom);
	return (
		<div className="header">
			<Timer />
			<div className="nextFood">{nextChoice}</div>
			<div>{score}</div>
		</div>
	);
};
