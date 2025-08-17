import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; // Import createAsyncThunk for handling asynchronous actions
import { api } from "../../config/Api"; // Assuming API configuration is imported from this path
import { Product } from "../../types/ProductTypes";
//import { Product } from "../types/ProductTypes"; // Import the Product interface from ProductTypes.ts

export const fetchSellerProducts = createAsyncThunk<Product[], any>(
  // Action type string for this thunk
  "/sellerProduct/fetchSellerProducts",
  // Async payload creator function
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get("/sellers/products", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = response.data;
      console.log("seller products", data);
      return data;
    } catch (error) {
      console.log("error --- ", error);
      throw error;
    }
  }
);
export const createProduct = createAsyncThunk<
  Product,
  { request: any; jwt: string | null }
>("/sellerProduct/createProduct", async (args, { rejectWithValue }) => {
  const { request, jwt } = args;

  try {
    const response = await api.post("/sellers/products", request, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("product created", response.data);
    return response.data; // Return the data, which will be the payload of the fulfilled action
  } catch (error) {
    // Log any errors that occur during the API call
    console.log("error --- ", error);
    throw error; // This allows the extraReducers to handle the error state
  }
});
interface SellerProductState {
  products: Product[]; // Array to hold the seller's products, typed as Product[]
  loading: boolean; // Boolean to indicate if products are currently being loaded
  error: string | null | undefined; // String to hold any error message during loading, or null if no error
}

const initialState: SellerProductState = {
  products: [], // Initially an empty array of products
  loading: false, // Initially not loading
  error: null, // Initially no error
};
const sellerProductsSlice = createSlice({
  name: "sellerProduct",
  initialState,
  reducers: {}, // Name of the slice, used as a prefix for action types (e.g., "sellerProduct/pending")
  extraReducers: (builder) => {
    builder.addCase(fetchSellerProducts.pending, (state) => {
      state.loading = true; // Set loading to true to indicate data fetching is in progress
    });

    builder.addCase(fetchSellerProducts.fulfilled, (state, action) => {
      state.loading = false; // Set loading to false as the data has been fetched
      state.products = action.payload; // Update the products array with the fetched data
    });
    builder.addCase(fetchSellerProducts.rejected, (state, action) => {
      state.loading = false; // Set loading to false as the request has completed with an error
      state.error = action.error.message || "Failed to fetch seller products.";
    });

    builder.addCase(createProduct.pending, (state) => {
      state.loading = true; // Set loading to true to indicate data fetching is in progress
    });

    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false; // Set loading to false as the data has been fetched
      state.products.push(action.payload); // Update the products array with the fetched data
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false; // Set loading to false as the request has completed with an error
      state.error = action.error.message || "Failed to fetch seller products.";
    });
  },
});

export default sellerProductsSlice.reducer;
