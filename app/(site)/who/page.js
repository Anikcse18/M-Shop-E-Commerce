import React from "react";
import Image from "next/image";
import Team from "@/components/who/team";

const Who = () => {
  const features = [
    { text: "Great 24/7 customer services." },
    { text: "600+ Dedicated employees." },
    { text: "50+ Branches all over the world." },
    { text: "Over 1 Million Electronics Products." },
  ];
  return (
    <div className="mt-14">
      <div className="container ">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-1">
            <div className="max-w-36 text-center">
              <p className="py-2 px-4 bg-[#2DA5F3] public-sans uppercase text-white">
                Who We Are
              </p>
            </div>

            <div className="max-w-[536px] mt-4">
              <h1 className="text-[40px] public-sans font-semibold ">
                Kinbo - largest electronics retail shop in the world.
              </h1>
              <p className="text-md mt-4 text-[#475156] public-sans">
                Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit
                vestibulum risus, ac tincidunt diam lectus id magna. Praesent
                maximus lobortis neque sit amet rhoncus. Nullam tempus lectus a
                dui aliquet, non ultricies nibh elementum. Nulla ac nulla dolor.
              </p>

              <div className="mt-6 space-y-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Image src="/tick.png" width={20} height={20} alt="Tick" />

                    <p className="public-sans">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/who/who.png"
              width={648}
              height={536}
              alt="Who We are"
            />
          </div>
        </div>
        <Team />
      </div>
      <div className="relative  w-full h-96 mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/50 to-[#FFFFFF]/5"></div>
        <div className="absolute flex flex-col space-y-3 inset-14 md:max-w-[1320px] md:mx-auto xl:px-0 md:px-3">
          <h1 className="text-3xl font-semibold public-sans text-[#191C1F] max-w-80">
            Your trusted and reliable retail shop
          </h1>
          <p className="text-lg text-[#475156] public-sans max-w-[420px] line-clamp-3">
            Praesent sed semper metus. Nunc aliquet dolor mauris, et fringilla
            elit gravida eget. Nunc consequat auctor urna a placerat.
          </p>
          <button className="w-16 md:w-20 h-16 md:h-20 rounded-full flex items-center justify-center bg-[#FA8232] hover:bg-gray-600">
            <Image
              src="/who/play.png"
              width={20}
              height={20}
              className="w-4 h-4"
              alt="Player"
            />
          </button>
        </div>

        <Image
          src="/who/video.jpeg"
          alt="Who We Are"
          width={500}
          height={300}
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};
export default Who;
