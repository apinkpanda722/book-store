import { setupWorker } from "msw/browser";
import { addReview, reviewForMain, reviewsById } from "@/mock/review";
import { bestBooks } from "@/mock/books";
import { banners } from "@/mock/banner";

const handlers = [reviewsById, addReview, reviewForMain, bestBooks, banners];

export const worker = setupWorker(...handlers);