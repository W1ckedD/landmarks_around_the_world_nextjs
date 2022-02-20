import { Location } from '../../../server';

export default async function (req, res) {
  try {
    if (req.method === 'GET') {
      const locations = await Location.findAll({});
      return res.status(200).json({ locations });
    } else if (req.method === 'POST') {
      console.log(request.body);
      return res.status(200).json({ mgs: 'success' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err.message);
  }
}
