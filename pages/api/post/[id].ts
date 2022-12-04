import { NextApiRequest, NextApiResponse } from "next"
import { Post } from "../../posts";
import prisma from "../../../server/db/prisma";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { id } = req.query
    const ID = typeof id === 'string' ? parseInt(id) : 0
    const feed = await prisma.post.findUnique({
        where: { id: ID }
      }) as Post
      const converted:Post = {
        ...feed,
        createdAt: feed?.createdAt.toString(),
        updatedAt: feed?.updatedAt.toString(),
      }
    res.json(converted)
    } catch (err: any) {
        res.status(500).json({
            error: err.message
        })
    }
  }