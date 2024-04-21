import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from "../../app/api/apiSlice";

const productsAdapter = createEntityAdapter({});

const initialState = productsAdapter.getInitialState();

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => '/products',
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      keepUnusedDataFor: 5,
      transformResponse: responseData => {
        const loadedProducts = responseData.map(product => {
          product.id = product._id
          return product
        });
        return productsAdapter.setAll(initialState, loadedProducts);
      },
      providesTags: (result, error, arg) => {
        if(result?.ids) {
          return [
            { type: 'Product', id: 'LIST' },
            ...result.ids.map(id => ({ type: 'Product', id }))
          ]
        } else return [{ type: 'Product', id: 'LIST' }]
      }
    })
  })
});

export const {
  useGetProductsQuery,
} = productsApiSlice

// returns the query result object
export const selectProductsResult = productsApiSlice.endpoints.getProducts.select();

// creates memoized selector
const selectProductsData = createSelector(
  selectProductsResult,
  productsResult => productsResult.data // normalized state object with ids & entities
);

// getSelectors create these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds
  // Pass in a selector that returns the users slice of state
} = productsAdapter.getSelectors(state => selectProductsData(state) ?? initialState);

