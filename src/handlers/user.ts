import prisma from "../db";
import { hashPassword, createJWT, comparePasswords } from "../modules/auth";

// Create user
export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
    },
  });

  const token = createJWT(user);
  res.status(201).json({ token });
};

// Sign in
export const signIn = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  const isValid = comparePasswords(req.body.password, user.password);

  if (!isValid) {
    return res.status(401).json({ message: "Invalid credentials!" });
  }

  const token = createJWT(user);
  res.status(200).json({ token });
};
