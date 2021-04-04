import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import ArticleCard from './ArticleCard';
import { Route } from 'react-router-dom';

interface IArticle {
  userId: number,
  id: number,
  title: string,
  body: string,
}

interface AppProps {
  fetchArticles(): void,
  articles: IArticle[],
}

const App:React.FC<AppProps> = ({ fetchArticles, articles }) =>  {

  useEffect(() => {
     console.log('useEffect App');
    fetchArticles();
  }, []);

  return (
    <Container>
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
    </Container>
  );
}

export default App;
