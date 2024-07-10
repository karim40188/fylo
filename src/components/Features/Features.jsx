import React, { useState } from "react";
import accesImg from "../../assets/images/New folder/icon-access-anywhere.svg";
import securityImg from "../../assets/images/icon-security.svg";
import collabImg from "../../assets/images/icon-collaboration.svg";
import anyFileImg from "../../assets/images/New folder/icon-any-file.svg";

export default function Features() {
  let [cards, setCards] = useState([
    {
      icon: `${accesImg}`,
      heading: "Acces your files anywhere",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eaque.",
    },
    {
      icon: `${securityImg}`,
      heading: "Acces your files anywhere",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eaque.",
    },
    {
      icon: `${collabImg}`,
      heading: "Acces your files anywhere",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eaque.",
    },
    {
      icon: `${anyFileImg}`,
      heading: "Acces your files anywhere",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eaque.",
    },
  ]);
  return (
    <>
      <section className=" bg-[rgb(24,31,43)] py-5">
        <div className="container grid  grid-cols-1 md:grid-cols-2 mx-auto text-white text-center gap-[100px] items-center">
          {cards.map((card, index) => {
            return (
              <div key={index} className="max-w-[100%] md:w-[50%]  mx-auto">
                <img
                  className="w-[30%] mx-auto mb-3 object-contain"
                  src={card.icon}
                  alt=""
                />
                <h3 className="font-semibold my-3 text-lg">{card.heading}</h3>
                <p className="text-sm">{card.details}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
