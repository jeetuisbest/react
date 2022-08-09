import React, { useState } from 'react';
import Header from './Header';
// import Posts from '../components/Posts';




function Compose() {


  const [title, setTitle] = useState(" ")
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
      title,
      author,
      topic,
      content
       }

      console.log(newPostItem)

      return newPostItem
   
  }



  return <div>
    <Header />
    <div className='posts'>
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
      <button onClick={data} className="btn btn-primary" type="submit" name="button">Publish</button>
    </div>
  </div>
}


export default Compose