import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

/**
 * @description: function to compare hashed password against password
 * @param {String, String} password hashedPassword
 * @returns {Boolean}
 */
export const comparePasswords = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

/**
 * @description: function to hash password
 * @param {String} password hashedPassword
 * @returns {String}
 */
export const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

/**
 * @description: function to create token with user payload
 * @param {object} user
 * @returns {string} token
 */
export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );

  return token;
};

/**
 * @description: middleware function to protect routes from unauthorized users
 * @param {request, response}
 * @returns {string}
 */
export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401).json({ message: "not authorized!" });
    return;
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401).json({ message: "not authorized!" });
    return;
  }
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "not authorized!" });
    return;
  }
};
