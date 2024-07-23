import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsList = ({ category }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBlogs(data.articles));
  }, [category]);
  return (
    <div>
      <h2 className="text-center">
        Latest
        <span className="badge bg-danger"> News</span>
      </h2>
      {blogs &&
        blogs.map((blog, index) => {
          return (
            <NewsItem
              key={index}
              title={blog.title}
              description={blog.description}
              src={blog.urlToImage}
              url={blog.url}
              publishedAt={blog.publishedAt}
            />
          );
        })}
    </div>
  );
};
export default NewsList;
