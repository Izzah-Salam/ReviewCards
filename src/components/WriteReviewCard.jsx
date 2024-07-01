import { FaStar } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
export default function WriteReviewCard() {
  return (
    <div className=" lg:h-screen lg:w-screen h-full flex flex-col justify-center items-center bg-slate-100">
      <div className="bg-white shadow-xl py-5 px-14  rounded-xl">
        <div className="flex my-5 items-center justify-between">
          <h1 className="text-2xl font-bold text-[#191b4a] mr-20">
            What Other <br /> thinks about the <br />
            product
          </h1>
          <div className="text-center text-[#191b4a] p-5 shadow-2xl rounded-2xl">
            <div className="flex justify-center items-center">
              <span>
                <FaStar className="text-yellow-500 text-xl" />
              </span>

              <span className="text-lg font-bold ml-2">4.8</span>
            </div>
            <span className="text-[12px] font-bold">
              Average <br /> Customer Rating
            </span>
          </div>
        </div>

        <div className="flex items-center mt-10 mb-5  relative w-full max-w-md">
          <IoIosSearch className="absolute left-3 text-[#191b4a] text-lg" />
          <input
            type="text"
            placeholder="Search Topic and Reviews"
            className="bg-gray-100 w-full pl-10 p-1 rounded-lg outline-none"
          />
        </div>

        <div>
          <h3 className="text-[#191b4a] text-sm font-bold my-2">Reviews</h3>
          <div className=" flex mb-3">
            <span className="text-[#191b4a] font-bold text-sm mr-1">5</span>

            <IoStarSharp className="text-yellow-500 text-lg" />

            <input type="range" className="w-full mr-2" />
            <span className="text-[#191b4a] text-sm font-semibold">163</span>
          </div>
          <div className=" flex mb-3">
            <span className="text-[#191b4a] font-bold text-sm mr-1">4</span>

            <IoStarSharp className="text-yellow-500 text-lg" />

            <input type="range" className="w-full mr-2" />
            <span className="text-[#191b4a] text-sm font-semibold">103</span>
          </div>
          <div className=" flex mb-3">
            <span className="text-[#191b4a] font-bold text-sm mr-1">3</span>

            <IoStarSharp className="text-yellow-500 text-lg" />

            <input type="range" className="w-full mr-2" />
            <span className="text-[#191b4a] text-sm font-semibold">0</span>
          </div>
          <div className=" flex mb-3">
            <span className="text-[#191b4a] font-bold text-sm mr-1">2</span>

            <IoStarSharp className="text-yellow-500 text-lg" />

            <input type="range" className="w-full mr-2" />
            <span className="text-[#191b4a] text-sm font-semibold">0</span>
          </div>
          <div className=" flex mb-3">
            <span className="text-[#191b4a] font-bold text-sm mr-1">1</span>

            <IoStarSharp className="text-yellow-500 text-lg" />

            <input type="range" className="w-full mr-2" />
            <span className="text-[#191b4a] text-sm font-semibold">0</span>
          </div>
        </div>

        <div>
          <button className="bg-[#191b4a] text-white rounded-full text-sm px-5 py-2 mt-10">
            write a review
          </button>
        </div>
      </div>
    </div>
  );
}
