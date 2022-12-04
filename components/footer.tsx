import React from "react";
import { Footer } from "flowbite-react";
import styles from '../styles/Footer.module.css'



export const BlogFooter: React.FC<{}> = () => {
    return (
        <Footer bgDark={true} container={true} className={styles.blogFooter}>
            <Footer.Copyright
                href="#"
                by="Anonymus Blog™"
                year={2022}
                className='text-white'
            />
            <Footer.LinkGroup>
                <Footer.Link href="/" >
                    <span style={{color: 'white'}}>Home</span>
                </Footer.Link>
                <Footer.Link href="/posts">
                    <span style={{color: 'white'}}>Blog</span>
                </Footer.Link>
                <Footer.Link href="/about">
                    <span style={{color: 'white'}}>About</span>
                </Footer.Link>
                <Footer.Link href="/contact">
                    <span style={{color: 'white'}}>Contact</span>
                </Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    )
}