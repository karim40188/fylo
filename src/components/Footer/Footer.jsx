import React, { useState } from "react";
import logoImg from "../../assets/images/logo.svg";

export default function Footer() {
  let [icons, setIcons] = useState([
    { icon: "fas fa-phone", text: "0122343424" },
    { icon: "fas fa-envelope", text: "test@example.com" },
  ]);

  let [links, setLinks] = useState([
    { link: "about us" },
    { link: "contact us" },
    { link: "jobs" },
    { link: "teams" },
    { link: "press" },
    { link: "privacy" },
    { link: "blog" },
  ]);

  let [contactIcons, setContactIcons] = useState([
    { icon: "fab fa-facebook" },
    { icon: "fab fa-twitter" },
    { icon: "fab fa-instagram" },
  ]);
  return (
    <>
      <footer className="pt-[400px] md:pt-[200px]">
        <div className="container w-[80%] mx-auto">
          <a href="" className="mb-[300px]">
            <img className="" src={logoImg} alt="" />
          </a>
          <div className="text-white flex flex-col md:flex-row md:items-center gap-[30px] justify-between ">
            <div className="flex items-center gap-[10px] w-[320px] ">
              <i className="fas fa-location-dot"></i>
              <p className="text-sm font-notmal tracking-[0.8px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                nisi dignissimos unde ipsam modi facilis nam magni, assumenda ad
                fuga.
              </p>
            </div>
            <div className="">
              {icons.map((item) => {
                return (
                  <>
                    <div className="flex items-center gap-[10px]">
                      <i className={item.icon}></i>
                      <p>{item.text}</p>
                    </div>
                  </>
                );
              })}
            </div>
            <ul className="md:grid md:grid-cols-2 gap-[20px] flex flex-col  ">
              {links.map((link) => {
                return (
                  <li>
                    <a href="">{link.link}</a>
                  </li>
                );
              })}
            </ul>

            <ul className="flex gap-[10px] justify-center">
              {contactIcons.map((icon) => {
                return (
                  <li className="border h-[30px]  w-[30px] flex justify-center items-center rounded-full hover:bg-blue-300">
                    <a href="">
                      <i className={icon.icon}> </i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
