"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPinIcon, HeartIcon, CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  size: string;
  status: string;
  imgSrc: string;
  hasVideo?: boolean;
  photosCount: number;
}

const PropertyCards = ({propertyData}: {propertyData: any}) => {
  const [properties] = useState<Property[]>(propertyData);

  return (
    <section className="w-full mt-28 px-4 sm:px-10 max-w-7xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">
        Hot  Selling Properties in Mumbai
      </h2>

      
      <div className="flex overflow-x-auto gap-5 scrollbar-hide pb-4">
        {properties.map((property) => (
          <div
            key={property.id}
            className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex-shrink-0"
          >
            <div className="relative">
              <Image
                src={property.imgSrc}
                alt={property.title}
                width={300}
                height={200}
                className="rounded-t-lg object-cover w-full h-[180px]"
              />
             
              <div className="absolute top-2 left-2 flex items-center bg-black/60 text-white text-xs px-2 py-1 rounded-md gap-1">
                <CameraIcon className="h-4 w-4" />
                <span>{property.photosCount}</span>
              </div>
              {property.hasVideo && (
                <div className="absolute top-2 left-14 flex items-center bg-black/60 text-white text-xs px-2 py-1 rounded-md gap-1">
                  <VideoCameraIcon className="h-4 w-4" />
                  <span>Video</span>
                </div>
              )}
              <button className="absolute top-2 right-2 bg-white/80 p-1 rounded-full">
                <HeartIcon className="h-5 w-5 text-gray-500 hover:text-red-500" />
              </button>
            </div>

            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {property.title}
              </h3>
              <div className="flex items-center text-gray-500 text-xs mb-2">
                <MapPinIcon className="h-4 w-4 mr-1" />
                <span>{property.location}</span>
              </div>
              <p className="text-purple-600 font-bold text-sm mb-1">
                {property.price}
              </p>
              <p className="text-gray-400 text-xs">
                {property.status} • {property.size}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyCards;
