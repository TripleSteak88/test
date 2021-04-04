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


    console.log('articles dans Article', articles);

    const { id } = useParams<ParamTypes>();

    // Params from useParams can only be of string type,
    // so I have to parse it to compare it with an integer (article.id)
    const myArticle = articles.find(article => article.id === parseInt(id, 10));
    console.log('myArticle', myArticle);

    return (
        
        <>
        { myArticle !== undefined ? (
            <>
        <header>
            <h1> { myArticle.title} </h1>
        </header>
        <div className="article">
            <p> { myArticle.body} </p>
        </div>
        </>
        ) : (
        <p>En chargement</p>)
        }
        
        </>
    )
}

export default Article;
