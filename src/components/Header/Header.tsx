import { Timer } from '../Timer/Timer';

export const Header = (): JSX.Element => {
	return (
		<div className="header">
			<Timer />
			<div>Bear</div>
			<div>Food</div>
		</div>
	);
};
