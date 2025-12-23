import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { scrapeSubredditJson } from "../../API/scrapeSubredditJson";
import { getSubredditIcon } from "../../API/scrapeSubredditIcon";

export const fetchSubreddit = createAsyncThunk(
    "subreddit/fetchSubreddit",
    async (action) => {
        const { subreddit } = action;
        const data = await scrapeSubredditJson(subreddit);
        const iconUrl = await getSubredditIcon(subreddit);
        const postsWithIcon = data.map(post => ({ ...post, subredditIcon: iconUrl }));
        return postsWithIcon;
    }
);

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