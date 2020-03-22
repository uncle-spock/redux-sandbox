import React from 'react';
import { createStore } from 'redux';
import reducer from '../reducer';
import { Provider } from 'react-redux';
import Counter from './Counter';

const store = createStore(reducer);

const App = () => {
	return (
		<Provider store={store}>
			<Counter />
		</Provider>
	);
};

export default App;