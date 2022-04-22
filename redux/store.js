import { configureStore } from '@reduxjs/toolkit';
import reducer from './Reducer';

const store = configureStore(reducer);

export default store;
