"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bed, Bath, SquareCode } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Data from "@/data/PropertyHeader.json";

function PropertiesListing() {
  const router = useRouter();
  const properties = Data.properties;
  const [visibleProperties, setVisibleProperties] = useState(6);

  return (
    <div className="py-7">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="residential" className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">
              Current Listings
            </h2>
            <TabsList className="bg-white shadow-sm rounded-lg py-1 flex justify-around mt-4 md:mt-0">
              <TabsTrigger value="residential" className="w-full py-2 text-sm md:text-base font-medium text-gray-600 rounded-md data-[state=active]:text-[#F85757] data-[state=active]:border-b-2 data-[state=active]:border-[#F85757]">
                Residential
              </TabsTrigger>
              <TabsTrigger value="commercial" className="w-full py-2 text-sm md:text-base font-medium text-gray-600 rounded-md data-[state=active]:text-[#F85757] data-[state=active]:border-b-2 data-[state=active]:border-[#F85757]">
                Commercial
              </TabsTrigger>
              <TabsTrigger value="vacant-land" className="w-full py-2 text-sm md:text-base font-medium text-gray-600 rounded-md data-[state=active]:text-[#F85757] data-[state=active]:border-b-2 data-[state=active]:border-[#F85757]">
                Vacant Land
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="mt-8">
            <TabsContent value="residential">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.slice(0, visibleProperties).map((property) => (
                  <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="relative w-full h-[200px]">
                      <Image
                        src={property.image}
                        alt={`Property ${property.id}`}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-white text-green-600 px-3 py-1 rounded-md text-sm z-10">
                        {property.status}
                      </span>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-xs md:text-sm font-semibold">#{property.id}</p>
                      <p className="text-xs md:text-sm text-gray-600 mt-1">{property.address}</p>
                      <div className="flex items-center justify-between mt-4 text-gray-600 text-xs md:text-sm">
                        <div className="flex items-center space-x-1">
                          <Bed size={16} />
                          <span>{property.beds} Beds</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Bath size={16} />
                          <span>{property.baths} Baths</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <SquareCode size={16} />
                          <span>{property.sqft} Sq.Ft.</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="text-[#F85757] text-lg md:text-xl font-semibold">
                          ${property.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {visibleProperties < properties.length && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => {router.push("/properties");setVisibleProperties(6)}}
                    className="px-6 py-2 bg-[#F85757] text-white font-medium rounded-md hover:bg-red-600 transition"
                  >
                    Load More Properties
                  </button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="commercial">
              <p className="text-gray-500 text-sm md:text-base">No commercial listings available.</p>
            </TabsContent>

            <TabsContent value="vacant-land">
              <p className="text-gray-500 text-sm md:text-base">No vacant land listings available.</p>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default PropertiesListing;
