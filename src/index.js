import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import App from './App';
import reducers from './redux/reducers';

const composeEnhancers = composeWithDevTools({});

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunkMiddleware)),
);

ReactDOM.render(
	(
		<Provider store={store}>
			<App />
		</Provider>
	),
	document.getElementById('root'),
);
