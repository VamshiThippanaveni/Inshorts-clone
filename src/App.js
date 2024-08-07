import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import NavInshorts from "./Components/NavInshorts";
import NewsContent from "./Components/NewsContent/NewsContent";
import apikey from "./data/Config";
import Footer from "./Components/Footer/Footer";

function App() {
  const [category, setCategory] = useState("General");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);
  

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&category=${category}&pageSize=${loadMore}`
      );
     setNewsArray(news.data.articles)
     setNewsResults(news.data.totalResults)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    newsApi();
  }, [newsApi,newsResults,category,loadMore]);

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
      {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
      <Footer/>
    </div>
  );
}

export default App;
