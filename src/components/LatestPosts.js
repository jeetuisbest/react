import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Markup } from "interweave";
import postsArr from './postsArr';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import SwiperComponent from "./SwiperComponent";

function latestPost() {

    console.log("postsArr", postsArr)
    return (<>
        <div className="latest-post">
            <Swiper
                style={{ "zIndex": 0 }}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {postsArr.map((postItem, index) => {
                    return (<SwiperSlide key={postItem.key}
                    // id={postItem.key}
                    // title={postItem.title}
                    // content={postItem.content.slice(0, 400) + "...."}
                    // topic={postItem.topic}
                    // author={postItem.author}
                    // img={postItem.img}
                    >
                        <Link className="text-link" to={`/posts/${postItem.title.toLowerCase()}-${postItem.key}`}>
                            <img src={postItem.img}></img>
                            <div className="latest-tech">
                                <h1>{postItem.title}</h1>
                                {/* <h4 className="inline-display"> ({postItem.topic})</h4> <br />
                                <Markup content={postItem.content.slice(0, 400) + "...."} /> */}
                                {/* <h5>
                                    <b> - written by {postItem.author}</b>
                                </h5> */}
                            </div>
                        </Link>
                    </SwiperSlide>)
                })}

                {/* <SwiperSlide><img src="https://picsum.photos/1200/354"></img></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/1200/354"></img></SwiperSlide> */}


            </Swiper>
        </div>
    </>
    )
}

export default latestPost;