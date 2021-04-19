import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export default {
  store: (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user = {
      username,
    };

    if (username === "admin" && password === "123456") {
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);

      return res
        .status(200)
        .json({ message: "Sign in successful!", token: accessToken });
    } else {
      return res.status(400).json({
        message: "Please, enter  a valid username/ password!",
      });
    }
  },
};
