import { requestHandler } from "./http";
import { BookReviewItem, BookReviewItemWrite } from "@/models/book.model";

export const fetchBookReview = async (bookId: string) => {
    return await requestHandler<BookReviewItem[]>("get", `/reviews/${bookId}`);
};

export const addBookReview = async (bookId: string, data: BookReviewItemWrite) => {
    return await requestHandler<BookReviewItemWrite>("post", `/reviews/${bookId}`, data);
};