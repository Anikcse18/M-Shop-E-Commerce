import Image from "next/image";
import React from "react";

const Flashsell = () => {
  const flashsell = [
    {
      category: "FLASH SALE TODAY",
      products: [
        {
          id: 1,
          name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear",
          price: 200,
          imageUrl: "/1.png",
        },
        {
          id: 2,
          name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear",
          price: 200,
          imageUrl: "/2.png",
        },
        {
          id: 3,
          name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear",
          price: 200,
          imageUrl: "/3.png",
        },
      ],
    },
  ];
  const bestseller = [
    {
      category: "BEST SELLERS",
      products: [
        {
          id: 4,
          name: "Samsung Galaxy S21 5G - 5G connectivity, advanced camera.",
          price: 999.99,
          imageUrl: "/4.png",
        },
        {
          id: 5,
          name: "Galaxy 12 Mini 512GB - 5G, gaming optimized.",
          price: 799.99,
          imageUrl: "/5.png",
        },
        {
          id: 6,
          name: "Sony DSCHX8 Camera - High zoom capabilities.",
          price: 349.99,
          imageUrl: "/6.png",
        },
      ],
    },
  ];
  const toprated = [
    {
      category: "TOP RATED",
      products: [
        {
          id: 7,
          name: "Portable Washing Machine, 11lbs Capacity - Compact for Small Spaces",
          imageUrl: "/7.png",
          price: 199.99,
        },
        {
          id: 8,
          name: "Sony Camera with High Zoom for Quality Photos",
          imageUrl: "/8.png",
          price: 349.99,
        },
        {
          id: 9,
          name: "Dell Optiplex All-in-One Monitor for Office Use",
          imageUrl: "/9.png",
          price: 899.99,
        },
      ],
    },
  ];
  const newarrivals = [
    {
      category: "NEW ARRIVAL",
      products: [
        {
          id: 10,
          name: "TOZO T6 Wireless Earbuds - Bluetooth & Waterproof",
          imageUrl: "/10.png",
          price: 39.99,
        },
        {
          id: 11,
          name: "JBL FLIP 4 Waterproof Bluetooth Speaker",
          imageUrl: "/11.png",
          price: 79.99,
        },
        {
          id: 12,
          name: "Wyze Cam Pan v2 - Indoor Smart Camera with 1080p",
          imageUrl: "/12.png",
          price: 49.99,
        },
      ],
    },
  ];

  return (
    <section className="container public-sans mt-10">
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* Flash Sell */}
        <div className="flex flex-col space-y-2">
          {flashsell.map((categoryItem) => (
            <div key={categoryItem.category} className="space-y-4">
              <h1 className="text-base font-bold uppercase">
                {categoryItem.category}
              </h1>
              {categoryItem.products.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-6 items-center border-[1px] p-2 duration-300 hover:shadow-md"
                >
                  <div className="flex-shrink">
                    <Image
                      src={product.imageUrl} // Use the product's imageUrl
                      alt={product.name} // Use the product's name for alt text
                      width={90}
                      height={90}
                      className="w-[90px] h-[90px]"
                    />
                  </div>
                  <div className="flex-grow text-sm text-[#191C1F]">
                    <p>{product.name}</p> {/* Display the product's name */}
                    <p className="text-blue-500 font-semibold mt-1">
                      ${product.price}
                    </p>{" "}
                    {/* Display the product's price */}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Best Seller */}
        <div className="flex flex-col space-y-2">
          {bestseller.map((categoryItem, idx) => (
            <div key={idx} className="space-y-4">
              <h1 className="text-base font-bold uppercase">
                {categoryItem.category}
              </h1>
              {categoryItem.products.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-6 items-center border-[1px] p-2 duration-300 hover:shadow-md"
                >
                  <div className="flex-shrink">
                    <Image
                      src={product.imageUrl} // Use the product's imageUrl
                      alt={product.name} // Use the product's name for alt text
                      width={90}
                      height={90}
                      className="w-[90px] h-[90px]"
                    />
                  </div>
                  <div className="flex-grow text-sm text-[#191C1F]">
                    <p>{product.name}</p> {/* Display the product's name */}
                    <p className="text-blue-500 font-semibold mt-1">
                      ${product.price}
                    </p>
                    {/* Display the product's price */}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Toprated */}
        <div className="flex flex-col space-y-2">
          {toprated.map((categoryItem, idx) => (
            <div key={idx} className="space-y-4">
              <h1 className="text-base font-bold uppercase">
                {categoryItem.category}
              </h1>
              {categoryItem.products.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-6 items-center border-[1px] p-2 duration-300 hover:shadow-md"
                >
                  <div className="flex-shrink">
                    <Image
                      src={product.imageUrl} // Use the product's imageUrl
                      alt={product.name} // Use the product's name for alt text
                      width={90}
                      height={90}
                      className="w-[90px] h-[90px]"
                    />
                  </div>
                  <div className="flex-grow text-sm text-[#191C1F]">
                    <p>{product.name}</p> {/* Display the product's name */}
                    <p className="text-blue-500 font-semibold mt-1">
                      ${product.price}
                    </p>
                    {/* Display the product's price */}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* New Arrivals */}
        <div className="flex flex-col space-y-2">
          {newarrivals.map((categoryItem, idx) => (
            <div key={idx} className="space-y-4">
              <h1 className="text-base font-bold uppercase">
                {categoryItem.category}
              </h1>
              {categoryItem.products.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-6 items-center border-[1px] p-2 duration-300 hover:shadow-md"
                >
                  <div className="flex-shrink">
                    <Image
                      src={product.imageUrl} // Use the product's imageUrl
                      alt={product.name} // Use the product's name for alt text
                      width={90}
                      height={90}
                      className="w-[90px] h-[90px]"
                    />
                  </div>
                  <div className="flex-grow text-sm text-[#191C1F]">
                    <p>{product.name}</p> {/* Display the product's name */}
                    <p className="text-blue-500 font-semibold mt-1">
                      ${product.price}
                    </p>
                    {/* Display the product's price */}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Flashsell;
const categorizedProducts = [
  {
    category: "FLASH SALE TODAY",
    products: [
      {
        id: 1,
        name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear",
        image: "1.png",
        details:
          "Bose Sport Earbuds with secure fit and sweat resistance, perfect for workouts.",
        price: 149.99,
      },
      {
        id: 2,
        name: "Simple Mobile 4G LTE Prepaid Smartphone",
        image: "2.png",
        details: "Simple Mobile prepaid smartphone with 4G LTE connectivity.",
        price: 79.99,
      },
      {
        id: 3,
        name: "4K UHD LED Smart TV with Chromecast Built-in",
        image: "3.png",
        details:
          "Smart TV with 4K resolution and built-in Chromecast for streaming.",
        price: 399.99,
      },
    ],
  },
  {
    category: "BEST SELLERS",
    products: [
      {
        id: 4,
        name: "Samsung Galaxy S21 5G",
        image: "4.png",
        details:
          "Samsung Galaxy S21 with 5G connectivity and advanced camera features.",
        price: 999.99,
      },
      {
        id: 5,
        name: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone",
        image: "5.png",
        details:
          "Galaxy 12 Mini with 512GB storage, 5G connectivity, optimized for gaming.",
        price: 799.99,
      },
      {
        id: 6,
        name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
        image: "6.png",
        details:
          "Sony camera with high zoom capabilities for capturing distant objects.",
        price: 349.99,
      },
    ],
  },
  {
    category: "TOP RATED",
    products: [
      {
        id: 7,
        name: "Portable Washing Machine, 11lbs Capacity Model 18NMF",
        image: "7.png",
        details:
          "Compact washing machine with 11lbs capacity, suitable for small spaces.",
        price: 199.99,
      },
      {
        id: 8,
        name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
        image: "8.png",
        details:
          "Sony camera with high zoom capabilities for capturing high-quality photos.",
        price: 349.99,
      },
      {
        id: 9,
        name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        image: "9.png",
        details:
          "Dell all-in-one computer monitor, ideal for office and home use.",
        price: 899.99,
      },
    ],
  },
  {
    category: "NEW ARRIVAL",
    products: [
      {
        id: 10,
        name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
        image: "10.png",
        details:
          "TOZO T6 wireless earbuds with Bluetooth connectivity and waterproof design.",
        price: 39.99,
      },
      {
        id: 11,
        name: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker",
        image: "11.png",
        details:
          "JBL FLIP 4 speaker with waterproof design and powerful sound.",
        price: 79.99,
      },
      {
        id: 12,
        name: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Camera",
        image: "12.png",
        details:
          "Wyze indoor camera with 1080p resolution, pan/tilt/zoom features, and Wi-Fi connectivity.",
        price: 49.99,
      },
    ],
  },
];

console.log(categorizedProducts);
