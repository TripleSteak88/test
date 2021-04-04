export const ADD_ARTICLE = "ADD_ARTICLE";
export const REMOVE_ARTICLE = "REMOVE_ARTICLE";
export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const SAVE_ARTICLES = "SAVE_ARTICLES";

interface IArticle {
    id: number,
    title: string,
    body: string,
}

type ArticlesAction = {
    type: string,
    articlesList: IArticle[],
}

export const fetchArticles = (): { type: string } => ({
    type: FETCH_ARTICLES,
});
  
export const saveArticles = (articlesList: IArticle[]): ArticlesAction => ({
    type: SAVE_ARTICLES,
    articlesList,
});
  