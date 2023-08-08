import React, { useEffect } from 'react'
import { useNewsContext } from '../../context/NewsContext';
import TopNews from '../../components/topNews/TopNews';
import BodyNews from '../../components/bodyNews/BodyNews';

const Sports = () => {

    const { getNewsCategory, newsCategory, news2 } = useNewsContext();

    // console.log(newsCategory?.data);

    const allnews = newsCategory?.data?.articles;
    const allnews2 = news2?.data?.articles;



    useEffect(() => {
        getNewsCategory("https://inshorts.me/news/topics/sports")
    }, [])


    return (
        <div>
            <TopNews news2={allnews} title={"Sports"} />
            <BodyNews news2={allnews2} title={"All"} />
        </div>
    )
}

export default Sports