import React, { ReactEventHandler } from "react";
import {TextInput, Textarea, Button} from "flowbite-react";
import styles from '../styles/AddPost.module.css'
import {Post} from './posts'
import Router from 'next/router'

interface AddPostFormData {
    title: string;
    author: string;
    content: string;
}


const AddPost : React.FC<{}> = () => {
    const [formData, setFormData] = React.useState<Partial<AddPostFormData>>({})
    const onFormSubmit = (e: React.SyntheticEvent) =>{
        e.preventDefault()
        if (formData.title?.length === 0 || formData.content?.length === 0 || !formData.title || !formData.content ) {
            window.alert('please enter values to title and content before pressing "Post"')
            return
        }
        insertPost(formData)
    }
    const insertPost = async (data: Partial<AddPostFormData>) => {
        try {
            const post: Post  = {
                title: data.title as string,
                author: data.author as string || '',
                body: data.content as string,
                createdAt: new Date(),
                published: true,
                updatedAt: new Date()
            }
            console.log(post)
            const response = await fetch('/api/addPost',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            })
            const responseData = (await response.json()) as Post
            Router.push(`/post/${responseData.id}`)
        } catch (error :any) {
            console.log(error)
            window.Error('Failed to Post your Content')
        }
    }
    const formInputsOnChange = (type: string, value: string) => {
        if (type ==='title') setFormData({...formData, title: value})
        if (type ==='author') setFormData({...formData, author: value})
        if (type ==='content') setFormData({...formData, content: value})
    }
    return (
        <div className={styles.container}>
            <form onSubmit={onFormSubmit}>
                Title <TextInput
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        e.preventDefault()
                        formInputsOnChange('title', e.currentTarget.value)
                    }}
                />
                <br />
                Author <TextInput 
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        e.preventDefault()
                        formInputsOnChange('author', e.currentTarget.value)
                    }}
                />
                <br />
                Content<Textarea 
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        e.preventDefault()
                        formInputsOnChange('content', e.currentTarget.value)
                    }}
                />
                <br/>
                <Button onClick={onFormSubmit}>
                    Post
                </Button>
            </form>
            
        </div>
    )
}

export default AddPost