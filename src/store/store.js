import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const insialState = {};
/* const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose; */

const store = createStore(
  rootReducer,
  insialState,
  compose(
    applyMiddleware(thunk)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
//composeEnhancers(applyMiddleware(thunk))
export default store;
