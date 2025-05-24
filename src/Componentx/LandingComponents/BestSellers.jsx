import React from 'react'
import ProductCard from "./ProductCard";

function BestSellers() {
      const products = [
    {
      id: 1,
      title: "Product 1",
      price: 20.0,
      description: "This is a great productazzeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.",
      collection: "Phonebags Collection",
      versions: [
        {
          color: "#000000",
          image: "./topscollection.jpg",
          sizes: [
            { size: "XL", stock: 10 },
            { size: "L", stock: 5 },
          ],
        },
        {
          color: "#123456",
          image: "./topscollection.jpg",
          sizes: [
            { size: "XL", stock: 15 },
            { size: "L", stock: 5 },
          ],
        },
      ],
      available: true,
    },
    {
      id: 1,
      title: "Product 1",
      price: 20.0,
      description: "This is a great product.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      collection: "Phonebags Collection",
      versions: [
        {
          color: "#000000",
          image: "./topscollection.jpg",
          sizes: [
            { size: "XL", stock: 10 },
            { size: "L", stock: 5 },
          ],
        },
        {
          color: "#123456",
          image: "./topscollection.jpg",
          sizes: [
            { size: "XL", stock: 15 },
            { size: "L", stock: 5 },
          ],
        },
      ],
      available: true,
    },
     {
      id: 1,
      title: "Product 1",
      price: 20.0,
      description: "This is a great product.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      collection: "Phonebags Collection",
      versions: [
        {
          color: "#000000",
          image: "./topscollection.jpg",
          sizes: [
            { size: "XL", stock: 10 },
            { size: "L", stock: 5 },
          ],
        },
        {
          color: "#123456",
          image: "./topscollection.jpg",
          sizes: [
            { size: "XL", stock: 15 },
            { size: "L", stock: 5 },
          ],
        },
      ],
      available: true,
    },
    {
      id: 1,
      title: "Product 1",
      price: 20.0,
      description: "This is a great product.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      collection: "Phonebags Collection",
      versions: [
        {
          color: "#000000",
          image: "./topscollection.jpg",
          sizes: [
            { size: "XL", stock: 10 },
            { size: "L", stock: 5 },
          ],
        },
        {
          color: "#123456",
          image: "./topscollection.jpg",
          sizes: [
            { size: "XL", stock: 15 },
            { size: "L", stock: 5 },
          ],
        },
      ],
      available: true,
    },
    {
      id: 1,
      title: "Product 1",
      price: 20.0,
      description: "This is a great product.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      collection: "Phonebags Collection",
      versions: [
        {
          color: "#000000",
          image: "./topscollection.jpg",
          sizes: [
            { size: "XL", stock: 10 },
            { size: "L", stock: 5 },
          ],
        },
        {
          color: "#123456",
          image: "./topscollection.jpg",
          sizes: [
            { size: "XL", stock: 15 },
            { size: "L", stock: 5 },
          ],
        },
      ],
      available: false,
    },
  ];
  return (
     <section className=" container mx-auto h-screen ">
          <div className="px-2 py-6 w-full relative">
            <h2 className="text-primary font-heading text-3xl font-bold text-center underline decoration-primary decoration-1 underline-offset-8">
              Best Sellers
            </h2>
            <div className="hide-scrollbar rounded-xl flex flex-col justify-between items-center space-y-3  mt-3 w-full p-0 md:p-4 md:space-x-8 md:flex-row md:justify-evenly md:overflow-x-auto">
                  {products.map(product=>{
                return (<ProductCard product={product} />)
            })}
            </div>
          
           
            
          </div>
        </section>
  )
}

export default BestSellers
