import React from 'react'
import newsimg from "../../assets/news.jpg"
import loader from "../../assets/main.gif"

import './style.css'

import dayjs from 'dayjs';
// import SinglePage from '../../pages/singlePage/SinglePage';
import { NavLink } from "react-router-dom"
import { useNewsContext } from '../../context/NewsContext';




const TopNews = ({ news, title, news2 }) => {
    const { getSingleNews, singlePage, loading } = useNewsContext();


    // const firstNews = ((news || [])[0])
    // const sliceNewsTop = news?.slice(1, 5);
    const firstNews2 = ((news2 || [])[0])
    const sliceNewsTop2 = news2?.slice(1, 5);
    const handleSinglePage = async (firstNews) => {
        news = await firstNews;
        // console.log(news);
        getSingleNews(news);
        console.log(singlePage);
    }

    return (
        <div>
            {/* <!-- Top News Start--> */}
            {!loading ?
                (<div className="top-news">
                    <div className="container-fluid">
                        <h1 >{title} News</h1>
                        <div className="row">
                            <div onClick={() => handleSinglePage(firstNews2)} className="col-md-6 tn-left">
                                <div className="tn-img main">
                                    <img className='main-img' src={firstNews2?.imageUrl} />
                                    <div className="tn-content">
                                        <div className="tn-content-inner">
                                            <NavLink className="tn-date" ><i className="far fa-clock"></i>{dayjs(firstNews2?.createdAt
                                            ).format(
                                                "MMM D, YYYY"
                                            )}</NavLink>
                                            <NavLink to={`/singlepage/${firstNews2?.title}`} className="tn-title" href="">{firstNews2?.title}</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 tn-right">
                                <div className="tn-right-inner row">
                                    {sliceNewsTop2?.map((data, i) => {
                                        return (
                                            <div key={i} className="col-md-6">
                                                <div className="tn-img item">
                                                    {!data?.imageUrl ? <img className='newsimg' src={newsimg} /> : <img className='newsimg' src={data?.imageUrl} />}
                                                    <div onClick={() => handleSinglePage(data)} className="tn-content">
                                                        <div className="tn-content-inner">
                                                            <NavLink className="tn-date" href=""><i className="far fa-clock"></i>{dayjs(data?.createdAt).format(
                                                                "MMM D, YYYY"
                                                            )}</NavLink>
                                                            <NavLink to={`/singlepage/${data?.title}`} className="tn-title" href="">{data?.title}</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
                : (
                    <div className="loadingSkeleton ">
                        <img className='text-center' src={loader} alt="Loading...." />
                    </div>
                )}
            {/* <!-- Top News End--> */}
        </div>
    )
}

export default TopNews