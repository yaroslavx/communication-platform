import { Router } from 'express';
import { prisma } from '../index.js';

const router = Router();

// get item
router.get('/', async (req, res, next) => {
  try {
    const items = (await prisma.item.findMany()).sort(
      (a, b) => a.created_at - b.created_at
    );
    res.status(200).json(items);
  } catch (e) {
    next(e);
  }
});

// create item
router.post('/', async (req, res, next) => {
  try {
    const newItem = await prisma.item.create({
      data: req.body,
    });
    res.status(201).json(newItem);
  } catch (e) {
    next(e);
  }
});

// update item
router.put('/:id', async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const updatedItem = await prisma.item.update({
      data: req.body,
      where: { id },
    });
    res.status(201).json(updatedItem);
  } catch (e) {
    next(e);
  }
});

// delete item
router.put('/:id', async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    await prisma.item.delete({
      where: { id },
    });
    res.sendStatus(201);
  } catch (e) {
    next(e);
  }
});

export default router;
