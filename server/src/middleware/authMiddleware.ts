
import { Request, Response, NextFunction } from 'express';
import { firebaseAdmin } from '../config';

export const verifyFirebaseToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    try {
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
      req.user = decodedToken;
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
  }
  next();
};
