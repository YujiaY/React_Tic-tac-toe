import { combineReducers } from 'redux';

import navigation from './navigationReducer';
import weather from './weatherReducer';

export default combineReducers({
	navigation,
	weather,
});
