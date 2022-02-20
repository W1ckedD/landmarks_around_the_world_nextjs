// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Location } from '../../server';

export default async function handler(req, res) {
  const locations = await Location.findAll({});
  res.status(200).json({ locations });
}
