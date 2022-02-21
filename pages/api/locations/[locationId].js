import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req, res) {
  const { locationId } = req.query;
  if (req.method === 'GET') {
    const location = await prisma.location.findUnique({
      where: { id: +locationId },
    });
    res.status(200).json({ location });
  } else if (req.method === 'PUT') {
    const location = await prisma.location.update({
      where: { id: +locationId },
      data: req.body,
    });
    res.status(200).json({ location });
  } else if (req.method === 'DELETE') {
    const location = await prisma.location.delete({
      where: { id: +locationId },
    });
    res.status(200).json({ location });
  }
}
