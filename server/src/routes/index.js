import { Router } from 'express';
import classesRouter from './classes';
import authRouter from './auth';
import usersRouter from './users';
import contactRouter from './contactform';
import stripeDonationsRouter from './stripeDonations';
import profileRouter from './profile';
import cookbookRouter from './cookbook/cookbook';
import cookbookIngredientsRouter from './cookbook/cookbook_ingredients';
import cookbookDirectionsRouter from './cookbook/cookbook_directions';
import cookbookCommentsRouter from './cookbook/cookbook_comments';

import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';
import WorkRequestRouter from './workrequest';



let router = Router();

/* 
router.use(tokenMiddleware);
router.use(isLoggedIn);
 */




router.use('/auth', authRouter);
router.use('/cookbook', cookbookRouter);
router.use('/cookbook-directions', cookbookDirectionsRouter);
router.use('/cookbook-ingredients', cookbookIngredientsRouter);
router.use('/cookbook-comments', cookbookCommentsRouter);
router.use('/donate', stripeDonationsRouter);
router.use('/contact', contactRouter);
router.use('/users', usersRouter);
router.use('/classes', classesRouter);
router.use('/profile', profileRouter);
router.use('/workrequest', WorkRequestRouter);

router.route('*')
.post(tokenMiddleware, isLoggedIn)
.put(tokenMiddleware, isLoggedIn)
.delete(tokenMiddleware, isLoggedIn)
.get(tokenMiddleware, isLoggedIn);


export default router;