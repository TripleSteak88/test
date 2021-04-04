import React from 'react';
import { useParams } from 'react-router-dom';

interface IArticle {
    userId: number,
    id: number,
    title: string,
    body: string,
}

interface ParamTypes {
    id: string
}

interface ArticleProps {

    articles: IArticle[],
}

const Article:React.FC<ArticleProps> = ({ articles }) =>  {

    const { id } = useParams<ParamTypes>();

    // Params from useParams can only be of string type,
    // so I have to parse it in order to compare it with an integer (article.id)
    const myArticle = articles.find(article => article.id === parseInt(id, 10));

    return (
        
        <>
        { myArticle !== undefined ? (
        <div className="m-3">
            <header>
                <h1> { myArticle.title} </h1>
            </header>
            <div className="article">
                <p> { myArticle.body} </p>
            </div>
            <a href="/">Go back</a>
        </div>
        ) : (
        <p>En chargement</p>)
        }
        
        </>
    )
}

export default Article;
