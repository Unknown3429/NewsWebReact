import React, { useEffect, } from 'react'
import { useNewsContext } from '../../context/NewsContext'
import { useParams, useNavigate } from 'react-router-dom';

import loader from "../../assets/Search.gif"

import "./style.css"
import dayjs from 'dayjs';

const SearchPage = () => {
    const { query } = useParams()
    const { searchPage, getSearch, getSingleNews, singlePage } = useNewsContext();
    const navigate = useNavigate()


    const search = searchPage?.data?.articles;
    // console.log(searchPage?.data?.articles);
    // console.log(query);

    const handleSinglePage = async (data) => {
        const news = await data;
        // console.log(news);
        getSingleNews(news);
        console.log(singlePage);
        navigate(`/singlepage/${data?.title}`)
    }

    useEffect(() => {
        getSearch(`https://inshorts.me/news/search?query=${query}&offset=0&limit=20`)
    }, [query])
    return (
        <div>
            <div className="content">
                <ul className="team" >
                    <h2>Search Results For {query}</h2>
                    {search ? (search?.map((data, i) => {
                        return <li key={i} onClick={() => handleSinglePage(data)} className="member li-search co-funder" >
                            <div className="thumb"><img src={data?.imageUrl} /></div>
                            <div className="description">
                                {/* <h3>Author:{data?.authorName}</h3> */}
                                <h4 className='h4'>{data?.title}<br /></h4>
                                <p>{data?.content}</p>
                                <p>On:{dayjs(data?.createdAt
                                ).format(
                                    "MMM D, YYYY"
                                )} </p>
                            </div>
                        </li>
                    }))
                        : (
                            <div className="loader">
                                <img src={loader} alt="Loading..." />
                            </div>

                        )
                    }
                </ul>
            </div>
        </div >
    )
}

export default SearchPage