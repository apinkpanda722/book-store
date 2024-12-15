import { http, HttpResponse } from "msw";
import { Book } from "@/models/book.model";
import { fakerKO as faker } from "@faker-js/faker";

const bestBooksData: Book[] = Array.from({length: 10}).map((item, index) => ({
    id: index,
    title: faker.lorem.sentence(),
    img: faker.helpers.rangeToNumber({ min: 100, max: 200}),
    category_id: faker.helpers.rangeToNumber({ min: 0, max: 200}),
    form: "종이책",
    isbn: faker.string.numeric(13),
    summary: faker.lorem.paragraph(),
    detail: faker.lorem.paragraph(),
    author: faker.person.firstName(),
    pages: faker.helpers.rangeToNumber({ min: 100, max: 500}),
    contents: faker.lorem.paragraph(),
    price: faker.helpers.rangeToNumber({ min: 10000, max: 50000}),
    likes: faker.helpers.rangeToNumber({ min: 0, max: 100}),
    pubDate: faker.date.past().toISOString()
}));

export const bestBooks = http.get("http://localhost:8080/books/best", () => {
    return HttpResponse.json(bestBooksData, {
        status: 200,
    });
});