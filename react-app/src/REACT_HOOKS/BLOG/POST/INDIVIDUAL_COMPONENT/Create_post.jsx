import React from 'react';

export default function CreatePost({username, setPosts}){
    function handleSubmit(e){
        e.preventDefault();
        const title = e.target.elements.title.value;
        const content = e.target.elements.content.value;
        const newPost ={ title, content, author: username};
        setPosts(posts => [newPost, ...posts]);
        e.target.reset();
    }
    return(
        <div >
            <h2><u>Create a Post</u></h2>
            <form onSubmit={handleSubmit}>
                <div>
                    Author : <b>{username}</b>
                </div>
                <div>
                    <label htmlFor="Create-title">Title : </label>
                    <input type="text" name='title' id='Create-title' />
                </div>
                <textarea name="content"/>
                <input type="submit" value='Create'/>
            </form>
        </div>
    );
}