import { useRouter } from 'next/router'
import prisma from '../../server/db/prisma';
import { GetStaticProps } from 'next';
import React from 'react';
import { usePost } from '../../hooks';

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  const {post, fetchPost, loading} = usePost(id as string)
  return (
  <>
    <h1>{post?.title}</h1>
    <p>{post?.body}</p>
  </>
  )
}

export default Post