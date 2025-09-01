import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { HomeCategory, HomeData } from "../../types/HomeCategoryTypes";
import { homeCategories } from "../../data/HomeCategories";
import { api } from "../../config/Api";

// export const fetchHomePageData = createAsyncThunk<HomeData>(
//   "home/fetchHomePageData",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await api.get("/home-page");
//       console.log("home page", response.data);
//       return response.data;
//     } catch (error: any) {
//       const errorMessage =
//         error.response?.data?.message || error.message || "Failed to";
//       console.log("err", errorMessage, error);
//       return rejectWithValue(errorMessage);
//     }
//   }
// );

export const createHomeCategories = createAsyncThunk<HomeData, HomeCategory[]>(
  "home/createHomeCategories",
  async (homeCategories, { rejectWithValue }) => {
    try {
      console.log("Payload being sent:", { categories: homeCategories });
      const response = await api.post("/home/categories", homeCategories);
      console.log("home categories", response.data);
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || error.message || "failed";
      console.log("error", errorMessage, error);
      return rejectWithValue(errorMessage);
    }
  }
);

interface HomeState {
  homePageData: HomeData | null;
  homeCategories: HomeCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: HomeState = {
  homePageData: null,
  homeCategories: [],
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetchHomePageData cases
    // builder.addCase(fetchHomePageData.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // });
    // builder.addCase(
    //   fetchHomePageData.fulfilled,
    //   (state, action: PayloadAction<HomeData>) => {
    //     state.loading = false;
    //     state.homePageData = action.payload;
    //   }
    // );
    // builder.addCase(fetchHomePageData.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message || "Failed";
    // });

    // createHomeCategories cases
    builder.addCase(createHomeCategories.pending, (state) => {
      state.loading = true;
      state.homePageData = null;
    });
    builder.addCase(createHomeCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.homePageData = action.payload;
    });
    builder.addCase(createHomeCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed";
    });
  },
});

// const homeSlice = createSlice({
//   name: "home",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(createHomeCategories.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(createHomeCategories.fulfilled, (state, action) => {
//       state.loading = false;
//       state.homeCategories = action.payload.; // adjust if API returns differently
//     });
//     builder.addCase(createHomeCategories.rejected, (state, action) => {
//       state.loading = false;
//       state.error = (action.payload as string) || "Failed";
//     });
//   },
// });

export default homeSlice.reducer;
