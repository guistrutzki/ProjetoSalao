import { combineReducers } from 'redux';

import AuthReducer from './reducers/AuthReducer';
import ScheduleReducer from './reducers/ScheduleReducer';

const Reducers = combineReducers({
  auth: AuthReducer,
  schedule: ScheduleReducer
});

export default Reducers;