import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  HomeIcon,
  CurrencyRupeeIcon,
  UserCircleIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";


export default function HeroSection() {
  return (
    <div className=" relative h-[40vh] w-full">
      <Image
        src="/heroImg.png"
        alt="hero-image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1600px"
        fill
        priority
        className="object-cover object-[right-bottom]"
      />
      <p className="absolute m-2 top-1/2 left-1/2 text-2xl font-bold -translate-y-1/2 -translate-x-1/2">
        <span className="text-black text-sm sm:text-xl md:text-2xl">Explore Real Estate </span>
        <span className="text-red-600 text-sm sm:text-xl md:text-2xl">in Mumbai</span>
      </p>
      <div className="absolute left-1/2 -translate-x-1/2 w-[90%] bottom-[-170px] sm:[bottom:-70px] md:[bottom:-90px]sm:w-[80%] md:w-[70%] lg:w-[65%] max-w-[1000px] bg-white shadow-lg p-5 rounded-lg">
        <div className="flex flex-wrap gap-2 sm-gap-3 justify-center text-sm font-bold text-gray-500">
          <span>Buy</span>
          <span>Rent</span>
          <span>New Projects</span>
          <span>PG</span>
          <span>Plot</span>
          <span>Commercial</span>
        </div>
        <div className="flex gap-2 sm:gap-4 mt-4 flex-col sm:flex-row flex-wrap">
          <div className="flex gap-2 items-center px-3 py-1  w-full sm:w-[60%]">
            <MapPinIcon className="h-6 w-6 text-red-500 " />
            <input
              type="text"
              placeholder="Search by BHK '2bhk in Mumbai'"
              className="w-full focus:outline-none p-2 placeholder:text-sm  md:placeholder:text-base"
            />
          </div>
          <div className="flex gap-2 items-center bg-purple-300 rounded-xl p-1 flex-shrink-0">
            <UserCircleIcon className="h-5 w-5 text-purple-600" />
            <span className="text-purple-600 text-sm font-bold bg-purple-300 rounded-2xl w-20">
              Nearby me
            </span>
          </div>
          <div className="flex gap-2 items-center flex-shrink-0">
            <CurrencyRupeeIcon className="h-5 w-5 text-red-600" />
            <span className="text-gray-300">Budget</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
          <div className="flex gap-2 items-center flex-shrink-0">
            <HomeIcon className="h-6 w-6 text-red-600" />
            <span className="text-gray-300 whitespace-nowrap">
              Property Type
            </span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
          <div className="flex gap-2 items-center bg-red-600 text-white px-4 py-2 rounded flex-shrink-0">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
