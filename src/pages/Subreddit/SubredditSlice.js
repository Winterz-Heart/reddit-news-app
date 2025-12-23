import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { scrapeSubredditJson } from "../../API/scrapeSubredditJson";

export const fetchSubreddit = createAsyncThunk(
    "subreddit/fetchSubreddit",
    async (action) => {
        const { subreddit } = action
        const data = await scrapeSubredditJson(subreddit)
        return data
    }
)

const subredditSlice = createSlice({
    name: "subreddit",
    initialState: {
        status: "idle",
        errors: "",
        posts: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubreddit.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchSubreddit.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.status = "idle";
            })
        .addCase(fetchSubreddit.rejected, (state) => {
            state.errors = "request failed";
            state.status = "idle";
        })
    }
});

export const selectSubreddit = (state) => state.subreddit;
export default subredditSlice.reducer;