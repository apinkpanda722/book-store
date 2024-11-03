import { httpClient } from "./http";

interface AddCartParams {
    book_id: number;
    num: number;
}

export const addCart = async(params: AddCartParams) => {
    const response = await httpClient.post("/carts", params);
    return response.data;
}
