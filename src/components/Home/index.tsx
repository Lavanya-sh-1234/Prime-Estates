"use client";
import { useState } from "react";
import BlogSection from "../BlogSection/BlogSection";
import HeroSection from "../HeroSection.tsx/HeroSection";
import Navbar from "../Navbar.tsx/Navbar";
import PropertyCards from "../PropertiesCard/PropertyCards";
import { Filters } from "../types/filters";

const Home = ({ propList, authToken }: any) => {
  console.log("authToken", authToken);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    propertyType: "",
    budget: "",
  });
  return (
    <>
      <Navbar authToken={authToken}/>
      <HeroSection onSearch={setFilters} />
      <PropertyCards propertyData={propList} filters={filters} />
      <BlogSection />
    </>
  );
};

export default Home;
