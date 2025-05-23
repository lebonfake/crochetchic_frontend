import React from "react";
import CollectionCard from "./CollectionCard";
import { useRef } from "react";

function Collections() {
  const collections = [
    {
      id: 1,
      name: "Phonebags Collection",
      image: "./phonebagscollection.jpg",
    },
    {
      id: 2,
      name: "Tops Collection",
      image: "./topscollection.jpg",
    },
    {
      id: 3,
      name: "phonebags Collection",
      image: "./phonebagscollection.jpg",
    },
    {
      id: 4,
      name: "phonebags Collection",
      image: "./phonebagscollection.jpg",
    },
    {
      id: 5,
      name: "phonebags Collection",
      image: "./phonebagscollection.jpg",
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };
    const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className=" container mx-auto ">
      <div className="px-2 py-6 w-full relative">
        <h2 className="text-primary font-heading text-3xl font-bold text-center underline decoration-primary decoration-1 underline-offset-8">
          Our collections
        </h2>
        <div
          ref={scrollRef}
          className="hide-scrollbar rounded-xl flex justify-evenly overflow-hidden mt-5 space-x-4 overflow-x-auto w-full"
        >
          {collections.map((collection) => {
            return <CollectionCard collection={collection} />;
          })}
        </div>

        <div onClick={scrollLeft} className="hidden md:block rounded-full w-30 h-22 p-4 bg-gray-100/70 text-black absolute left-4 top-1/2 cursor-pointer font-bold ">&lt;</div>
        <div onClick={scrollRight} className="hidden md:block rounded-full w-30 h-22 p-4 bg-gray-100/70 text-black absolute right-4 top-1/2 cursor-pointer font-bold ">&gt;</div>
      
        
      </div>
    </section>
  );
}

export default Collections;
