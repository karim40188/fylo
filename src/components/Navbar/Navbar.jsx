"use client";

import React, { useEffect, useRef, useState } from "react";
import img from "../../assets/images/logo.svg";

export default function Navbar() {
  let [links, setLinks] = useState(["Features", "Team", "Signin"]);
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navRef.current.style.backgroundColor = "rgb(30,30,30)";
      } else {
        navRef.current.style.backgroundColor = "rgb(28,34,49)";
      }
      
    });
    
  }, []);


  

  return (
    <nav
      ref={navRef}
      className="flex justify-center fixed top-0 left-0 right-0 py-4 w-full z-50 transition-all duration-500"
    >
      <div className="container flex flex-col items-center justify-between  md:flex-row  w-[90%] ">
        <a href="">
          <img src={img} alt="" />
        </a>
        <ul className=" gap-[10px] md:gap-[30px] flex flex-col md:flex-row text-lg ">
          {links.map((link) => {
            return (
              <li key={link}>
                <a className="text-white" href={`/${link.toLowerCase()}`}>
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
