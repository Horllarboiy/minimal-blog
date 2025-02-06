import React, { useState } from "react"
import { LuTriangleRight } from "react-icons/lu"
import { Link } from "gatsby"

const Header = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(prev => !prev)
  }
  return (
    <nav className="">
      <div className="mx-4 flex justify-between items-center border border-gray-800 py-3 my-3 md:px-4 rounded-xl">
        <h1>
          <LuTriangleRight size={20} />{" "}
        </h1>

        <button
          onClick={handleShow}
          className="bg-gray-800 md:bg-inherit p-2 text-sm rounded-lg uppercase"
        >
          Menu
        </button>
      </div>
        <ul className={`grid grid-cols-3 gap-2 mx-4 text-center z-50 bounce-in ${show ? `grid` : `hidden`}`}>
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
      <div className={`bg-black absolute h-screen w-11/12 z-30 ${show ? `grid` : `hidden`}`}> </div>
    </nav>
  )
}

export default Header
