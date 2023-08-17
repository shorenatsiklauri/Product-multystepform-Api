
import {createUser , login} from "../controllers/multystepform-controller.js";
 
import express from "express";

const multystepformRouter = express.Router();

multystepformRouter.post("/register",createUser);
multystepformRouter.post("/login", login)

export default multystepformRouter;