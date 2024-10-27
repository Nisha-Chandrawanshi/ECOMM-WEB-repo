import React, { useRef } from "react";
import {
  IoCartOutline,
  IoHeartOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import { TiStarOutline, TiStar } from "react-icons/ti";

const Card1 = () => {
  const productImages = [
    "https://cdn.shopify.com/s/files/1/0390/2985/files/GTFW-100ml_1080X1080_f5636970-a84d-4e62-933f-97cf8621be72_600x.jpg?v=1713186368",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBCMmpbztGMu1HTAPJmZKpclSI-OcMPCnMAw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJj812BxlBFHGAdt_aI10ZyOvzhjbaKIXvw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMR5TKh_bKNIOZT_PiKEqE0ppxyTERD14mfg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5aYPF9z3VHkdUJC3ecWryvN7koWv9Czgpw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsS8Wbt9BbXQLfIXYDKSLrCdyE9wW-b4K7g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGaWr8ZvyUrT_yGNAZfS-wUCpBhaW0ar-gHw&s",
    "https://static.langimg.com/thumb/94262668/navbharat-times-94262668.jpg?width=540&resizemode=3",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6sDfZAnXOGYxo2B2MU-kEqwZp0GAN06UGsLays60DP9g6tOm2T23oAfFl_2wh34yk1Ck&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEN8V4HGSJ92A0QxeGQDTHtzijexhAt9Af2BiN36M_fz-xU7qHgw_xC9zIcvCOPiQYdzY&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMFBKI_9E79PVytQPiIfUuy34kxBjP801JO68Od5B7WGSJZL6n0iKMN8scoj93PzQmgQ&usqp=CAU",
    "https://images-static.nykaa.com/media/catalog/product/1/6/169558b8901030858826_1.jpg?tr=cm-pad_resize",
  ];

  const products = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: Math.floor(Math.random() * 1000),
    rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
    image: productImages[index],
  }));

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col lg:gap-6 md:gap-6 gap-3 w-full px-3 md:px-8 py-8">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 py-2">New Arrivals</h2>
        <button className="text-sm font-bold text-white bg-gray-800 py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
          View All
        </button>
      </div>
      <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:scrollbar-hidden scroll-smooth scrollbar-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          ref={sliderRef}
          style={{ overflowX: "auto", scrollBehavior: "smooth" }}
        >
          {/* Shopping cart */}
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-60 mr-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-lg text-gray-800">
                    {product.name}
                  </p>
                  <div className="flex">
                    <IoCartOutline
                      className="text-white bg-gray-800 p-1 h-8 w-auto rounded-full cursor-pointer mr-2"
                      size={24}
                    />
                    <IoHeartOutline
                      className="text-red-500 bg-white border-[1px] border-gray-300 p-1 h-8 w-auto rounded-full cursor-pointer"
                      size={24}
                    />
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-800">
                  ${product.price}
                </p>
                <div className="flex items-center mt-2">
                  {Array.from({ length: product.rating }, (_, index) => (
                    <TiStar
                      key={index}
                      className="h-4 w-4 fill-current text-yellow-500 mr-1"
                    />
                  ))}
                  {Array.from({ length: 5 - product.rating }, (_, index) => (
                    <TiStarOutline
                      key={index}
                      className="h-4 w-4 fill-current text-gray-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation arrows */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
          <IoChevronBackOutline
            className="text-gray-800 bg-white border border-gray-300 rounded-full cursor-pointer p-1 shadow-md hover:shadow-lg"
            size={32}
            onClick={scrollLeft}
          />
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
          <IoChevronForwardOutline
            className="text-gray-800 bg-white border border-gray-300 rounded-full cursor-pointer p-1 shadow-md hover:shadow-lg"
            size={32}
            onClick={scrollRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Card1;
