const ProductReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: true,
            };

        case "SET_NEWS":
            return {
                ...state,
                loading: false,
                news: action.payload
            }
        case "SET_NEWS2":
            return {
                ...state,
                loading: false,
                news2: action.payload
            }

        case "API_ERROR":
            return {
                ...state,
                loading: false,
                error: true
            }

        case "SET_CATEGORY_NEWS":
            return {
                ...state,
                loading: false,
                newsCategory: action.payload
            }

        case "SET_SINGLE_NEWS":
            return {
                ...state,
                loading: false,
                singlePage: action.payload
            }

        case "SET_SEARCH_NEWS":
            return {
                ...state,
                loading: false,
                searchPage: action.payload
            }
    }
}

export default ProductReducer