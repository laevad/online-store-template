import {ITEM_PER_PAGE} from "../utils/constants";

export const getProductList = async (page) =>{
    const response = await fetch(`https://fakestoreapi.com/products?limit=${ITEM_PER_PAGE}&page=${page}`);
    const total = response.headers.get('x-total-count');
    const products = await response.json();
    return {products, total};
}