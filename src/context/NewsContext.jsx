import { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";

import reducer from "../reducers/NewsReducer";


const category = "all"

const NewsContext = createContext();


const initialState = {
    news: [],
    news2: [],
    searchPage: [],
    singlePage: [],
    loading: false,
    error: false,
    newsCategory: []
}
const NewsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const NewsApi = `https://inshorts-news.vercel.app`;


    // for Geting top data from api 
    const getNews = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            const news = await res.data;
            dispatch({ type: "SET_NEWS", payload: news })
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

    const getNews2 = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            const news = await res.data;
            dispatch({ type: "SET_NEWS2", payload: news })
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

    // for Geting news categorywise from api 
    const getNewsCategory = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            const news = await res.data;
            dispatch({ type: "SET_CATEGORY_NEWS", payload: news })
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

    // for Geting news categorywise from api 
    const getSingleNews = async (data) => {
        dispatch({ type: "SET_LOADING" })
        try {
            // console.log(data);
            dispatch({ type: "SET_SINGLE_NEWS", payload: data })
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

    // For serch news 
    const getSearch = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            const news = await res.data;
            dispatch({ type: "SET_SEARCH_NEWS", payload: news })
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }


    useEffect(() => {
        getNews(`${NewsApi}/${category}`)
        getNews2(`https://inshorts.me/news/all?offset=0&limit=25`)
    }, [])

    return (
        <NewsContext.Provider value={{ ...state, getNews, getNewsCategory, getSingleNews, getSearch }}>
            {children}
        </NewsContext.Provider>
    )
}


// custom hooks
const useNewsContext = () => {
    return useContext(NewsContext);
};

export { NewsProvider, useNewsContext }