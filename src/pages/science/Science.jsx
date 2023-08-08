import React, { useEffect } from 'react'
import { useNewsContext } from '../../context/NewsContext';
import TopNews from '../../components/topNews/TopNews';
import BodyNews from '../../components/bodyNews/BodyNews';



const Science = () => {
    const { getNewsCategory, newsCategory, news2, } = useNewsContext();
    // console.log(news2?.data?.articles);
    // const trendingNews = news2?.data?.articles;
    // const firstNews2 = ((trendingNews || [])[0])
    // console.log(firstNews2);



    const allnews = newsCategory?.data?.articles;
    const allnews2 = news2?.data?.articles;
    useEffect(() => {
        getNewsCategory("https://inshorts.me/news/topics/science")
    }, [])


    return (
        <div>
            <TopNews news2={allnews} title={"Science"} />
            <BodyNews news2={allnews2} title={"All"} />
        </div>
    )
}

export default Science