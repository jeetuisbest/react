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
                <Link style={{ "textDecoration": "none" }} className="text-black hover:text-black border-b-4" to={`/posts/${props.category}/${props.title.toLowerCase().replace(/[`" "~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-')}-${props.id}`}>
                    <div className="pb-32 p-10 post">
                        <img className="my-auto mx-auto z-0 rounded-3xl h-[467px] w-[810px]" src={props.img}></img>
                        <div className="mx-[6%] mt-[-10%] mb-[4%] rounded-3xl relative z-40 bg-amber-200">
                            <h1 className="font-serif font-bold inline-flex mx-1 text-5xl leading-tight py-3">{props.title}</h1>
                            <h4 className="font-serif    font-bold mx-1 text-3xl py-3" > ({props.category})</h4> <br />
                            {/* <Markup className="py-4 text-3xl" content={props.content} /> */}

                            <div className="inline-flex">
                                <p className="font-mono text-3xl px-3" >- written by {props.author}</p>
                                <p className="font-mono text-3xl px-3"> ( {props.date} )</p>

                            </div>

                        </div>
                    </div>
                </Link>
            </>
        );
    }
}

export default post;
