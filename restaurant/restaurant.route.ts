import { Router } from "express";
import { ADD_NEW_RESTAURANT } from "./restaurant.controller";

const restaurantRouter = Router()

restaurantRouter.post("/", ADD_NEW_RESTAURANT)
