// import React from "react";
// import { FiArrowRight } from "react-icons/fi";

// const Advertisement = () => {
//   return (
//     <div className="flex justify-center items-center lg:px-8 md:px-8 px-3">
//       <div className="relative w-full rounded-md lg:h-24 md:h-28 h-28 bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-between px-4">
//         <button className="absolute -top-3 left-4 bg-[#B20808] text-[12px] text-white font-semibold px-5 py-1 rounded-full">
//           PROMOTION PRICES
//         </button>
//         <div className="flex lg:flex-row  md:flex-row gap-1 lg:gap-80  flex-col justify-between">
//           <p className="text-white lg:ml-6 md:ml-4 ml-1 font-medium md:text-lg text-md lg:text-2xl">
//             New generation Headphones are at Electron with limited stocks!
//           </p>
//           <div className="flex items-center  ml-1">
//             <button className=" text-white text-[10px] font-medium">
//               CHECK PRODUCTS
//             </button>
//             <span className="text-white font-semibold ml-1">
//               <FiArrowRight />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Advertisement;
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Advertisement = () => {
  return (
    <div className="flex justify-center items-center lg:px-8 md:px-8 px-3">
      <div className="relative w-full rounded-md lg:h-24 md:h-28 h-28 bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-between px-4">
        <button className="absolute -top-3 left-4 bg-[#B20808] text-[12px] text-white font-semibold px-5 py-1 rounded-full">
          PROMOTION PRICES
        </button>
        <div className="flex lg:flex-row  md:flex-row gap-1 lg:gap-80  flex-col justify-between">
          <p className="text-white lg:ml-6 md:ml-4 ml-1 font-medium md:text-lg text-md lg:text-2xl">
            New generation Headphones are at Electron with limited stocks!
          </p>
          <div className="flex items-center  ml-1">
            <button className=" text-white text-[10px] font-medium">
              CHECK PRODUCTS
            </button>
            <span className="text-white font-semibold ml-1">
              <FiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
