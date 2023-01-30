import React from "react";
import { Link } from "react-router-dom";
import { Markup } from "interweave";

function post(props) {
  const { id } = props;

  function getDate(d) {
    let date = new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "2-digit" })
    return date
  }

  if (!id) {
    return <h1 className="no-data"> No Data Available</h1>;
  } else {
    return (
      <>
        <Link style={{ "textDecoration": "none" }} className="text-black hover:text-black" to={`/posts/${props.category}/${props.title.toLowerCase().replace(/[`" "~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-')}-${props.id}`}>
          <div className=" p-10 post">
            {/* <p>{props.title.toLowerCase().replace(/[`" "~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-')}</p> */}
            <img className="rounded-3xl" src={props.img}></img>
            <div>
              <h1 className="font-serif font-bold inline-flex mx-1 text-5xl leading-tight py-3">{props.title}</h1>
              <h4 className="font-serif inline-flex font-bold mx-1 text-3xl py-3" > {props.category.toUpperCase()}</h4> <br />
              {/* <Markup className="py-4 text-3xl" content={props.content} /> */}

              <div className="inline-flex">
                <p className="font-mono text-3xl px-3" >- written by {props.author} </p>
                <p className="font-mono text-3xl"> ({getDate(props.date)})</p>

              </div>

            </div>
          </div>
        </Link>
      </>
    );
  }
}

export default post;
