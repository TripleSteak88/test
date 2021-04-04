import { connect } from 'react-redux';
import { Dispatch} from 'redux';
import Home from '../components/Home';

interface IArticle {
    userId: number
    id: number
    title: string
    body: string
}

type ArticleState = {
    articles: IArticle[]
}

const mapStateToProps = (state : ArticleState): {articles : IArticle[]} => ({
  articles: state.articles,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
