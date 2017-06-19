import { combineReducers } from 'redux';
import weather_reducer from './weather_reducer'

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
