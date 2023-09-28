import { useRecoilState } from 'recoil';
import { GameBody } from './components/GameBody/GameBody';
import { GameHeader } from './components/GameHeader/GameHeader';
import { useHandleTimerEnd } from './hooks/useHandleTimerEnd';
import { routerAtom } from './store/routerAtom';

function App() {
	const [router, setRouter] = useRecoilState(routerAtom);

	useHandleTimerEnd();

	const gotoGame = () => {
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
			<div className="container">
				<div className="header"> game over :(</div>
				<div className="body">
					<button onClick={gotoGame}>Play Again</button>
				</div>
			</div>
		);
	}

	return (
		<div className="container">
			<div className="header">Feed the Bear</div>
			<div className="body">
				{' '}
				<button onClick={gotoGame}>Play</button>
			</div>
		</div>
	);
}

export default App;
