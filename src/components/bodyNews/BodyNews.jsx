import React from 'react'
import dayjs from "dayjs";
import "./style.css"
import newsimg from "../../assets/news.jpg"
import { useNewsContext } from '../../context/NewsContext';
import { NavLink } from 'react-router-dom';

const BodyNews = ({ news, news2, title }) => {

    const { getSingleNews, singlePage } = useNewsContext();
    const handleSinglePage = async (data) => {
        news = await data;
        // console.log(news);
        getSingleNews(news);
        console.log(singlePage);
    }


    // const sliceNews = news?.slice(6, 24);
    const sliceNews2 = news2?.slice(0, 24);
    return (
        <div>
            <div className="main-news">
                <div className="container-fluid allNews">
                    <h2 style={{textAlign:"none"}}><i className="fas fa-align-justify"></i>{title} News</h2>
                    <div className="row">
                        {sliceNews2?.map((data, i) => {
                            return (
                                <div onClick={() => handleSinglePage(data)} key={i} className="col-md-6">
                                    <div className="mn-img">
                                        {!data?.imageUrl ? <img className='newsimg' src={newsimg} /> : <img className='newsimg' src={data?.imageUrl} />}
                                        <div className="mn-content">
                                            <div className="mn-content-inner">
                                                <a className="mn-date" href=""><i className="far fa-clock"></i> {dayjs(data?.createdAt).format(
                                                    "MMM D, YYYY"
                                                )}</a>
                                                <NavLink to={`/singlepage/${data?.title}`} className="mn-title">{data?.title}</NavLink>
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
    )
}

export default BodyNews