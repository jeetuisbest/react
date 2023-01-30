
import React from "react"
import { Link } from "react-router-dom"
// bg - red - 200
function Footer() {

    console.log("hello yes")
    return <div className="p-[32px] bg-gray-900">

        <h1 class="footer-heading m-4 bg-red-600 text-white flex justify-center p-8 mx-[44%] text-5xl">TechSpace</h1>

        {/* <div className="flex p-11 justify-between">
            <div class="footer-column">
                <ul class="footer-links">
                    <li>
                        <a href="https://www.firstpost.com/about-firstpost">
                            About Firstpost
                        </a>
                    </li>
                    <li>
                        <a href="https://www.firstpost.com/press-release" target="_blank">
                            Press Release
                        </a>
                    </li>
                    <li>
                        <a href="https://www.firstpost.com/rss">
                            RSS
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/firstpost" rel="nofollow" target="_blank">
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/pages/Firstpost/165818073477856" rel="nofollow" target="_blank">
                            Facebook
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer-column">

                <p class="footer-heading">Section</p>
                <ul class="footer-links">


                    <li><a href="https://www.firstpost.com/" title="Front Page">Front Page </a></li>



                    <li><a href="https://www.firstpost.com/category/politics" title="Politics">Politics </a></li>



                    <li><a href="https://www.firstpost.com/category/sports" title="Sports">Sports </a></li>



                    <li><a href="https://www.firstpost.com/category/india" title="India">India </a></li>



                    <li><a href="https://www.firstpost.com/category/world" title="World">World </a></li>



                    <li><a href="https://www.firstpost.com/category/business" title="Business">Business </a></li>



                    <li><a href="https://www.firstpost.com/category/entertainment" title="Entertainment News">Entertainment News </a></li>



                    <li><a href="https://www.firstpost.com/firstcricket/" title="Cricket">Cricket </a></li>



                    <li><a href="https://www.firstpost.com/category/tech" title="Tech">Tech </a></li>



                    <li><a href="https://www.firstpost.com/category/health" title="Health">Health </a></li>



                    <li><a href="https://www.firstpost.com/category/photos" title="Photos">Photos </a></li>



                    <li><a href="https://www.firstpost.com/category/videos" title="Videos">Videos </a></li>



                    <li><a href="https://www.firstpost.com/category/press-release" title="Press release">Press Release </a></li>



                    <li><a href="https://www.firstpost.com/culture-of-world/" title="FirstCulture">Firstculture </a></li>



                    <li><a href="https://www.firstpost.com/tag/long-reads" title="Long Reads">Long Reads </a></li>



                    <li><a href="https://www.firstpost.com/tech/mobiles" title="Latest Mobiles">Latest Mobiles </a></li>



                    <li><a href="https://www.firstpost.com/tech/tablets" title="Latest Tablets">Latest Tablets </a></li>



                    <li><a href="https://www.firstpost.com/tech/laptops" title="Latest Laptops">Latest Laptops </a></li>


                </ul>

            </div>

            <div class="footer-column">

                <p class="footer-heading">Plus</p>
                <ul class="footer-links">


                    <li><a href="https://www.firstpost.com/firstcricket/cricket-live-score" title="Cricket Live Score">Cricket Live Score </a></li>



                    <li><a href="https://www.firstpost.com/category/delhi" title="New Delhi">New Delhi </a></li>



                    <li><a href="https://www.firstpost.com/category/mumbai" title="Mumbai">Mumbai </a></li>



                    <li><a href="https://www.firstpost.com/tag/coronavirus" title="FP Exclusives">Fp Exclusives </a></li>



                    <li><a href="https://www.firstpost.com/education/board-results" title="Board Exam Results 2022">Board Exam Results 2022 </a></li>



                    <li><a href="https://www.firstpost.com/tag/coronavirus" title="Coronavirus">Coronavirus </a></li>


                </ul>

            </div>

            <div class="footer-column">

                <p class="footer-heading">Tools</p>
                <ul class="footer-links">


                    <li><a href="https://feeds.feedburner.com/firstpost/xfJh" title="RSS Feeds">Rss Feeds </a></li>


                </ul>

                <p class="footer-heading">Apps</p>
                <ul class="footer-links">


                    <li><a href="https://itunes.apple.com/in/app/firstpost/id445829858?mt=8" title="iOS">Ios </a></li>



                    <li><a href="https://play.google.com/store/apps/details?id=com.firstpost" title="Android">Android </a></li>


                </ul>

            </div>
        </div> */}


        <div className=" text-white flex justify-center">
            <div className="justify-center inline-block">
                <p className=" p-8">Copyright © 2023. <a alt="Firstpost" href="/" title="Firstpost">TechSpace</a> - All Rights Reserved.</p>

                <div className="p-8">
                    <ul className="tnc-links flex">
                        <li className="ml-8"><a href="https://www.firstpost.com/terms-of-use">
                            Terms of use
                        </a>

                        </li>
                        <li className="ml-8"><a href="https://www.firstpost.com/privacy">
                            Privacy
                        </a></li>
                        <li className="ml-8"><a href="https://www.firstpost.com/cookie-policy">
                            Cookie Policy
                        </a></li>
                    </ul>
                </div>

            </div>



        </div>

    </div>
}

export default Footer