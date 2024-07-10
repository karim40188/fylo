import React from "react";

export default function GetStarted() {
  return (
    <>
      <section className="bg-[#0c1524]">
        <div className="container  relative">
          <div className="w-[70%]  mx-auto text-white  absolute text-center left-[50%] top-[-120px] md:top-[-90px] translate-x-[-50%]  bg-[#1b212f] p-[40px] rounded-[5px] ">
            <h3 className="font-semibold text-[30px]  ">
              Get easrly access today
            </h3>
            <p className="text-sm my-[20px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              ut, animi consequuntur numquam ad modi reprehenderit facere ea
              quis eum mollitia, totam beatae? Voluptatibus, quo.
            </p>
            <form>
              <div className="flex gap-[20px] flex-col md:flex-row">
                <input
                  type="text"
                  className="w-full p-[15px] rounded-[80px] h-[50px]"
                />
                <a
                  className="btn max-w[100%] md:w-[220px] text-white flex items-center rounded-[10px] md:rounded-[80px] justify-center mx-auto text-center"
                  href=""
                >
                  Get Started For Free
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
