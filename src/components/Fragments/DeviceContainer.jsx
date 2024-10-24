import React from "react";

const devices = [
  {
    id: 1,
    name: "Smartphone",
    image: "/images/smartphone.svg",
  },
  {
    id: 2,
    name: "Tablet",
    image: "/images/tablet.svg",
  },
  {
    id: 3,
    name: "Smart TV",
    image: "/images/smartTv.svg",
  },
  {
    id: 4,
    name: "Laptops",
    image: "/images/laptop.svg",
  },
  {
    id: 5,
    name: "Gaming Consoles",
    image: "/images/consoles.svg",
  },
  {
    id: 6,
    name: "VR Headsets",
    image: "/images/vr.svg",
  },
];

function DeviceContainer() {
  return (
    <div className="w-full absolute px-10 top-[1508px] h-[640px] flex-col justify-start items-start gap-[60px] inline-flex">
      <div className="self-stretch h-[100px] pr-[150px] flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch text-white text-[28px] font-bold font-['Manrope'] leading-[42px]">
          We Provide you streaming experience across various devices.
        </div>
        <div className="self-stretch text-[#999999] text-base font-normal font-['Manrope'] leading-normal">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </div>
      </div>
      <div className="self-stretch grid grid-cols-3 grid-rows-2 gap-5">
        {devices.map((device) => (
          <div
            key={device.id}
            className="h-[224px] p-10 bg-gradient-to-bl from-[#e50000] from-[-2000%] to-[#0F0F0F] rounded-[10px] border border-neutral-800 flex-col justify-start items-start gap-6 inline-flex"
          >
            <div className="self-stretch justify-start items-center gap-3 inline-flex">
              <div className="p-3 bg-[#141414] rounded-[10px] border border-[#1e1e1e] justify-start items-start gap-2.5 flex">
                <div className="w-[30px] h-[30px] justify-center items-center flex">
                  <img
                    className="w-full h-full"
                    src={device.image}
                  />
                </div>
              </div>
              <div className="text-white text-xl font-semibold font-['Manrope'] leading-[30px]">
                {device.name}
              </div>
            </div>
            <div className=" text-[#999999] text-[14px] font-['Manrope'] leading-normal">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeviceContainer;
