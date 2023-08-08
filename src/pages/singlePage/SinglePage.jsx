import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNewsContext } from '../../context/NewsContext';
import dayjs from 'dayjs';

import "./style.css"

const SinglePage = () => {
    // console.log(data);

    // console.log(data);
    const { singlePage } = useNewsContext();
    // console.log(singlePage?.readmore);
    return (
        <div>
            {/* <!-- Breadcrumb Start --> */}
            <div className="breadcrumb-wrap">
                <div className="container-fluid">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to={"/"}>Home</NavLink></li>
                        <li className="breadcrumb-item active">News details</li>
                    </ul>
                </div>
            </div>
            {/* <!-- Breadcrumb End --> */}
            {/* <!-- Single News Start--> */}
            <div className="single-news">
                <div className="container-fluid">
                    <div className="row">
                        <div style={{ flex: "0 0 90%", maxWidth: "90%" }} className="col-md-8">
                            <div className="sn-img">
                                <img style={{ height: "50vh", width: "100%", objectFit: "fill" }} src={singlePage?.imageUrl} />
                            </div>
                            <div className=" sn-content">
                                <NavLink target='_blank' to={`${singlePage?.sourceUrl} ? ${singlePage?.sourceUrl}:""`} className="sn-title" href="">{singlePage?.title}</NavLink>
                                <NavLink className="sn-date" href=""><i className="far fa-clock"></i>{dayjs(singlePage?.createdAt).format(
                                    "MMM D, YYYY"
                                )}</NavLink>
                                <h4>Author: <span><i>{singlePage?.authorName}</i></span></h4>
                                <p style={{ minHeight: "25vh", fontSize: "1.5rem" }}>
                                    {singlePage.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Single News End--> */}
        </div>
    )
}

export default SinglePage