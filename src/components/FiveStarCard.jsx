import React from "react";
import Profile1 from "../assets/img/p1.jpg";
import Profile2 from "../assets/img/p2.jpg";
import Profile3 from "../assets/img/p3.jpg";
import { IoStarSharp } from "react-icons/io5";
import "../index.css";

function FiveStarCard() {
  return (
    <div className="bg-[#00b6de] lg:h-screen lg:w-screen h-full w-full justify-center items-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-20 ">
        <div className="bg-white col-span-1 rounded-xl shadow-2xl p-5 sm:block">
          <div className="sm:flex sm:items-center block ">
            <img
              src={Profile1}
              alt=""
              className="w-16 h-16 object-cover rounded-full sm:mr-4"
            />
            <div>
              {" "}
              <h1 className="font-bold text-xl">John Doe</h1>
              <span className="text-sm text-gray-400">Marketing Manager</span>
            </div>
          </div>
          <p className="my-3 text-gray-700  text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rem, dolorum!
          </p>
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="flex items-center">
              <IoStarSharp className="text-yellow-500" />
              <IoStarSharp className="text-yellow-500" />
              <IoStarSharp className="text-yellow-500" />
              <IoStarSharp className="text-yellow-500" />
              <IoStarSharp className="text-yellow-500" />
            </span>
            <span className="text-sm text-gray-500">
              Reviewed on 01/01/2023
            </span>
          </div>
        </div>
        <div className="bg-white col-span-1 rounded-xl shadow-2xl p-5 ">
          <div className="sm:flex sm:items-center block">
            <img
              src={Profile2}
              alt=""
              className="w-16 h-16 object-cover rounded-full mr-4"
            />
            <div>
              {" "}
              <h1 className="font-bold text-xl">Mark Wood</h1>
              <span className="text-sm text-gray-400">Graphic Designer</span>
            </div>
          </div>
          <p className="my-3 text-gray-700  text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rem, dolorum!
          </p>
          <div className="md:flex items-center justify-between">
            <span className="flex items-center">
              <IoStarSharp className="text-yellow-500" />
              <IoStarSharp className="text-yellow-500" />
              <IoStarSharp className="text-yellow-500" />
              <IoStarSharp className="text-yellow-500" />
              <IoStarSharp className="text-yellow-500" />
            </span>
            <span className="text-sm text-gray-500">
              Reviewed on 01/01/2023
            </span>
          </div>
        </div>
        <div className="bg-white col-span-1 rounded-xl shadow-2xl p-5 ">
          <div className="sm:flex sm:items-center block">
            <img
              src={Profile3}
              alt=""
              className="w-16 h-16 object-cover rounded-full mr-4"
            />
            <div>
              {" "}
              <h1 className="font-bold text-xl">Mery Shad</h1>
              <span className="text-sm text-gray-400">Web Designer</span>
            </div>
          </div>
          <p className="my-3 text-gray-700  text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rem, dolorum!
          </p>
          <div className="md:flex items-center justify-between">
            <span className="flex items-center">
              <IoStarSharp className="text-yellow-500" />
              <IoStarSharp className="text-yellow-500" />
              <IoStarSharp className="text-yellow-500" />
              <IoStarSharp className="text-yellow-500" />
              <IoStarSharp className="text-yellow-500" />
            </span>
            <span className="text-sm text-gray-500">
              Reviewed on 01/01/2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiveStarCard;
