
import {createUser} from "../controllers/multystepform-controller.js";
import express from "express";

const multystepformRouter = express.Router();

multystepformRouter.post("/register",createUser);

export default multystepformRouter;