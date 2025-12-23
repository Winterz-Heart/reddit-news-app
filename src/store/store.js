import { configureStore } from "@reduxjs/toolkit";
import subredditReducer from '../pages/Subreddit/SubredditSlice'

const store = configureStore({
    reducer: {
        subreddit: subredditReducer,
    }
})

export default store;