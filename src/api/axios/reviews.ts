"use client";

import { Review } from "@/lib/types/review.types";
import api from ".";

export const addReview = async (data: Review) =>
  await api.post(`/api/reviews`, data);

export const updateReviewStatus = async (id: number, status?: number) =>
  await api.patch(`/api/review/${id}`, { status });
