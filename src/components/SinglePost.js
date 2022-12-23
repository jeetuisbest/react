
import React from 'react';
import Header from '../components/Header';
import postsArr from './postsArr';
import Post from './Post';
import DarkMode from './DarkMode';

function SinglePost() {

    var postId = window.location.pathname.split('-').pop()
    console.log("postId", postId)
    let currentPost
    postsArr.forEach((post) => {
        if (post.key == postId) {
            currentPost = post
            console.log("currentPost :", currentPost);
        }

    })

    return <div className='SinglePost'>
        <Header />
        <DarkMode />
        <Post
            key={currentPost?.key}
            id={currentPost?.key}
            title={currentPost?.title}
            content={currentPost?.content}
            topic={currentPost?.topic}
            author={currentPost?.author} />
    </div>
}

export default SinglePost;