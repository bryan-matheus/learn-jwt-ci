import AuthController from "@controllers/AuthController";
import { authenticateToken } from "@middlewares/Authenticate";
import { Router } from "express";

const routes = Router();

routes.post("/auth", authenticateToken, AuthController.store);

export default routes;
