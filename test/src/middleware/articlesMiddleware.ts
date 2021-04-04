import axios from 'axios';
import { Middleware } from 'redux';
import { FETCH_ARTICLES, saveArticles } from '../actions/articles';

// I know that I shouldn't put "any" types in the next line, but since I'm not sure
// of which ones I should use, I don't want to spend to much time searching the right ones
const recipes: Middleware = (store: any) => (next: any) => (action: any) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      console.log('middleware, action FETCH_ARTICLES');

      axios.get('https://jsonplaceholder.typicode.com/posts',{
        params: {
          _limit: 10
         }
      })
        .then((response) => {
          console.log('response apres la requete FETCH ARTICLES', response);

          store.dispatch(saveArticles(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default recipes;