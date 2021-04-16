import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import TodoReducer from './redux/TodoReducers'

const rootReducer = combineReducers({
   todo: TodoReducer
});

const configureStore = (preloadedState = {}) => {
  const middleWares = [thunkMiddleware];
  const middleWareEnhancers = applyMiddleware(...middleWares);
  const enhancers = composeWithDevTools(middleWareEnhancers);
  const store = createStore(rootReducer, preloadedState, enhancers);
  return store;
};

export default configureStore();
