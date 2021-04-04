import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleCard from './ArticleCard';

interface IArticle {
    userId: number,
    id: number,
    title: string,
    body: string,
}

interface HomeProps {

    articles: IArticle[],
}

const Home:React.FC<HomeProps> = ({ articles }) =>  {

  return (
    <>
    <header className="text-center m-3">
    <h1> My blog </h1>
    </header>
    <div className="articles">
        <h2> My articles </h2>
        <div className="d-flex flex-wrap">
        { articles.map((article) => (
            <ArticleCard key={ article.id } {...article}/>
        )) }
        </div>
    </div>
    </>
  )
}

export default Home;
