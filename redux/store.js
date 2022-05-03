import reducers from './reducer';
import { createStore } from 'redux';

const store = createStore(reducers);

export default store;
