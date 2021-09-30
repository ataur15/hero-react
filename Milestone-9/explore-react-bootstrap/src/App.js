import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
  const [news, setNews] = useState([]);
  console.log(news);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2021-08-27&sortBy=publishedAt&apiKey=c27b6b4f7934485ba6fb05ee110c49b0`)
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, []);

  return (
    <div className="App">
      {
        news.length === 0 ? <Spinner animation="border" /> :
          <Row xs={1} md={4} className="g-4">
            {
              news.map(article => <News news={article}></News>)
            }
          </Row>
      }
    </div>
  );
}

export default App;
