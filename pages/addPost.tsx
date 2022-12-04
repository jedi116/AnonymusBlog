import React, { ReactEventHandler } from "react";
import {TextInput, Textarea, Button} from "flowbite-react";
import styles from '../styles/AddPost.module.css'



const AddPost : React.FC<{}> = () => {
    const onFormSubmit = (e: React.SyntheticEvent) =>{
        e.preventDefault()

    }
    return (
        <div className={styles.container}>
            <form onSubmit={onFormSubmit}>
                Title <TextInput />
                <br />
                author <TextInput />
                <br />
                Content<Textarea />
                <br/>
                <Button onClick={onFormSubmit}>
                    Post
                </Button>
            </form>
            
        </div>
    )
}

export default AddPost