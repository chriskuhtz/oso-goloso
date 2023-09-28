import { useRecoilValue } from 'recoil';
import { nextFoodAtom } from '../../store/nextFoodsAtom';
import { Timer } from '../Timer/Timer';

export const GameHeader = (): JSX.Element => {
	const nextChoice = useRecoilValue(nextFoodAtom);
	return (
		<div className="header">
			<Timer />
			<div>Bear</div>
			<div>{nextChoice}</div>
		</div>
	);
};
