import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASEURL } from "../../utils/constants";
export const cartsApi=createApi({
    reducerPath:'cartsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: (builder)=>({
        getCarts: builder.query({
            query: ()=> '/carts'
        })
    })
        
    
})
export const { useGetCartsQuery } = cartsApi