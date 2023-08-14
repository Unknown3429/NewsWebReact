import React, { useEffect, useState } from 'react'
import dayjs from "dayjs";
import "./style.css"
import newsimg from "../../assets/news.jpg"
import { useNewsContext } from '../../context/NewsContext';
import { NavLink } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
// import TextToSpeech from '../textToSpeech/TextToSpeech';
import loader from "../../assets/main.gif"

const BodyNews = ({ news, news2, title, }) => {
    const [num, setNum] = useState(6);
    const [hasmore, setHasmore] = useState(true);
    const { getSingleNews, singlePage } = useNewsContext();

    const handleSinglePage = async (data) => {
        news = await data;
        getSingleNews(news);
    }

    let sliceNews2 = news2?.slice(0, num);

    // const fetchMoreData = () => {
    //     if (num === 100) {
    //         setHasmore(false)
    //     }
    //     else {
    //         setTimeout(() => {
    //             setNum(num + 3);
    //             setHasmore(true)
    //         }, 1000);

    //     }  // sliceNews2 = news2?.slice(0, num);
    // }


    const handelInfiniteScroll = async () => {
        // console.log("scrollHeight" + document.documentElement.scrollHeight);
        // console.log("innerHeight" + window.innerHeight);
        // console.log("scrollTop" + document.documentElement.scrollTop);
        try {
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight - 400
            ) {
                setTimeout(() => {
                    setNum(num + 3)
                }, 500);

            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (num <= 99) {
            window.addEventListener("scroll", handelInfiniteScroll);
        }
        else {
            setHasmore(false)
        }

        return () => window.removeEventListener("scroll", handelInfiniteScroll);
    }, [num]);




    return (
        <div>
            <div className="main-news">
                <div className="container-fluid allNews">
                    <h2 style={{ textAlign: "none" }}><i className="fas fa-align-justify"></i>{title} News</h2>
                    <InfiniteScroll
                        style={{ overflow: "none" }}
                        dataLength={100}
                        // next={fetchMoreData}
                        hasMore={hasmore}
                        loader={<div className='loadingimg'><img src={loader} /></div>}
                    // scrollableTarget="scrollableDiv"

                    >
                        <div className="row">
                            {sliceNews2?.map((data, i) => {
                                return (
                                    <div onClick={() => handleSinglePage(data)} key={i} className="m-item col-md-6">
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
                                        {/* <button onClick={handlenext}>next</button> */}
                                        {/* <TextToSpeech text={data?.content}/> */}
                                    </div>
                                )
                            })}
                        </div>
                    </InfiniteScroll>

                </div>
            </div>

        </div>

    )

}


export default BodyNews