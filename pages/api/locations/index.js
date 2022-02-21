import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req, res) {
  if (req.method === 'GET') {
    try {
      const data = await prisma.location.findMany({});
      res.status(200).json({ data });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else if (req.method === 'POST') {
    try {
      const data = await prisma.location.create({ data: req.body });
      res.status(201).json({ msg: 'Success' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
  }
}
