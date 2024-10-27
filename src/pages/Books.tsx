import { styled } from "styled-components";
import Title from "../components/common/Title";
import BooksFilter from "../components/books/BooksFilter";
import BooksList from "../components/books/BooksList";
import BooksEmpty from "../components/books/BooksEmpty";
import Pagination from "../components/books/Pagination";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";


function Books() {
    return (
        <>
            <Title size="large">도서 검색 결과</Title>
            <BookStyle>
                <BooksFilter />
                <BooksViewSwitcher />
                <BooksList />
                <BooksEmpty />
                <Pagination />
            </BookStyle>
        </>
    )
}

const BookStyle = styled.div``;

export default Books;