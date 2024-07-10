import React from "react";
import landingImg from "../../assets/images/illustration-stay-productive.png";
import wavesImg from '../../assets/images/New folder/bg-curvy-desktop.svg'

export default function Home() {
  return (
    <>
      <section className="pt-3 element-center flex-col bg-[#1c2230]">
        <div className="container">
          <div className="flex  mt-[50px] p-[50px] flex-col  m-auto text-center gap-3">
            <div className="w-[600px] m-auto max-w-full">
              <img className="w-full" src={landingImg} alt="" />
            </div>
            <div className="text-white ">
              <h1 className="capitalize font-semibold text-[30px]  mb-3 ">
                all your files in one secure location,
                <br />
                accessible anywhere.
              </h1>
              <p className="  px-[15px] md:w-[600px] m-auto w-full text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit officiis esse vitae vel exercitationem dolores voluptas
                possimus nesciunt quos, perspiciatis deserunt obcaecati.
              </p>
            </div>
            <a
              href="/"
              className="btn text-white w-[100%] md:w-[280px] h-[60px] mx-auto rounded-[30px] text-lg element-center"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="w-full h-[200px]">
          <img className="w-full mt-3 h-full" src={wavesImg} alt="" />
        </div>
      </section>
    </>
  );
}
