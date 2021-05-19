import { combineReducers } from 'redux';
import app from './app';

const rootReduver = combineReducers({
  app,
});

export default rootReduver;
export type RootState = ReturnType<typeof rootReduver>;
