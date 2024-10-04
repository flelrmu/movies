import React, { useEffect, useState } from "react";
import mergeImages from "merge-images";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { type } = props;
  const [mergedImage, setMergedImage] = useState(null);

  useEffect(() => {
    mergeImages([
      { src: "/images/icon.svg", x: 20, y: 20, width: 60, height: 60 },
      { src: "/images/vector.svg", x: 0, y: 0, width: 30, height: 30 },
    ])
      .then((b64) => setMergedImage(b64))
      .catch((err) => console.error("Error merging images: ", err));
  }, []);

  return (
    <div className="w-full h-[80px] px-10 py-6 justify-between items-center inline-flex">
      <div className="w-[120px] h-[60px] justify-start items-center gap-[3px] inline-flex">
        <div>
          <Link
            to="/home"
            className="w-[40px] h-[40px] relative flex-col justify-center items-center flex"
          >
            {mergedImage && (
              <img
                src={mergedImage}
                alt="Merged Icon"
                className="w-[60px] h-[60px]"
              />
            )}
          </Link>
        </div>
        <div className="w-[80px]">
          <img src="/images/StreamVibe.svg" alt="" />
        </div>
      </div>
      <Navigation type={type} />
      <div className="justify-start gap-[30px] items-center flex">
        <img className="w-6 h-6 relative" src="/images/search.svg" alt="" />
        <img className="w-6 h-6 relative" src="/images/bell.svg" alt="" />
      </div>
    </div>
  );
}

const item = [
  {
    id: 1,
    name: "Home",
    link: "/home",
  },
  {
    id: 2,
    name: "Movies & Shows",
    link: "/movies",
  },
  {
    id: 3,
    name: "Support",
    link: "/support",
  },
  {
    id: 4,
    name: "Subscriptions",
    link: "/subscriptions",
  },
];

const Navigation = ({ type }) => {
  const [active, setActive] = useState(null); 

  const handleClick = (id) => {
    setActive(id);
  };
  if (type === "home") {
    return (
      <div className="px-[8px] py-2 bg-[#0f0f0f] rounded-[10px] border-2 border-[#1e1e1e] justify-start items-center flex">
        {item.map((item) => (
          <div
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={`px-5 py-2 rounded-lg justify-start items-center flex cursor-pointer group 
            ${
              active === item.id
                ? "bg-[#1a1a1a] border border-[#1a1a1a] text-white font-medium" 
                : " text-[#bfbfbf]" 
            }`}
        >
          <div className="text-sm font-normal font-['Manrope'] leading-[21px]">
            <Link to={item.link}>{item.name}</Link>
          </div>
        </div>
        ))}
      </div>
    );
  } else if (type === "movies") {
    return (
      <div className="px-[8px] py-2 bg-[#0f0f0f] rounded-[10px] border-2 border-[#1e1e1e] justify-start items-center flex">
        {item.map((item) => (
          <div
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={`px-5 py-2 rounded-lg justify-start items-center flex cursor-pointer 
            ${
              active === item.id
                ? "bg-[#1a1a1a] border border-[#1a1a1a] text-white font-medium" 
                : " text-[#bfbfbf]" 
            }`}
        >
          <div className="text-sm font-normal font-['Manrope'] leading-[21px]">
            <Link to={item.link}>{item.name}</Link>
          </div>
        </div>
        ))}
      </div>
    );
  } else if (type === "support") {
    return (
      <div className="px-[8px] py-2 bg-[#0f0f0f] rounded-[10px] border-2 border-[#1e1e1e] justify-start items-center flex">
        {item.map((item) => (
          <div
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={`px-5 py-2 rounded-lg justify-start items-center flex cursor-pointer 
            ${
              active === item.id
                ? "bg-[#1a1a1a] border border-[#1a1a1a] text-white font-medium" 
                : " text-[#bfbfbf]" 
            }`}
        >
          <div className="text-sm font-normal font-['Manrope'] leading-[21px]">
            <Link to={item.link}>{item.name}</Link>
          </div>
        </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="px-[8px] py-2 bg-[#0f0f0f] rounded-[10px] border-2 border-[#1e1e1e] justify-start items-center flex">
        {item.map((item) => (
          <div
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={`px-5 py-2 rounded-lg justify-start items-center flex cursor-pointer 
            ${
              active === item.id
                ? "bg-[#1a1a1a] border border-[#1a1a1a] text-white font-medium" 
                : " text-[#bfbfbf]" 
            }`}
        >
          <div className="text-sm font-normal font-['Manrope'] leading-[21px]">
            <Link to={item.link}>{item.name}</Link>
          </div>
        </div>
        ))}
      </div>
    );
  }
};

export default Navbar;
