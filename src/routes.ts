import AuthController from "@controllers/AuthController";
import { Router } from "express";

const routes = Router();

routes.post("/auth", AuthController.store);

export default routes;
