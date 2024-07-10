import React from "react";
import stayProductiveImg from "../../assets/images/illustration-stay-productive.png";
import arrowImg from "../../assets/images/New folder/icon-arrow.svg";
export default function StayProductive() {
  return (
    <>
      <section>
        <div className="container text-white mx-auto ">
          <div className="w-[80%]  mx-auto flex flex-col md:flex-row  gap-[30px] place-items-center  pt-[20px]">
            <div className="w-[100%]">
              <img className="w-full" src={stayProductiveImg} alt="" />
            </div>
            <div className="">
              <h3 className=" font-semibold text-[30px] leading-[30px] my-[10px]">
                Stay productive,
                <br /> wherever you are
              </h3>
              <div>
                <p className="mb-[5px] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore excepturi incidunt quo deserunt quidem accusamus iure
                  ab earum reprehenderit debitis!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore excepturi incidunt quo deserunt quidem accusamus iure
                  ab earum reprehenderit debitis!
                </p>
              </div>

              <a
                className="text-secondary hover:text-[#7ff2ff] transition-all duration-200 border-b-2 border-secondary w-fit gap-2 my-3 flex items-center "
                href="/"
              >
                See how fylo works
                <img
                  className="w-[15px] object-contain mt-1 animate-[moveRight_1s_ease-in-out_infinite] "
                  src={arrowImg}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
