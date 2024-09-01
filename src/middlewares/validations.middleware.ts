import { body, param } from 'express-validator';

export const userValidations = {
  create: [
    body('username').isString().notEmpty().trim(),
    body('email').isEmail().normalizeEmail(),
    body('password').isString().isLength({ min: 6 }),
    body('role').isIn(['superadmin', 'regular'])
  ],
  login: [
    body('email').isEmail().normalizeEmail(),
    body('password').isString()
  ]
};

export const commentValidations = {
  create: [
    body('content').isString().notEmpty().trim()
  ],
  update: [
    param('id').isMongoId(),
    body('content').isString().notEmpty().trim()
  ]
};

export const reactionValidations = {
  create: [
    param('commentId').isMongoId(),
    body('type').isIn(['like', 'love', 'disagree'])
  ]
};