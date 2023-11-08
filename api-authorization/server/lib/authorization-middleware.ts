import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  /* your code here */

  const authHeader = req.get('Authorization');

  if (!authHeader) {
    throw new ClientError(401, 'Authentication header required');
  }

  const token = authHeader.split('Bearer ')[1];

  if (!token) {
    throw new ClientError(401, 'Authentication token required');
  }
  const secretkey = process.env.TOKEN_SECRET;
  const decoded = jwt.verify(token, secretkey ?? '');
  req.user = decoded as Request['user'];
  console.log(decoded);

  next();
}

/*
 * Get the 'Authorization' header from the request.
 * Parse the token from the header; e.g., auth.split('Bearer ')[1]
 * If no header or no token is provided,
 *   throw a 401 error with the message 'authentication required'
 * Use jwt.verify() to verify the authenticity of the token and extract its payload.
 * Assign the extracted payload to the user property of the req object.
 * Call next() (with no arguments) to let Express know to advance to its next route or middleware.
 *
 * References:
 * https://expressjs.com/en/4x/api.html#req.get
 * https://nodejs.org/api/http.html#http_message_headers
 * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */