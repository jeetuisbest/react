import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import postsArr from './postsArr';
import ShowSinglePost from './ShowSinglePost.js'
import DarkMode from './DarkMode';
import { getJsonData } from '../commonConfig/utils';
import Footer from "./Footer";

function SinglePost() {

    let postId = window.location.pathname.split('-').pop()
    let category = window.location.pathname.split('/')[2]
    // console.log("postId", postId)
    // console.log("category", category)
    // const [postAvailable, setPostsAvailable] = useState(false)
    // const [currentPost, setPost] = useState("")

    // if (!postAvailable) {
    //     renderPosts()

    //     async function renderPosts() {
    //         try {
    // let url = `http://localhost:9000/api/posts/${category}/${postId}`
    // console.log(url)
    // let post = await getJsonData(url)
    // // posts = posts['latest_updates']
    // setPost(post)
    //             setPostsAvailable(true)
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }


    // }

    const [currentPost, setPost] = useState([])

    useEffect(() => {
        // wrap your async call here
        const loadData = async () => {
            // setUsersLoading(true);
            let url = `http://localhost:9000/api/posts/${category}/${postId}`
            console.log(url)
            let post = await getJsonData(url)

            console.log("post", post)
            // posts = posts['latest_updates']
            setPost(post)
        };

        loadData();
    }, []);



    // console.log("currentPost", currentPost)
    // currentPost = post

    // console.log("currentrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", currentPost)
    // postsArr.forEach((post) => {
    //     if (post.key == postId) {
    //         currentPost = post
    //         // console.log("currentPost :", currentPost);
    //     }

    // })

    console.log("currentPost", currentPost)

    return <div className='SinglePost'>
        <Header />
        {/* <DarkMode /> */}
        <ShowSinglePost
            key={currentPost?.key}
            id={currentPost?.key}
            title={currentPost?.title}
            content={currentPost?.content}
            category={currentPost?.category}
            img={currentPost?.img}
            author={currentPost?.author}
            date={currentPost?.publish_date}
        />

        <Footer />

    </div>
}

export default SinglePost;