import { setupWorker } from "msw/browser";
import { addReview, reviewForMain, reviewsById } from "@/mock/review";

const handlers = [reviewsById, addReview, reviewForMain];

export const worker = setupWorker(...handlers);