import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button} from 'flowbite-react'
import  Router  from 'next/router'


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Anonymus Blog</title>
        <meta name="description" content="Anonymus Blog" />
      </Head>
       
      <main className={styles.main}>
        <h1 style={{fontSize: '60px'}}>Welcome to Anonymus Blog</h1>
        <p style={{marginBottom:'30px'}}>
          Post an Article 
          But beware only admin can edit or delete posts

        </p>
        <Button onClick={() => {
          Router.push('/posts')
        }}>
          Go to Blog Posts
        </Button>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
