import React from 'react'

export default function CollectionCard({ collection }) {
  return (
    <div className="group  relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer w-1/2 flex-shrink-0 md:w-1/3">
      {/* Background Image */}
      <div className="aspect-[4/6] md:aspect-[4/3] overflow-hidden">
        <img 
          src={collection.image} 
          alt={collection.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-end p-2 md:p-6">
        <div className="w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h2 className="text-white font-bold text-sm md:text-2xl mb-2 drop-shadow-lg">
            {collection.name}
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </div>
      
      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 animate-pulse" />
      </div>
      
      {/* Border Glow */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-colors duration-500" />
    </div>
  )
}