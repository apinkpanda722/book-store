import { setupWorker } from "msw/browser";
import { addReview, reviewsById } from "@/mock/review";

const handlers = [reviewsById, addReview];

export const worker = setupWorker(...handlers);