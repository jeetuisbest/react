import React, { useState } from "react";
// import Header from './Header';
// import Posts from '../components/Posts';


import { postJsonData } from "../commonConfig/utils";




function Compose() {

  const [title, setTitle] = useState("")
  const [topic, setTopic] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("tech")
  const [imgPath, setImagePath] = useState("")
  const [author, setAuthor] = useState("")
  const [file, setFile] = useState(null);

  function dataInput(event) {
    console.log("event.target.name", event.target.name)
    switch (event.target.name) {
      case "postTitle":
        setTitle(event.target.value)
        break;

      case "content":
        setContent(event.target.value)
        break;

      case "topic":
        setTopic(event.target.value)
        break;

      case "category":
        setCategory(event.target.value)
        break;

      case "imgName":
        setImagePath(`http://localhost:9000/images/${event.target.value}`)
        break;

      case "author":
        setAuthor(event.target.value)
        break;

      case "file":
        setFile(event.target.files[0]);
        break;


      default:
        break;
    }
  }

  async function addPostInDb() {
    let newPostItem = {
      title,
      author,
      topic,
      content,
      category,
      imgPath
    }

    console.log(newPostItem)

    if (title && author && content && category && imgPath) {
      // console.log(
      //   newPostItem
      // )

      // let res = await postJsonData('http://localhost:9000/api/post', newPostItem)

      // console.log("res", res)

      const formData = new FormData();
      formData.append("file", file);
      // formData.append("newPostItem", JSON.stringify(newPostItem));
      formData.append("title", title);
      formData.append("topic", topic);
      formData.append("content", content);
      formData.append("category", category);
      formData.append("img", imgPath);
      formData.append("author", author);
      // formData.append("file", file);
      console.log("formData222222", formData)
      let res = await fetch("http://localhost:9000/api/post", {
        method: "POST",
        body: formData
      });

      console.log("res", res)
    } else {
      alert("update all the fileds in form")
    }

  }

  // console.log(postsArr)

  return (<>
    {/* <Header /> */}
    <div className='compose'>
      <h1 className='darkmode-element'>Compose</h1>
      <form className="form-group" method="POST" encType="multipart/form-data" id="form">
        <label className='darkmode-element'>Title</label>
        <input onChange={dataInput} className="form-control" type="text" name="postTitle" />
        <label className='darkmode-element' >Post</label>
        <textarea onChange={dataInput} className="form-control" name="content" rows="5" cols="30" ></textarea>
        {/* <label className='darkmode-element' >Topic</label>
        <input onChange={dataInput} className="form-control" type="text" name="topic" /> */}
        <label className='darkmode-element' >Category</label>
        <select onChange={dataInput} name="category" >
          <option value="tech">Tech</option>
          <option value="bollywood">Boolywood</option>
        </select>
        <label className='darkmode-element'> Image Name</label>
        <input onChange={dataInput} className="form-control" type="text" name="imgName" />
        <label className='darkmode-element'>author</label>
        <input onChange={dataInput} className="form-control" type="text" name="author" />
        <label>File</label>
        <input
          onChange={dataInput}
          className="form-control"
          type="file"
          name="file"
        />
      </form>
      <button onClick={addPostInDb} className="btn btn-primary" type="submit" name="button">Publish</button>
    </div>
  </>)
}


export default Compose