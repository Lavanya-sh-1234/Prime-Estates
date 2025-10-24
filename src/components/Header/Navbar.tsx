import Image from "next/image";
import {
  ChevronDownIcon,
  HeartIcon,
  DevicePhoneMobileIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";


export default function Navbar()  {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Image alt="logo" src="/logo.jpg" height={80} width={60} />
        <span className="text-2xl">primeEstates.com</span>
        <span className="flex gap-1 items-center text-sm">
          Mumbai <ChevronDownIcon className="w-4 h-4" />
        </span>
      </div>
      <div className="flex gap-4 items-center">
        <span className="flex items-center gap-1 text-sm">
          Saved
          <HeartIcon className="w-6 h-6" />
        </span>
        <span className="flex items-center gap-1 text-sm">
          Download App
          <DevicePhoneMobileIcon className="w-5 h-5" />
        </span>
        <span>Post your Property</span>
        <div className="bg-red-600 text-white font-light text-sm rounded h-7 w-14 flex justify-center items-center">
          <button>Login</button>
        </div>
        <span>
          <Bars3Icon className="w-6 h-6" />
        </span>
      </div>
    </nav>
  );
}
