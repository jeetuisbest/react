import React, { useState, useEffect } from "react";
import { getJsonData } from "../../commonConfig/utils";
import { Link } from "react-router-dom";
// import Post from '../Post';
import SectionPost from "../SectionPost"
// import postsArr from './postsArr';
// import Compose from './Compose';


function PostItems() {

    const [techPostsArr, setPosts] = useState([])
    const [title, setTitle] = useState("")

    useEffect(() => {
        // wrap your async call here
        const loadData = async () => {
            // setUsersLoading(true);
            // console.log()
            let currrentTitle = window.location.pathname.split('/')[1]

            currrentTitle = currrentTitle.toUpperCase()
            // console.log("hello")
            let posts = await getJsonData('http://localhost:9000/api/posts/tech')
            // let result = posts['tech']
            setPosts(posts)
            setTitle(currrentTitle)
        };

        loadData();
    }, []);

    // const [posts, addPost] = useState([postsArr])
    // const [title, setTitle] = useState("")
    // const [topic, setTopic] = useState("")
    // const [content, setContent] = useState("")
    // const [author, setAuthor] = useState("")

    // function onChange(event) {
    //   switch (event.target.name) {
    //     case "postTitle":
    //       setTitle(event.target.value)
    //       break;

    //     case "postBody":
    //       setContent(event.target.value)
    //       break;

    //     case "topic":
    //       setTopic(event.target.value)
    //       break;

    //     case "author":
    //       setAuthor(event.target.value)
    //       break;

    //     default:
    //       break;
    //   }
    // }

    // function data() {
    //   let newPostItem = {
    //     key: postsArr.length + 1,
    //     title,
    //     author,
    //     topic,
    //     content
    //   }

    //   addPost((posts) => {
    //     return [...posts, newPostItem]
    //   })

    //   postsArr.push(newPostItem)

    // }

    // console.log(postsArr)
    // #fffacd lemonchiffon

    return <div className="border-2 border-black mr-[28%] pl-[2%] pt-[3%]">
        <h1 className="text-5xl mx-28 py-2 border-b-4 border-black text-center font-bold"> {title} NEWS</h1>
        <div className='py-4'>
            {/* { !postId ? postsArr.map((postItem , index)=>{
        return(<Post key={postItem.key} 
        id={postItem.key}
        title={postItem.title}
        content={postItem.content.slice(0 , 400) + "...."} 
        topic={postItem.topic}
        author={postItem.author} />) 
    }) : postsArr.map((postItem , index)=>{

        return postId==index+1 ? <Post key={postItem.key} 
        id={postItem.key}
        title={postItem.title} 
        content={postItem.content} 
        topic={postItem.topic}
        author={postItem.author} /> : null 
        }
        )
        } */}
            {techPostsArr.map((postItem, index) => {
                {/* if (index < 4) { */ }
                return (<SectionPost key={postItem.key}
                    id={postItem.key}
                    img={postItem.img}
                    title={postItem.title}
                    content={postItem.content.slice(0, 400) + "...."}
                    category={postItem.category}
                    author={postItem.author}
                    date={postItem.publish_date}

                />)
                {/* } */ }
            })
            }

        </div>

        {/* <div className='compose'>
  <h1>Compose</h1>
  <div className="form-group">
    <label>Title</label>
    <input onChange={onChange} className="form-control" type="text" name="postTitle" value={title} />
    <label>Post</label>
    <textarea onChange={onChange} className="form-control" name="postBody" rows="5" cols="30" value={content}></textarea>
    <label>Topic</label>
    <input onChange={onChange} className="form-control" type="text" name="topic" value={topic} />
    <label>author</label>
    <input onChange={onChange} className="form-control" type="text" name="author" value={author} />
  </div>
  <Link onClick={data} className="text-link" to={`/`}> <button className="btn btn-primary" type="submit" name="button">Publish</button></Link>
</div> */}

        {/* <Compose function1={onChange} function2={data} /> */}

    </div>




}


export default PostItems