import reducers from "./Reducer";
import { createStore } from "redux";

const store = createStore(reducers);

export default store;
