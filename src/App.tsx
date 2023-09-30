import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { GameBody } from './components/GameBody/GameBody';
import { GameHeader } from './components/GameHeader/GameHeader';
import { MenuScreen } from './components/MenuScreen/MenuScreen';
import { useHandleTimerEnd } from './hooks/useHandleTimerEnd';
import { nextChoicesAtom, nextFoodAtom } from './store/nextFoodsAtom';
import { routerAtom } from './store/routerAtom';
import { scoreAtom } from './store/scoreAtom';
import { timerAtom } from './store/timerAtom';

function App() {
	const [router, setRouter] = useRecoilState(routerAtom);
	const resetFood = useResetRecoilState(nextFoodAtom);
	const resetChoices = useResetRecoilState(nextChoicesAtom);
	const resetTimer = useResetRecoilState(timerAtom);
	const resetScore = useResetRecoilState(scoreAtom);
	const score = useRecoilValue(scoreAtom);
	useHandleTimerEnd();

	const gotoGame = () => {
		resetChoices();
		resetFood();
		resetTimer();
		resetScore();
		setRouter('GAME');
	};

	if (router === 'GAME') {
		return (
			<div className="container">
				<GameHeader />
				<GameBody />
			</div>
		);
	}
	if (router === 'GAME_OVER') {
		return (
			<MenuScreen
				title="GAME OVER"
				dialogue={`Congrats, you got ${score} Points`}
				buttonText="Play Again"
				onClick={gotoGame}
			/>
		);
	}

	return (
		<MenuScreen
			title="OSO GOLOSO"
			dialogue={`Always pick the food the bear wants and dont run out of time!`}
			buttonText="Play"
			onClick={gotoGame}
		/>
	);
}

export default App;
