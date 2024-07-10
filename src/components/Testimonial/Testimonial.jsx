import React, { useState } from "react";
import img1 from "../../assets/images/profile-1.jpg";
import img2 from "../../assets/images/profile-2.jpg";
import img3 from "../../assets/images/profile-3.jpg";
import quoteIcon from '../../assets/images/New folder/bg-quotes.png'

export default function Testimonial() {
  let [tests, setTests] = useState([
    {
      desc: `Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Sed, aliquid. Cum quis animi
  repudiandae dolorum dolor qui, ducimus minus.
  Pariatur laboriosam quae numquam illo nisi quod!
  Quis, reprehenderit. Debitis, officiis!`,
      img: img1,
      name: "Ahmed",
      position: `Founder & CEO, Huddle`,
    },
    {
      desc: `Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Sed, aliquid. Cum quis animi
  repudiandae dolorum dolor qui, ducimus minus.
  Pariatur laboriosam quae numquam illo nisi quod!
  Quis, reprehenderit. Debitis, officiis!`,
      img: img2,
      name: "Mohamed",
      position: `Founder & CEO, Huddle`,
    },
    {
      desc: `Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Sed, aliquid. Cum quis animi
  repudiandae dolorum dolor qui, ducimus minus.
  Pariatur laboriosam quae numquam illo nisi quod!
  Quis, reprehenderit. Debitis, officiis!`,
      img: img3,
      name: "Eman",
      position: `Founder & CEO, Huddle`,
    },
  ]);

  return (
    <>
      <section className="pt-[30px] relative pb-[200px] ">
        <div className="w-[20%] absolute top-[-5px] left-[40px]">
          <img className="w-100 object-contain" src={quoteIcon} alt="" />
        </div>
        <div className="container z-[50] relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white w-[90%] mx-auto gap-[15px]">
          {tests.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-[rgb(34,41,60)] p-[30px] shadow-[1px_1px_10px_1px]"
              >
                <p className="text-normal">{item.desc}</p>
                <div className="flex gap-[5px] items-center mt-[10px]">
                  <img className="rounded-full w-[30%]" src={item.img} alt="" />
                  <div>
                    <span className="font-semibold">{item.name}</span>
                    <p>{item.position}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
