import express from "express";
import {logIn,signUp} from "../controllers/customersController.js";
const customerRouter = express.Router();
customerRouter.post('/signUp',signUp)
customerRouter.post('/logIn',logIn)
export default customerRouter;