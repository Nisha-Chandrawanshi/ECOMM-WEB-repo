import React from "react";
import {
  IoCartOutline,
  IoHeartOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

const Card4 = () => {
  const categories = [
    {
      name: "Electronics",
      image:
        "https://www.hokmakeup.com/cdn/shop/files/Milani_C_P_Foundation.png?v=1718019386",
    },
    {
      name: "Fashion",
      image:
        "https://www.hokmakeup.com/cdn/shop/files/OW_Cleansing_Face_Wash_3.png?v=1716279907",
    },
    {
      name: "Home & Garden",
      image:
        "https://www.hokmakeup.com/cdn/shop/files/Lamel_Lip_Oil_3.png?v=1716279908",
    },
    {
      name: "Sports",
      image:
        "https://www.hokmakeup.com/cdn/shop/files/Oleo_Expert_Fast_Growth_Shampoo_8_in_1_3.png?v=1716279907",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Product 1",
      price: 299,
      rating: 4,
      image:
        "https://media6.ppl-media.com//tr:h-235,w-235,c-at_max,dpr-2/static/img/product/91132/faces-ultime-pro-velvet-matte-lipstick-bonded-8-4-5-g_1_display_1432627428_055ab61d.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 199,
      rating: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93TEGrMIao3u8vmH_-QR71R-UrxnihgFpyw&s",
    },
    {
      id: 3,
      name: "Product 3",
      price: 99,
      rating: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vNAhusjCgKo5wiV5HTm-2u0hGyg6ipsKUw&s",
    },
    {
      id: 4,
      name: "Product 4",
      price: 909,
      rating: 2,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/8a35afd0-6a69-40e1-bbd1-d42685312bd5.jpg?ts=1718749314",
    },
  ];

  return (
    <div className="w-full px-3 md:px-8">
      {/* Hero Section */}
      <div className="w-full h-auto object-contain">
        <img src="https://www.lakmeindia.com/cdn/shop/files/2560x586_Welcome_Offer_banner_desktop_cc6452bc-7c17-4920-b632-300243c29ac9.jpg?v=1718106049"></img>
      </div>
      {/* <section className="relative w-full h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Discover the best products at unbeatable prices
          </p>
          <button className="bg-white text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </section> */}

      {/* Category Grid */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 mb-4 overflow-hidden rounded-full shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Products
        </h2>
        <div className="flex lg:justify-center overflow-x-auto justify-start scroll-smooth lg:grid-cols-4 lg:gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-64 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 m-4 p-4 bg-white"
            >
              <div className="relative overflow-hidden rounded-lg h-48 w-auto flex items-center justify-center bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
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
                <p className="text-lg font-bold text-gray-800 mb-2">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Card4;
