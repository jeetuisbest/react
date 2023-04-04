import React from "react";
// import { Markup } from "interweave";

import { Interweave, Node } from 'interweave';



function post(props) {

    const { id } = props;

    const pStyle = {
        color: "black",
        // backgroundColor: "DodgerBlue",
        paddingTop: "24px",
        fontFamily: "Arial",
        fontSize: "24px",
        // fontWeight: "600"
    }

    const hStyle = {
        color: "black",
        // backgroundColor: "DodgerBlue",
        paddingTop: "32px",
        fontFamily: "Arial",
        fontSize: "32px",
        // fontWeight: "bold"
    }

    const lStyle = {
        color: "black",
        // backgroundColor: "DodgerBlue",
        listStyleType: "square",
        paddingTop: "20px",
        fontFamily: "Arial",
        fontSize: "24px",
        // fontWeight: "bold"
    }

    const transformText = (node: HTMLElement, children: Node[]): React.ReactNode => {
        if (node.tagName.toLowerCase() === "p") {
            return <p style={pStyle}>{children}</p>;
        }

        let headerTags = ["h1", "h2", "h3", "h4", "h4", "h6"]

        if (headerTags.includes(node.tagName.toLowerCase())) {
            return <h1 style={hStyle}>{children}</h1>;
        }

        if (node.tagName.toLowerCase() == "li") {
            return <li style={lStyle}>{children}</li>;
        }
    };

    function getDate(d) {
        let date = new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "2-digit" })
        return date
    }

    if (id) {
        return (
            <div className="mr-[22%] ml-[2%] p-10">
                <div className="text-link" >
                    <div className="post">
                        <h1 className="text-7xl font-bold font-serif leading-12">{props.title}</h1>
                        <h4 className="text-5xl font-bold pt-6"> ({props.category.toUpperCase()})</h4> <br />
                        <img className="w-[1017px] h-[734px]" src={props.img}></img>
                        <div className="pt-10">

                            <Interweave content={props.content} transform={transformText} />
                        </div>

                        {/* <div>{props.content}</div> */}
                        <h5>
                            <b className="text-5xl text-bold"> - {getDate(props.date)}</b>
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default post;
