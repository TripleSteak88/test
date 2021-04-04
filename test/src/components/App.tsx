import React, { useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Article from '../containers/Article';
import Home from '../containers/Home';
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

const App:React.FC<AppProps> = ({ fetchArticles }) =>  {

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/article/:id">
        <Article />
      </Route>
    </Container>
  );
}

export default App;
