import React from "react"
import { Post } from "../pages/posts"
export const usePost = (id: number | string) => {
    const [post, setPost] = React.useState<Post | undefined>()
    const [loading, setLoading] = React.useState<boolean>(false)
    
    const fetchPost = async (id: number | string ) => {
        setLoading(true)
        try {
            const response = await (await fetch(`/api/post/${id}`)).json()
            const post = response as Post 
            setLoading(false)
            setPost(post)
        } catch(e: unknown) {
            console.log(`Error Fetching Post id : ${id}`)
            console.log(e)
            setLoading(false)
            
        } 
    }

    React.useEffect(()=>{
        console.log(id)
     id && fetchPost(id)
    },[id])

    return {post, fetchPost, loading}
}