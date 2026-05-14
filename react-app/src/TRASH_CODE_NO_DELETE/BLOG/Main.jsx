import React, { useState, useReducer } from 'react';
import UserBar from './USER/UserBar.jsx';
import CreatePost from './POST/INDIVIDUAL_COMPONENT/Create_post.jsx';
import PostList from './POST/PostList.jsx';
import { PostReducer } from './POST/INDIVIDUAL_COMPONENT/PostReducer.js';

export default function Main(){
    const defaultPosts=[
        {
            title : 'React Hooks',
            content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, temporibus deleniti corporis eos voluptate autem laboriosam neque aspernatur numquam dicta quo iste blanditiis excepturi expedita sequi minima, facere fuga rem.',
            author : 'Diensh Katta'
        },
        {
            title : 'Rendering Lists',
            content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, temporibus deleniti corporis eos voluptate autem laboriosam neque aspernatur numquam dicta quo iste blanditiis excepturi expedita sequi minima, facere fuga rem.',
            author : 'Dinesh Katta'
        },
        {
            title : 'Conditional Rendering',
            content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, temporibus deleniti corporis eos voluptate autem laboriosam neque aspernatur numquam dicta quo iste blanditiis excepturi expedita sequi minima, facere fuga rem.',
            author : 'Dinesh Katta'
        },
    ]
    
        const [username, setUserName] = useState('');
        const [posts,  dispatch] = useReducer(PostReducer, defaultPosts)
    return (
        <>
            <UserBar username={username} setUserName={setUserName}/>
            <br />
            {username && <CreatePost username={username} dispatch={dispatch}/>}
            <br />
            {username && <PostList posts={posts}/>}
        </>
    );
}