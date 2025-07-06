import express, { Router } from "express";
import { protect } from "../middleware/authMiddleware";
import {
  getUserData,
  storeRecentSearchedCities,
} from "../controllers/userController";

const userRouter = new Router();

userRouter.get("/", protect, getUserData);
userRouter.post("/store-recent-search", protect, storeRecentSearchedCities);

export default userRouter;
