import { useEffect } from "react";
import BodyNews from "../../../components/bodyNews/BodyNews";
import TopNews from "../../../components/topNews/TopNews"


import { useNewsContext } from '../../../context/NewsContext';


const Latest = () => {
    const { news, news2, getNewsCategory, newsCategory } = useNewsContext();
    // const allnews = news?.data;
    const allnews2 = news2?.data?.articles;
    const trendNews = newsCategory?.data?.articles;
    // console.log(allnews2);

    useEffect(() => {
        getNewsCategory("https://inshorts.me/news/trending?offset=0&limit=10")
    }, [])



    return (
        <div>
            <TopNews news2={trendNews} title={"Trending"} />
            <BodyNews news2={allnews2} title={"All"} />
        </div>
    )
}

export default Latest