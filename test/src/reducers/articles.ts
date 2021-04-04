import { SAVE_ARTICLES } from "../actions/articles";

interface IArticle {
  userId: number,
  id: number,
  title: string,
  body: string,
}

type ArticleStateI = {
  articles: IArticle[],
}

type ArticlesAction = {
  type: string,
  articlesList: IArticle[],
}

const initialState: ArticleStateI = {
    articles: [],
};
  
const articlesReducer = (
  state: ArticleStateI = initialState, action: ArticlesAction 
  ): ArticleStateI => {
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