
import React from "react"
import { Link } from "react-router-dom"
// bg - red - 200
function header() {
  return <nav className=" py-[32px] px-[10%] bg-gray-900 flex justify-between">
    <div className="px-3 py-4 mx-12  text-5xl">
      <Link style={{ "textDecoration": "none" }} to={`/`} className="text-white hover:tracking-wide hover:text-red-700">TECH BLOG</Link>
    </div>

    <ul className=" px-28 flex py-3 space-x-11 justify-end">
      <li className="text-white cursor-pointer text-3xl px-5" id="home"> <Link style={{ "textDecoration": "none" }} className="hover:text-red-600" to={`/`} > HOME </Link></li>
      <li className="text-white cursor-pointer text-3xl px-5" id="tech"> <Link style={{ "textDecoration": "none" }} className="hover:text-red-600" to={`/tech`} > TECH </Link></li>
      {/* <li className="text-white cursor-pointer px-5" id="about"> <Link to={`/about`} > ABOUT US </Link></li> */}
    </ul>
  </nav>
}

export default header