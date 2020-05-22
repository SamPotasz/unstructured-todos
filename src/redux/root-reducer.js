import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';    //use local storage

import taskReducer from './task/task.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['task'], //what reducers we want to persist. All local at this point
}

const rootReducer = combineReducers({
  task: taskReducer,
})

export default persistReducer(persistConfig, rootReducer);