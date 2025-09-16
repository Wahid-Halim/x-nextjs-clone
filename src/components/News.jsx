"use client";

import { useEffect, useState } from "react";
import Search from "./Search";
import { TbArrowsVertical } from "react-icons/tb";

const News = () => {
  const [news, setNews] = useState([]);
  const [articlesNum, setArticlesNum] = useState(3);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
      );
      const data = await res.json();
      setNews((news) => [...news, ...data.articles]);
    };
    fetchNews();
  }, []);

  return (
    <div className="text-stone-300 pt-4 ">
      <div className="stick top-0">
        <Search />

        <div className="space-y-3 bg-[#0A0A0A] rounded-xl pt-2">
          <h3 className="text-stone-100 font-bold text-xl ">
            What is Happening?
          </h3>
          {news.slice(0, articlesNum).map((article) => (
            <div key={article.title.slice(0, 6)}>
              <a href={article.url} target="_blank">
                <div className="flex items-center justify-between px-4 py-2  space-x-1">
                  <div className="space-y-0.5">
                    <h6 className="text-sm font-bold">{article.title}</h6>
                    <p className="text-stone-50  text-xs font-medium">
                      {article.source.name}
                    </p>
                  </div>
                  <img
                    src={article.urlToImage}
                    alt={article.title.slice(0, 4)}
                    width="70"
                    className="rounded-xl"
                  />
                </div>
              </a>
            </div>
          ))}

          <button
            onClick={() => setArticlesNum((curNum) => curNum + 3)}
            className="text-stone-50 font-bold"
          >
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
