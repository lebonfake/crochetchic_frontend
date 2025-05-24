import React from "react";
import { useState } from "react";
import { Heart, ShoppingCart, Eye, Star, Zap } from 'lucide-react';

function ProductCard({product}) {

   const [selectedVersion, setSelectedVersion] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const currentVersion = product.versions[selectedVersion];
 
  return (
    <div 
      className=" group relative  w-full flex-shrink-0 md:w-1/4  bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
        <div className="bg-gradient-to-r from-secondary to-primary text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
          <Zap size={12} />
          <span>TRENDING</span>
        </div>
      </div>

      {/* Like button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 group/heart"
      >
        <Heart 
          size={18} 
          className={`transition-all duration-300 ${
            isLiked 
              ? 'fill-red-500 text-red-500 scale-110' 
              : 'text-gray-600 group-hover/heart:text-red-500 group-hover/heart:scale-110'
          }`}
        />
      </button>

      {/* Product Image */}
      <div className="relative h-72 md:h-52 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
         <img src={currentVersion.image} alt="" />
        </div>
        
        {/* Floating action buttons - appear on hover */}
        <div className={`absolute bottom-4 right-4 flex space-x-2 transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          
          <button className="p-2 bg-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <ShoppingCart size={16} className="text-white" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Collection & Rating */}
       

        {/* Title & Price */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
            {product.title}
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
            <span className="text-sm text-gray-500 line-through">$45.00</span>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
              Save 25%
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed ">{product.description.length>20 ? `${product.description.slice(0,40)}  .....` :  product.description}</p>

        {/* Color Selection */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-900">Colors</span>
            <span className="text-xs text-gray-500">{product.versions.length} available</span>
          </div>
          <div className="flex space-x-3">
            {product.versions.map((version, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedVersion(index);
                  setSelectedSize(0);
                }}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                  selectedVersion === index
                    ? 'border-primary scale-110 shadow-lg'
                    : 'border-gray-300 hover:border-gray-400 hover:scale-105'
                }`}
                style={{ backgroundColor: version.color }}
              >
                {selectedVersion === index && (
                  <div className="w-full h-full rounded-full border-2 " />
                )}
              </button>
            ))}
          </div>
        </div>

         {/* Stock indicator */}
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${
            currentVersion.sizes[selectedSize]?.stock > 10 
              ? 'bg-green-500' 
              : currentVersion.sizes[selectedSize]?.stock > 5 
              ? 'bg-yellow-500' 
              : 'bg-red-500'
          }`} />
          <span className="text-xs text-gray-600">
            {currentVersion.sizes[selectedSize]?.stock > 10 
              ? 'In Stock' 
              : currentVersion.sizes[selectedSize]?.stock > 0 
              ? `Only ${currentVersion.sizes[selectedSize]?.stock} left` 
              : 'Out of Stock'
            }
          </span>
        </div>

        {/* Add to Cart Button */}
        <button 
          className="w-full bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          disabled={!product.available || currentVersion.sizes[selectedSize]?.stock === 0}
        >
          <ShoppingCart size={18} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};


export default ProductCard;
