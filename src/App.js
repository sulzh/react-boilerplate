import React, { useState, lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader';

const Warning = lazy(() => import('./Warning'));

import './index.css';

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h3 className="title">Hello world!!!!</h3>
			<div>Count: {count}</div>
			<button onClick={() => { setCount(c => c - 1); }}>
        -
			</button>
			<button onClick={() => { setCount(c => c + 1); }}>
        +
			</button>
			{
				count >= 11 &&
				<Suspense>
					<Warning />
				</Suspense>
			}
		</div>
	);
};

export default hot(module)(App);
