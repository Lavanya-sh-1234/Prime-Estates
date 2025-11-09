"use client";

import Image from "next/image";
import {
  ChevronDownIcon,
  HeartIcon,
  DevicePhoneMobileIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex flex-wrap justify-between  items-center px-3 py-3 sm:px-8 md:px-12">
      <div className="flex gap-2 sm:gap-4 items-center flex-wrap">
        <Image
          alt="logo"
          src="/logo.jpg"
          height={60}
          width={50}
          className="h-10 w-auto sm:h-16"
        />
        <p className="text-lg sm:text-2xl font-semibold whitespace-nowrap">
          <span className="text-red-600">primeEstates</span>
          <span>.com</span>
        </p>
        <span className="flex gap-1 items-center text-xs sm:text-sm">
          Mumbai <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4" />
        </span>
      </div>

      <div className="flex gap-3 sm:gap-4 items-center text-xs sm:text-sm flex-wrap justify-end mt-2 sm:mt-0">
        <span className="flex items-center gap-1">
          Saved
          <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
        <span className="flex items-center gap-1">
          Download App
          <DevicePhoneMobileIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
        <span className="whitespace-nowrap">Post your Property</span>

        <div className="bg-red-600 text-white font-light text-xs sm:text-sm rounded h-6 sm:h-7 w-12 sm:w-14 flex justify-center items-center">
          <button
            suppressHydrationWarning
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>

        <span>
          <Bars3Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </span>
      </div>
    </nav>
  );
}
