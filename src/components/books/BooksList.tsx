import { styled } from "styled-components";
import BookItem from "./BookItem";
import { Book } from "../../models/book.model";

interface Props {
    books: Book[];
}

function BooksList({ books }: Props) {
    return (
        <BookListStyle>
            {books?.map((item) => (
                    <BookItem key={item.id} book={item} />
            ))}
        </BookListStyle>
    )
}

const BookListStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
`;

export default BooksList;