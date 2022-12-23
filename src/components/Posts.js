
import React, { useState } from 'react';
import Post from './Post';
import postsArr from './postsArr';
import Compose from './Compose';


function PostItems(){

  const [posts , addPost] = useState([postsArr])
  const [title, setTitle] = useState("")
  const [topic, setTopic] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")

  function onChange(event) {
    switch (event.target.name) {
      case "postTitle":
        setTitle(event.target.value)
        break;

      case "postBody":
        setContent(event.target.value)
        break;

      case "topic":
        setTopic(event.target.value)
        break;

      case "author":
        setAuthor(event.target.value)
        break;

      default:
        break;
    }
  }

  function data(){
    let newPostItem = {
      key: postsArr.length + 1,
      title,
      author,
      topic,
      content
       }

       addPost((posts)=>{
        return [...posts , newPostItem]
       })

    postsArr.push(newPostItem)
   
  }

  console.log(postsArr)

  return <div>
<div className='posts'>  

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

        {postsArr.map((postItem , index)=>{
        return(<Post key={postItem.key} 
        id={postItem.key}
        title={postItem.title} 
        content={postItem.content.slice(0 , 400) + "...."} 
        topic={postItem.topic}
        author={postItem.author} />)})}
       
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

<Compose function1={onChange} function2={data} />

  </div>
  


    
}


export default PostItems