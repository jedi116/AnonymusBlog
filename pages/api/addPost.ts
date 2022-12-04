import { NextApiRequest, NextApiResponse } from "next"
import { Post } from "../posts"
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const body = req.body as Post 
        const post = await prisma.post.create({
            data: body
          })
        res.status(200).json(post)
    } else {
        res.status(405)
    }
    
}