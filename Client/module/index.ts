import { combineReducers } from 'redux';
import app from './app';

const rootReduser = combineReducers({
  app,
});

export default rootReduser;
export type RootState = ReturnType<typeof rootReduser>;
