import { connect } from 'react-redux';
import { Dispatch} from 'redux';

import { fetchArticles } from '../actions/articles';
import Article from '../components/Article';

interface IArticle {
    userId: number,
    id: number,
    title: string,
    body: string,
}

type ArticleState = {
    articles: IArticle[]
}

const mapStateToProps = (state : ArticleState): {articles : IArticle[]} => ({
  articles: state.articles,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
   fetchArticles: () => {
    dispatch(fetchArticles());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
