import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "../../utils/constants";
export const cartsApi=createApi({
    reducerPath:'cartsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: (builder)=>({
        getCarts: builder.query({
            query: ()=> '/carts'
        }),
        getProducts: builder.query({
           query: ()=>'/products'
        }),
        addCart: builder.mutation({
            query: (newCart)=> ({
                url:'/carts',
                method: 'POST',
                body:newCart
            })
        })
    })
        
    
})
export const { useGetCartsQuery,useGetProductsQuery,useAddCartMutation } = cartsApi