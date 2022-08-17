import React, { useState } from 'react';
import Header from './Header';
// import Posts from '../components/Posts';




function Compose(props) {

console.log("props" , props)

  return <div>
    <Header />
    <div className='posts'>
      <h1>Compose</h1>
      <div className="form-group">
        <label>Title</label>
        <input onChange={props.function1} className="form-control" type="text" name="postTitle" />
        <label>Post</label>
        <textarea onChange={props.function1} className="form-control" name="postBody" rows="5" cols="30" ></textarea>
        <label>Topic</label>
        <input onChange={props.function1} className="form-control" type="text" name="topic"  />
        <label>author</label>
        <input onChange={props.function1} className="form-control" type="text" name="author"  />
      </div>
      <button onClick={props.function2} className="btn btn-primary" type="submit" name="button">Publish</button>
    </div>
  </div>
}


export default Compose