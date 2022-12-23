import React from 'react';
import Header from './Header';
// import Posts from '../components/Posts';




function Compose(props) {

  // console.log("props" , props)

  return (<>
    {/* <Header /> */}
    <div className='compose'>
      <h1 className='darkmode-element'>Compose</h1>
      <div className="form-group">
        <label className='darkmode-element'>Title</label>
        <input onChange={props.function1} className="form-control" type="text" name="postTitle" />
        <label className='darkmode-element' >Post</label>
        <textarea onChange={props.function1} className="form-control" name="postBody" rows="5" cols="30" ></textarea>
        <label className='darkmode-element' >Topic</label>
        <input onChange={props.function1} className="form-control" type="text" name="topic" />
        <label className='darkmode-element'>author</label>
        <input onChange={props.function1} className="form-control" type="text" name="author" />
      </div>
      <button onClick={props.function2} className="btn btn-primary" type="submit" name="button">Publish</button>
    </div>
  </>)
}


export default Compose