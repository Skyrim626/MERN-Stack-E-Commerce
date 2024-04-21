import {
  createSelector,
  createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const cartsAdapter = createEntityAdapter({})

const initialState = cartsAdapter.getInitialState()

export const cartsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
      getCarts: builder.query({
          query: () => '/carts',
          validateStatus: (response, result) => {
              return response.status === 200 && !result.isError
          },
          keepUnusedDataFor: 60,  
          transformResponse: responseData => {
            console.log("responseData:", responseData); // Testing Purposes
              const loadedCarts = responseData.map(cart => {
                  cart.id = cart._id
                  return cart
              });
              return cartsAdapter.setAll(initialState, loadedCarts)
          },
          providesTags: (result, error, arg) => {
              if (result?.ids) {
                  return [
                      { type: 'Cart', id: 'LIST' },
                      ...result.ids.map(id => ({ type: 'Cart', id }))
                  ]
              } else return [{ type: 'Cart', id: 'LIST' }]
          }
      }),
      addNewCart: builder.mutation({
        query: initialCartData => ({
          url: '/carts',
          method: 'POST',
          body: {
            ...initialCartData,
          }
        }),
        invalidatesTags: [
          { type: 'Cart', id: "LIST" }
        ]
      }),
      updateCart: builder.mutation({
        query: initialCartData => ({
          url: '/carts',
          method: 'PATCH',
          body: {
            ...initialCartData,
          }
        }),
        invalidatesTags: (result, error, arg) => [
          { type: 'Cart', id: arg.id }
        ]
      }),
      deleteCart: builder.mutation({
        query: ({ id }) => ({
          url: '/carts',
          method: 'DELETE',
          body: { id }
        }),
        invalidatesTags: (result, error, arg) => [
          { type: 'Cart', id: arg.id }
        ]
      }),
  }),
})

export const {
  useGetCartsQuery,
  useAddNewCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartsApiSlice

// returns the query result object
export const selectCartsResult = cartsApiSlice.endpoints.getCarts.select()

// creates memoized selector
const selectCartsData = createSelector(
  selectCartsResult,
  cartsResult => cartsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllCarts,
  selectById: selectCartById,
  selectIds: selectCartIds
  // Pass in a selector that returns the carts slice of state
} = cartsAdapter.getSelectors(state => selectCartsData(state) ?? initialState)