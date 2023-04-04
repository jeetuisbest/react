import React, { useState, useEffect } from "react";
import { getJsonData } from "../commonConfig/utils";
import { Link } from "react-router-dom";
import Post from './Post';
// import postsArr from './postsArr';
// import Compose from './Compose';


function PostItems(props) {

  const [techPostsArr, setPosts] = useState([])

  useEffect(() => {
    // wrap your async call here
    const loadData = async () => {
      // setUsersLoading(true);
      let posts = await getJsonData(`http://localhost:9000/api/posts/${props.category}`)

      // console.log("posts", posts)
      // let result = posts['tech']
      setPosts(posts)
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

  return <div className="ml-[5%] mr-[27%]" >
    <div>
      <ul className="flex py-3 justify-start md:justify-between px-5">

        {/* font-size: xx-large;
        border: 1px solid black;
        border-left: hidden;
        border-top: hidden;
        border-right: hidden; */}
        <li className="border-b-4 tracking-tight hover:tracking-wide border-spacing-y-1.5 text-5xl leading-relaxed py-1 border-black px-5" id="home"> {props.category.toUpperCase()} UPDATES </li>

        {/* border: solid;
        text-decoration: none;
        padding: 12px;
        border-color: #070707;
        border-width: 1px; */}
        <Link style={{ "textDecoration": "none" }} className="border-4 p-5 text-3xl border-black cursor-pointer hover:bg-black hover:text-white rounded-3xl" to={`/${props.category}`}> View More</Link>
        {/* <li className=" cursor-pointer px-5" id="about"> <Link to={`/about`} > ABOUT US </Link></li> */}
      </ul>

      <div className='posts justify-content: grid grid-cols-2 gap-8 flex-start'>
        {/* <div id="iframe-youtube">
          <iframe loading="lazy" width="100%" height="250" src="https://www.youtube.com/embed/9VqjcpCbbk8?autoplay=1&amp;mute=1&amp;rel=0" title="#PoweringLife: A CSR Initiative By Volvo India" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">

          </iframe></div> */}
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
          if (index < 4) {
            return (<Post key={postItem._id}
              id={postItem._id}
              img={postItem.img}
              title={postItem.title}
              content={postItem.content.slice(0, 400) + "...."}
              category={postItem.category}
              author={postItem.author}
              date={postItem.publish_date}

            />)

          }
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
  </div>





}


export default PostItems