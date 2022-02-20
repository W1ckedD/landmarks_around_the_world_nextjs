import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export default async function (req, res) {
  try {
    const data = await client.location.findMany({});
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
}
