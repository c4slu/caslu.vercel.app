import Link from "next/link";
import {
  BsBrightnessLowFill,
  BsFillHouseDoorFill,
  BsTerminalFill,
} from "react-icons/bs";

export default function NavBar() {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link
          href="./"
          className="bg-clip-text text-transparent font-extrabold text-3xl bg-gradient-to-r from-emerald-500 to-lime-600"
        >
          Caslu
        </Link>
        <div className="text-white">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:flex-row md:space-x-8 ">
            <Link href="./">
              <li className="group flex text-xs py-2 pl-3  transition-colors pr-4 hover:bg-gray-900 hover:text-white font-bold text-gray-300 rounded">
                Home
                <span className="opacity-0 ml-1.5 transition-opacity duration-300 flex items-center group-hover:opacity-100">
                  <BsFillHouseDoorFill />
                </span>
              </li>
            </Link>
            <Link href="./works">
              <li className="group flex text-xs py-2 pl-3 transition-colors pr-4 font-bold hover:text-white hover:bg-gray-900 text-gray-300 rounded">
                Works
                <span className="opacity-0 ml-1.5 transition-opacity duration-300 flex items-center group-hover:opacity-100">
                  <BsTerminalFill />
                </span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="items-center justify-center text-gray-300 hover:text-white hover:bg-gray-900 hidden w-full md:flex md:w-auto md:order-1">
          <a href="#" className="p-2 rounded">
            <BsBrightnessLowFill />
          </a>
        </div>
      </div>
    </nav>
  );
}