import React from 'next'
import { useRouter } from "next/router";
import Link from "next/link";
 

 function Navbar() {
  return (
    <nav>
        
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
        </ul>
    </nav>
  )
}
export default Navbar
