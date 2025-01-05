import { createStore ,combineReducers, applyMiddleware} from 'redux';
import cartReducer from './reducers/cartReducer';
import restaurantReducer from './reducers/resturantReducer';
import { thunk } from 'redux-thunk';








const rootReducer = combineReducers({
    cartReducer,
    restaurantReducer,
  });
  
  const store = createStore(rootReducer,applyMiddleware(thunk));
  
  export default store;