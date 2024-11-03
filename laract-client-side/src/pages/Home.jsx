import React from "react";

import Header from "../components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello !</h1>
            <p className="mb-10">
              Meet Shop Management – the all-in-one solution to streamline
              operations, boost productivity, and keep your team aligned,
              wherever they are.
            </p>
            <a
              href="/management"
              className="bg-[#85a236] hover:bg-[#9bbc3e] p-3 rounded-[16px] text-lg font-semibold ">
              Get Started
            </a>
          </div>
        </div>
      </div>
      {/* <section className="pt-[125px] px-[50px]"></section> */}
    </>
  );
}
