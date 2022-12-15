import { Router } from 'express';
import itemRoutes from './item.router.js';

const router = Router();

router.use('/item', itemRoutes);

export default router;
