"use client"
import { useState } from "react"
import Link from "next/link"
import './nav.css'
import Image from "next/image"
export default function Navbar(){
  const [isNavExpanded, setIsNavExpanded] = useState(false)

    return(
        <nav className="navigation">
      <Link href="/" className="brand-name">
        MY BLOGGER
      </Link>
      {/* <button */}
       
      {/* > */}
        <Image  className="hamburger" alt="BTN" 
        height={50} width={50} src={"/3line.png"}  onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}/>
      {/* </button> */}
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
          <Link className="link"  href={"/blogs"}>BLOGS </Link>
          </li>
          <li>
          <Link className="link" href={"/blogs/addblog"}>ADD BLOG</Link>
          </li>
          <li>
          <Link className="link" href={"/aboutme"}>ABOUT</Link>
          </li>
          <li>
          <Link  className="link" href={"/#footer"}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>

    )
}