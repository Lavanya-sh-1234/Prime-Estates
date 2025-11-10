"use client";
import { useState } from "react";
import BlogSection from "../BlogSection/BlogSection";
import HeroSection from "../HeroSection/HeroSection";
import Navbar from "../Navbar.tsx/Navbar";
import PropertyCards, { Property } from "../PropertiesCard/PropertyCards";
import { Filters } from "../types/filters";

type HomeProps = {
  propList: Property[]
  authToken?: string | null;
}

const Home = ({ propList, authToken }: HomeProps )=> {
  console.log("authToken", authToken);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    propertyType: "",
    budget: "",
  });
  return (
    <>
      <Navbar authToken={authToken} />
      <HeroSection onSearch={setFilters} />
      <PropertyCards propertyData={propList} filters={filters} />
      <BlogSection />
    </>
  );
};

export default Home;
