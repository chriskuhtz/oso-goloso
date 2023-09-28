import { useRecoilState, useSetRecoilState } from 'recoil';
import { Body } from './components/Body/Body';
import { Header } from './components/Header/Header';
import { useHandleTimerEnd } from './hooks/useHandleTimerEnd';
import { routerAtom } from './store/routerAtom';
import { timerAtom } from './store/timerAtom';

function App() {
	const [router, setRouter] = useRecoilState(routerAtom);
	const setTimer = useSetRecoilState(timerAtom);

	useHandleTimerEnd();

	const gotoGame = () => {
		setRouter('GAME');
		setTimer(10000);
	};

	if (router === 'GAME') {
		return (
			<div className="container">
				<Header />
				<Body />
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
