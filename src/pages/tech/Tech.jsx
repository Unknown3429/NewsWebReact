import React, { useEffect } from 'react'
import { useNewsContext } from '../../context/NewsContext';
import TopNews from '../../components/topNews/TopNews';
import BodyNews from '../../components/bodyNews/BodyNews';



const Tech = () => {
    const { getNewsCategory, newsCategory, news2  } = useNewsContext();
    // console.log(newsCategory?.data);
    const allnews = newsCategory?.data?.articles;
    const allnews2 = news2?.data?.articles;

    // console.log(allnews);
    useEffect(() => {
        getNewsCategory("https://inshorts.me/news/topics/technology")
    }, [])


    return (
        <div>
            <TopNews news2={allnews} title={"Technology"} />
            <BodyNews news2={allnews2} title={"All"} />
        </div>
    )
}

export default Tech