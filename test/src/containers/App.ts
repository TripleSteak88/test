import { connect } from 'react-redux';
import { Dispatch} from 'redux';
import { fetchArticles } from '../actions/articles';
import App from '../components/App';

interface IArticle {
    userId: number
    id: number
    title: string
    body: string
}

type ArticleState = {
    articles: IArticle[]
}

const mapStateToProps = (state : ArticleState) => ({
  articles: state.articles,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchArticles: () => {
    console.log('fetchArticle se lance');
    dispatch(fetchArticles());
  },
 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
