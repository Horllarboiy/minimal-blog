import React, { useState } from "react"
import { LuTriangleRight } from "react-icons/lu"
import { SiLivejournal } from "react-icons/si";
import { Link } from "gatsby"

const Header = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(prev => !prev)
  }
  return (
    <nav className="">
      <div className="mx-1 flex justify-between items-center border border-gray-800 py-3 my-3 md:px-4 rounded-xl">
        <h1>
          <SiLivejournal size={20} />{" "}
        </h1>

        <button
          onClick={handleShow}
          className="md:bg-inherit p-2 text-sm rounded-lg uppercase"
        >
          Menu
        </button>
      </div>
        <ul className={`grid grid-cols-3 gap-2 mx-4 text-center z-50 ${show ? `grid` : `hidden`}`}>
          <li className="border border-gray-800 rounded-xl px-3 py-2">
            <Link> News</Link>
          </li>
          <li className="border border-gray-800 rounded-xl px-3 py-2">
            <Link>Gist</Link>
          </li>
          <li className="border border-gray-800 rounded-xl px-3 py-2">
            <Link className="">Local</Link>
          </li>
          <li className="border border-gray-800 rounded-xl px-3 py-2">
            <Link className="">Local</Link>
          </li>
          <li className="border border-gray-800 rounded-xl px-3 py-2">
            <Link>Local</Link>
          </li>
          <li className="border border-gray-800 rounded-xl px-3 py-2">
            <Link>Local</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Header
