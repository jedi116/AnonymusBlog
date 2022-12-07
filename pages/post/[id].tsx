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
  <div 
    style={{
        display:'flex',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        height:'auto'
    }}
  >
    <h1
        style={{
            fontSize: '35px',
            marginTop: '200px',
            fontStyle: 'oblique',
            textDecoration: 'underline'
        }}
    >{post?.title}</h1>
    <p
        style={{
            padding: '50px'
        }}
    >{post?.body}</p>
  </div>
  )
}

export default Post