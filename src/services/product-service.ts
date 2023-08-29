import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IProduct } from "../store/models/IProduct"
import { BASE_URL } from "../utils/http-config"

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        fetchAllProducts: build.query<IProduct[], ''>({
            query: () => ({
                url: '/products'
            })
        }),
        fetchProduct: build.query<IProduct, number>({
            query: (id) => ({
                url: '/product?=' + id,
            })
        })
    })
})

