import jwt from "jsonwebtoken";
import bycript from "bcrypt";
import { Request, Response } from "express";

import { User } from "../models/user";
import { IUser } from "../models/interface/User";

export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.find({
      $or: [{ username: username }, { email: email }],
    });

    if (user.length) {
      res.status(409).json("User already exists");
    }

    bycript.genSalt(
      Number(process.env.SALT_ROUNDS as string),
      async (err: Error | undefined, salt: string) => {
        if (err) {
          console.error(err);
          res.status(400).send("Something went wrong");
        }
        bycript.hash(password, salt, async (err, hashedPassword) => {
          if (err) {
            console.error(err);
            res.status(400).send("Something went wrong");
          } else {
            User.create({
              username: username,
              email: email,
              password: hashedPassword,
            });
            res.status(200).json({ message: "User created successfully" });
          }
        });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(409).json({ error: "User already exists" });
  }
};

export const loginRoute = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email }).exec();

  if (!user) return res.status(404).send("Invalid email or password");

  bycript.compare(password, user.password, (err, result) => {
    if (result) {
      const token = jwt.sign(
        { email: user.email, username: user.username },
        process.env.SECRET_TOKEN as string,
        {
          expiresIn: "1h",
        }
      );

      res.cookie(process.env.TOKEN_NAME as string, token, {
        httpOnly: true,
      });
      res.status(200).send({ message: "Authentification success.", token });
    } else {
      res.status(401).send({ message: "Invalid credentials" });
    }
  });
};
