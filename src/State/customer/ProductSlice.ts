import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; // Import createAsyncThunk for handling asynchronous actions
import { api } from "../../config/Api";
import { Product } from "../../types/ProductTypes";
import { stat } from "fs";
import { act } from "react";

//const API_URL = "http://localhost:8000"; // Replace with your actual API base URL
const API_URL = "/products";

export const fetchProductById = createAsyncThunk<Product, number>(
  "products/fetchProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/${productId}`);
      const data = response.data;
      console.log("data:", data);
      return data;
    } catch (error: any) {
      console.log("error:", error);
      return rejectWithValue(error.message || "An unknown error occurred");
    }
  }
);

export const searchProduct = createAsyncThunk(
  "products/searchProduct",
  async (query, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/search`, {
        params: {
          query,
        },
      });
      const data = response.data;
      console.log("search product data:", data);
      return data;
    } catch (error: any) {
      console.log("error: ", error);
      return rejectWithValue(error.message || "An unknown error occurred");
    }
  }
);
export const fetchAllProducts = createAsyncThunk<any, any>(
  "products/fetchAllProducts",
  async (params, { rejectWithValue }) => {
    try {
      //  const response = await api.get(`${API_URL}`, {
      const response = await api.get(`${API_URL}`, {
        params: {
          ...params,
          pageNumber: params.pageNumber || 0,
        },
      });

      const data = response.data;
      console.log("All product data:", data); // Return the data, which will be the payload of the fulfilled action
      return data;
    } catch (error: any) {
      console.log("error:", error);
      return rejectWithValue(error.message || "An unknown error occurred");
    }
  }
);
interface ProductState {
  product: Product | null; // Holds a single product, or null if no product is selected/fetched
  products: Product[]; // Holds an array of products (e.g., for search results or listings)
  totalPages: number; // Total number of pages for paginated product lists
  loading: boolean; // Indicates if data is currently being fetched
  error: string | null | undefined | any; // Stores any error message, or null/undefined if no error
  searchProduct: Product[]; // Holds an array of products specifically from a search operation
}

const initialState: ProductState = {
  product: null,
  products: [],
  totalPages: 0,
  loading: false,
  error: null,
  searchProduct: [],
};
/*
const productSlice = createSlice({
  name: "products", // Corrected name to "products" as per screenshot
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload; // Set the fetched product
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to fetch product.";
      });
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        //state.loading = false;
        state.products = action.payload.products || []; // <-- ensure it's an array
        // state.totalPages = action.payload.totalPages || 0;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to fetch product.";
      });

    builder
      .addCase(searchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; // Set the fetched product
      })
      .addCase(searchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to fetch product.";
      });
  },
});
*/

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.content || []; // put list into products
      state.totalPages = action.payload.totalPages || 0;
    });

    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(searchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(searchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;
