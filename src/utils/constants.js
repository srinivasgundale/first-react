const BASE_URL = "https://dummyjson.com"
export const LOGIN_ENDPOINT = BASE_URL+"/auth/login"
export const QUOTES_ENDPOINT = BASE_URL+"/quotes/random"
export const PRODUCTS_ENDPOINT = BASE_URL+"/products?delay=2000"
export const PROFILE_ENDPOINT = BASE_URL+"/auth/me"
export const PRODUCT_ENDPOINT = (ID) => {
    return BASE_URL+"/products/"+ID
}