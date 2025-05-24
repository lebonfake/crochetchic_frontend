import React from "react";
import Navbar from "../Componentx/LandingComponents/Navbar";
import Collections from "../Componentx/LandingComponents/Collections";
import BestSellers from "../Componentx/LandingComponents/BestSellers";
export default function Landing() {
  return (
    <>
      <Navbar />
      <section className="p-10 relative h-screen w-full overflow-hidden">
        <img
          src="./crochetIm.jpg"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-0" />

        <div className="relative z-9 flex flex-col items-center justify-center text-center text-white h-full px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md font-heading">
            Welcome to Crochetchic
          </h1>
          <p className="mt-4 max-w-xl text-white text-lg drop-shadow-md font-body ">
            Your one-stop shop for all things crochet. Explore our wide range of
            products and find the perfect items to suit your style.
          </p>
          <a
            href="#"
            className="mt-6 font-semibold text-white rounded-full bg-primary p-3 text-sm px-7 font-body hover:bg-secondary hover:text-primary transition"
          >
            Shop Now
          </a>
        </div>
      </section>
     <Collections></Collections>
     <BestSellers></BestSellers>

    </>
  );
}
