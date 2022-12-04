import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import prisma from '../server/db/prisma';
import { GetStaticProps } from 'next';
import Router from 'next/router'
import { Button } from "flowbite-react";

export interface Post {
  id: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  published: boolean;
  title: string;   
  author: string;   
  body:string;      
}

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true }
  }) as Array<Post>;
  const converted: Array<Post> = feed.map(fe => {
    return {
      ...fe,
      createdAt: fe.createdAt.toString(),
      updatedAt: fe.updatedAt.toString(),
    }
  })
  return {
    props: { feeds: converted },
    revalidate: 10,
  };
};

interface PostsProps {
  feeds: Post[]
}

export default function Posts({ feeds}: PostsProps) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Anonymus Blog</title>
        <meta name="description" content="Anonymus Blog" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Anonymus Blog , Post anything 
        </h1>
        <Button color="success" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault()
            Router.push('/addPost')
        }}>
            Add a Post
        </Button>
        <div className={styles.grid}>
          {feeds.map((x, index: number) => {
            return (
            <a
              href={`/post/${x.id}`}
              target=""
              rel="noopener noreferrer"
              className={styles.card}
              key={index}
            >
              {x.title}
              <br/>
              <span>Author:  <span className={styles.author}>{x.author || 'anonymous'}</span></span>
            </a>
            )
          })
        }
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
