import { styled } from "styled-components";
import BookItem from "./BookItem";
import { Book } from "../../models/book.model";

const dummyBook: Book = {
    id: 1,
    title: "Dummy Book",
    img: 5,
    category_id: 1,
    summary: "Dummy Summary",
    author: "Dummy Author",
    price: 10000,
    likes: 1,
    form: "paperback",
    isbn: "Dummy ISBN",
    detail: "Dummy Detail",
    pages: 100,
    contents: "Dummy Contents",
    pubDate: "2024-01-01"
};

function BooksList() {
    return (
        <BookListStyle>
            <BookItem book={dummyBook} />
        </BookListStyle>
    )
}

const BookListStyle = styled.div``;

export default BooksList;