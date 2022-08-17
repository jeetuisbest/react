
import React from "react"
import { Link } from "react-router-dom"
import parse from "html-react-parser"
import {Markup} from 'interweave'


function post(props) {

    // console.log(props)
    return  <Link className="text-link" to={`/posts/${props.id}`}><div className="post">
    <h1 className='inline-display'>{props.title}</h1> 
    <h4 className='inline-display'> ({props.topic})</h4>
   <Markup  content={props.content} />
    <h5><b> - written by {props.author}</b></h5>
    </div>
    </Link>
}

export default post