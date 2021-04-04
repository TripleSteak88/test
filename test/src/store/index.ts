import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import articlesMiddleware from '../middleware/articlesMiddleware';
import articlesReducer from '../reducers/articles';

const store = createStore(
  articlesReducer,
  composeWithDevTools(applyMiddleware(articlesMiddleware),
));

export default store;
