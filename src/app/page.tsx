"use client";
import BlogSection from "@/components/BlogSection/BlogSection";
import HeroSection from "@/components/HeroSection.tsx/HeroSection";
import Navbar from "@/components/Navbar.tsx/Navbar";
import PropertyCards from "@/components/PropertiesCard/PropertyCards";
import { useState } from "react";
import { Filters } from "@/components/types/filters";

export default function Homepage() {
  const propList = [
    {
      id: 1,
      title: "2 BHK Flat for Sale in Malad, Mumbai",
      location: "Malad West, Mumbai",
      price: "₹ 58 Lacs",
      size: "2691 sqft",
      status: "Ready To Move",
      imgSrc: "/property1.jpg",
      hasVideo: true,
      photosCount: 11,
    },
    {
      id: 2,
      title: "3 BHK Flat for Sale in Andheri, Mumbai",
      location: "Andheri East, Mumbai",
      price: "₹ 75 Lacs",
      size: "3000 sqft",
      status: "Under Construction",
      imgSrc: "/property2.jpg",
      photosCount: 11,
    },
    {
      id: 3,
      title: "2 BHK Flat for Sale in Borivali, Mumbai",
      location: "Borivali West, Mumbai",
      price: "₹ 60 Lacs",
      size: "2450 sqft",
      status: "Ready To Move",
      imgSrc: "/property3.jpg",
      hasVideo: true,
      photosCount: 11,
    },
    {
      id: 4,
      title: "1 BHK Flat for Sale in Kandivali, Mumbai",
      location: "Kandivali East, Mumbai",
      price: "₹ 42 Lacs",
      size: "1900 sqft",
      status: "Ready To Move",
      imgSrc: "/property4.jpg",
      hasVideo: true,
      photosCount: 11,
    },
    {
      id: 5,
      title: "3 BHK Luxury Apartment in Bandra, Mumbai",
      location: "Bandra West, Mumbai",
      price: "₹ 1.5 Cr",
      size: "3500 sqft",
      status: "Under Construction",
      imgSrc: "/property5.jpg",
      hasVideo: true,
      photosCount: 11,
    },
    {
      id: 6,
      title: "2 BHK Flat for Sale in Powai, Mumbai",
      location: "Powai, Mumbai",
      price: "₹ 80 Lacs",
      size: "2600 sqft",
      status: "Ready To Move",
      imgSrc: "/property6.jpg",
      hasVideo: true,
      photosCount: 11,
    },
    {
      id: 7,
      title: "Studio Apartment in Navi Mumbai",
      location: "Vashi, Navi Mumbai",
      price: "₹ 30 Lacs",
      size: "1500 sqft",
      status: "Ready To Move",
      imgSrc: "/property7.jpg",
      photosCount: 11,
    },
    {
      id: 8,
      title: "3 BHK Flat for Sale in Goregaon, Mumbai",
      location: "Goregaon West, Mumbai",
      price: "₹ 70 Lacs",
      size: "3100 sqft",
      status: "Under Construction",
      imgSrc: "/property8.jpg",
      photosCount: 11,
    },
    {
      id: 9,
      title: "2 BHK Flat in Thane, Mumbai",
      location: "Thane West, Mumbai",
      price: "₹ 55 Lacs",
      size: "2600 sqft",
      status: "Ready To Move",
      imgSrc: "/property9.jpg",
      hasVideo: true,
      photosCount: 11,
    },
    {
      id: 10,
      title: "1 BHK Apartment in Dadar, Mumbai",
      location: "Dadar East, Mumbai",
      price: "₹ 48 Lacs",
      size: "2100 sqft",
      status: "Ready To Move",
      imgSrc: "/property10.jpg",
      photosCount: 11,
    },
  ];

  const [filters, setFilters] = useState<Filters>({
    search: "",
    propertyType: "",
    budget: "",
  });

  return (
    <>
      <Navbar />
      <HeroSection onSearch={setFilters} />
      <PropertyCards propertyData={propList} filters={filters} />
      <BlogSection />
    </>
  );
}
