import React from "react";
import { Link } from "react-router-dom";
import { Markup } from "interweave";

function post(props) {
  const { id } = props;

  if (!id) {
    return <h1 className="no-data"> No Data Available</h1>;
  } else {
    return (
      <>
        <Link className="text-link" to={`/posts/${props.title.toLowerCase()}-${props.id}`}>
          <div className="post">
            <h1 className="inline-display">{props.title}</h1>
            <h4 className="inline-display"> ({props.topic})</h4> <br />
            <Markup content={props.content} />
            <h5>
              <b> - written by {props.author}</b>
            </h5>
          </div>
        </Link>
      </>
    );
  }
}

export default post;
