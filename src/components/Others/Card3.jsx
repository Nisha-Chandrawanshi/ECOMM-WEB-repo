import React, { useRef } from "react";
import {
  IoCartOutline,
  IoHeartOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

const Card3 = () => {
  const productImages = [
    "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22627834/2023/4/4/9d40c485-b35e-4b04-8d28-b975eb6c5e901680591065895ParkAvenueMenSetof2EuphoriaEauDeParfum-100mlEach2.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2021/9/BE/JD/GC/137131227/park-avenue-premium-perfume-500x500.png",
    "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/cdc0a4796d5ed37da346c26b68af605a",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUoiEgfmzJ8kuRbMcuGcBPVKKP9EWQmxGxNg&s",
    "https://www.bigbasket.com/media/uploads/p/xxl/40288539_1-park-avenue-eau-de-perfume-dynamo-premium-for-men-for-men-longlasting-fragrance.jpg",
    "https://5.imimg.com/data5/ECOM/Default/2023/2/TN/BL/TB/90021126/blpa-good-eter-50ml.png",
    "https://static.wixstatic.com/media/191fd4_45aeccd2398244f1b52853648c1546a3~mv2.jpg/v1/fill/w_520,h_522,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/191fd4_45aeccd2398244f1b52853648c1546a3~mv2.jpg",
    "https://images-static.nykaa.com/media/catalog/product/a/c/ac3eec58901277015792_1.jpg?tr=w-500",
    "https://5.imimg.com/data5/SELLER/Default/2023/4/301226828/KV/WW/GR/187722304/50ml-park-avenue-conquer-perfume-500x500.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbtnHSFKSZfq2owwjGtV-oBjHRzsKOUJPe0w&s",
    "https://img3.junaroad.com/uiproducts/20434219/pri_175_p-1700755664.jpg",
    "https://images-static.nykaa.com/media/catalog/product/c/3/c3ace578901277017574_2.jpg?tr=w-500",
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
      <div className="w-full flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">New Arrivals</h2>
        <button className="text-sm font-bold text-white bg-gray-900 py-2 px-4 rounded-full hover:bg-gradient-to-l focus:outline-none">
          View All
        </button>
      </div>
      <div className="w-full overflow-x-auto scrollbar-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          ref={sliderRef}
          style={{ overflowX: "auto", scrollBehavior: "smooth" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-64 mr-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-t-lg h-48 flex items-center justify-center bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-md"
                />
              </div>
              <div className="p-4 relative">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-lg text-gray-800">
                    {product.name}
                  </p>
                  <div className="flex">
                    <IoCartOutline
                      className="text-gray-800 bg-gray-200 p-1 h-8 w-auto rounded-full cursor-pointer mr-2 hover:bg-gray-300"
                      size={24}
                    />
                    <IoHeartOutline
                      className="text-red-500 bg-gray-200 p-1 h-8 w-auto rounded-full cursor-pointer hover:bg-gray-300"
                      size={24}
                    />
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-800">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
          <IoChevronBackOutline
            className="text-gray-800 bg-white border border-gray-300 rounded-full cursor-pointer p-2 shadow-md hover:shadow-lg"
            size={32}
            onClick={scrollLeft}
          />
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
          <IoChevronForwardOutline
            className="text-gray-800 bg-white border border-gray-300 rounded-full cursor-pointer p-2 shadow-md hover:shadow-lg"
            size={32}
            onClick={scrollRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Card3;
