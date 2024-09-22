import { Router } from "express";
import { GET_MENU_BY_ID } from "./menu.controller";

const menuRouter = Router();

menuRouter.get("/:id", GET_MENU_BY_ID)


export default menuRouter