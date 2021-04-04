import { SAVE_ARTICLES } from "../actions/articles";

interface IArticle {
  userId: number,
  id: number,
  title: string,
  body: string,
}

type ArticleStateType = {
  articles: IArticle[],
}

type ArticlesAction = {
  type: string,
  articlesList: IArticle[],
}

const initialState: ArticleStateType = {
    articles: [],
};
  
const articlesReducer = (
  state: ArticleStateType = initialState, action: ArticlesAction 
  ): ArticleStateType => {
  switch (action.type) {
    case SAVE_ARTICLES:
      return {
        ...state,
        articles: action.articlesList,
      };

    default: return { ...state };
  }
};
  
export default articlesReducer;