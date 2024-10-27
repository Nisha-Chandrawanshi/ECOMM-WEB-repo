import React from "react";

const Card2 = () => {
  // Array of product objects
  const products = [
    {
      name: "Chair",
      originalPrice: 30,
      discountedPrice: "7 products",
      imageUrl:
        "https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2022/12/34-450x572.jpg",
    },
    {
      name: "Table",
      originalPrice: 35,
      discountedPrice: "5 products",
      imageUrl:
        "https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2022/12/21-450x572.jpg",
    },
    {
      name: "Lamb",
      originalPrice: 25,
      discountedPrice: "8 products",
      imageUrl:
        "https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2022/12/17-450x572.jpg",
    },
    {
      name: "Bulb",
      originalPrice: 40,
      discountedPrice: "2 products",
      imageUrl:
        "https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2023/03/39-2-450x572.jpg",
    },
  ];

  return (
    <div className="w-full lg:px-8 md:px-8 px-3 py-10">
      <h2 className="lg:text-2xl md:text-2xl text-lg font-semibold mb-4 lg:text-left md:text-left text-center">
        Shop by Category
      </h2>
      <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth scrollbar-hidden overflow-y-hidden">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex-none  w-1/2 gap-4 sm:w-1/2 md:w-1/4 lg:w-1/4 px-2 mb-4"
          >
            <div className="bg-white lg:h-40 md:h-40 h-44 mb-4 w-full rounded-lg p-4 flex lg:flex-row md:flex-col  flex-col">
              {/* Image Div */}
              <div className="flex items-center justify-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="rounded-full h-28 w-28"
                />
              </div>
              {/* Details Div */}
              <div className="flex flex-col   justify-center md:ml-0 ml-0  lg:ml-6 mt-2">
                <h3 className="text-lg font-medium lg:text-left md:text-center text-center ">
                  {product.name}
                </h3>

                <p className=" font-normal lg:text-left md:text-center text-center ">
                  {product.discountedPrice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2;
