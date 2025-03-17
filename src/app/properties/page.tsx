"use client"; 
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, SquareCode } from "lucide-react";
import Image from "next/image";
import Data from "@/data/PropertyHeader.json";

function PropertiesPage() {
  const properties = Data.properties;

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-8">
          All Properties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="shadow-md rounded-xl overflow-hidden">
              <div className="relative w-full h-[200px]">
                <Image
                  src={property.image}
                  alt={`Property ${property.id}`}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-white text-green-600 px-3 py-1 rounded-md text-sm">
                  {property.status}
                </Badge>
              </div>
              <CardHeader>
                <p className="text-gray-500 text-xs font-semibold">#{property.id}</p>
                <p className="text-sm text-gray-700 mt-1">{property.address}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-gray-600 text-xs md:text-sm">
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
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-[#F85757] text-lg md:text-xl font-semibold">
                    ${property.price}
                  </span>
                  <Button variant="outline">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertiesPage;
