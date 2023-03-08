import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Markup } from "interweave";
import { getJsonData } from "../commonConfig/utils";
// import postsArr from './postsArr';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import SwiperComponent from "./SwiperComponent";

function LatestPost() {


    const [postsArr, setPosts] = useState([])

    useEffect(() => {
        // wrap your async call here
        const loadData = async () => {
            // setUsersLoading(true);
            console.log("hello")
            let result = await getJsonData('http://localhost:9000/api/homepage')
            // let result = posts['latest_updates']
            console.log("result", result)
            setPosts(result)
        };

        loadData();
    }, []);


    return (<>
        {/* 
        font-weight: bold;
        font-size: xx-large;
        padding: 1% 0% 1%;
        border: solid;
        margin: 0% 19%;
        border-top: none;
        border-right: navajowhite;
        border-left: navajowhite; */}


        <div className=" bg-gray-500 latest-post">
            <h1 className="border-b-4 mx-[19%] pt-6 p-[32px] text-5xl text-black font-serif font-black text-center border-b-black ">THE BIG STORY</h1>
            <Swiper
                style={{ "zIndex": 0 }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {postsArr.map((postItem, index) => {

                    if (index < 4) {
                        return (<SwiperSlide key={postItem.key}
                        // id={postItem.key}
                        // title={postItem.title}
                        // content={postItem.content.slice(0, 400) + "...."}
                        // topic={postItem.topic}
                        // author={postItem.author}
                        // img={postItem.img}
                        >
                            <Link style={{ "textDecoration": "none" }} className="py-14" to={`/posts/${postItem.category}/${postItem.title.toLowerCase().replace(/[`" "~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-')}-${postItem._id}`}>
                                <div className="flex pt-8 justify-center">
                                    <img className="h-[585px] w-[936px]" src={postItem.img}></img>
                                </div>

                                <p className="mx-[24%] font-bold bg-white text-black px-[2%] pt-[1%] pb-[2%] text-4xl mt-0 mb-[3%] flex justify-center">{postItem.title}</p>
                                {/* <h4 className="inline-display"> ({postItem.topic})</h4> <br />
                                <Markup content={postItem.content.slice(0, 400) + "...."} /> */}
                                {/* <h5>
                                    <b> - written by {postItem.author}</b>
                                </h5> */}
                            </Link>
                        </SwiperSlide>)
                    }

                })}

                {/* <SwiperSlide><img src="https://picsum.photos/1200/354"></img></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/1200/354"></img></SwiperSlide> */}


            </Swiper>
        </div>
    </>
    )

}

export default LatestPost;