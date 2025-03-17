"use client"
// import Image from "next/image";

import HeroSection from "@/components/HeroSection";
import PropertiesListing from "@/components/PropertiesListing";

export default function Home() {
  return (
    <div className="bg-none">
      <HeroSection />
      <PropertiesListing />
    </div>
  );
}
