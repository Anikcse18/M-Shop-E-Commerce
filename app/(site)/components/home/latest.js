import Image from "next/image";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDateRange } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../../../../components/common/button";

const LatestNews = () => {
  const products = [
    {
      image: "/applewatch.png",
      brand: "Apple",
      date: "19 Sep 2024",
      userCount: 453,
      title:
        "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
      description:
        "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
    },

    {
      image: "/pcb.png",
      brand: "Samsung",
      date: "15 Aug 2024",
      userCount: 320,
      title:
        "Samsung Galaxy delivers cutting-edge performance and sleek design.",
      description:
        "The latest model of the Galaxy series comes with innovative features, offering an immersive experience for tech enthusiasts.",
    },
    {
      image: "/iphoneipod.png",
      brand: "Sony",
      date: "03 Jul 2024",
      userCount: 220,
      title:
        "Experience unmatched sound quality with Sony's latest headphones.",
      description:
        "Sony's new headphones offer premium audio experience with noise-cancellation features, perfect for music lovers.",
    },
  ];

  return (
    <div className="pt-5 lg:p-8 bg-[#F2F4F5] ">
      <section className="container mt-10">
        <h1 className="text-center text-3xl font-semibold ">Latest News</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8 ">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="border-[1px] bg-[#FFFFFF] p-3 lg:p-5 max-w-[360px] lg:max-w-fit items-center box-border m-4 overflow-hidden"
            >
              <Image
                src={product.image} // Use the product's imageUrl
                alt="" // Use the product's name for alt text
                width={360}
                height={248}
                className="w-[360px] h-[248px]"
              />
              <div className="flex justify-start space-x-3 mt-6">
                <div className="flex items-center gap-2 lg:text-lg">
                  <CgProfile className="text-[#FA8232]" />
                  <p className="text-gray-500"> {product.brand}</p>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <MdOutlineDateRange className="text-[#FA8232]" />
                  <p className="text-gray-500"> {product.date}</p>
                </div>
                <div className="flex items-center gap-2 lg:text-lg">
                  <BsChatDots className="text-[#FA8232]" />
                  <p className="text-gray-500"> {product.userCount}</p>
                </div>
              </div>
              <div className="mt-3 space-y-4">
                <figcaption className="text-xl font-bold line-clamp-2">
                  {product.title}
                </figcaption>
                <article className="text-[#77878F] line-clamp-2 lg:line-clamp-3">
                  {product.description}
                </article>
                {/* <button className="hover:bg-[#FA8232] mt-5 flex items-center gap-1 border-[1px] border-[#FA8232] text-[#FA8232] hover:text-white text-sm lg:text-base font-bold px-2 lg:p-3 py-2 rounded-[3px] transition duration-300 ease-in-out">
                  READ MORE <FaArrowRightLong />
                </button> */}
                <Button
                  name="Read More "
                  icon={<FaArrowRightLong />}
                  className="hover:bg-[#FA8232] mt-5 flex items-center gap-1 border-[1px] border-[#FA8232] text-[#FA8232] hover:text-white text-sm lg:text-base font-bold px-2 lg:p-3 py-2 rounded-[3px] transition duration-300 ease-in-out w-max"
                />
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default LatestNews;
