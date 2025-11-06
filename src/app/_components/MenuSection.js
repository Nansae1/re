import { Bahianita, Bytesized } from "next/font/google";
import { MenuCard } from "./MenuCard";
import { OptionsCard } from "./OptionsCard";

const options = [
  {
    text: "House",
    backgroundcolor: "orange",
  },
  {
    text: "Villa",
    backgroundcolor: "white",
  },
  {
    text: "Apartment",
    backgroundcolor: "white",
  },
];

const Menus = [
  {
    img: "./image.jpg",
    price: "$216,000",
    place: "Piney Hills",
    bedimg: "./Icon.png",
    bed: "4 Bedrooms",
    bathimg: "./Icon (1).png",
    bath: "2 Bathrooms",
    sizeimg: "./Icon (2).png",
    size: "2,150 sqft",
  },
  {
    img: "./river oak.jpg",
    price: "$450,000",
    place: "River Oak",
    bedimg: "./Icon.png",
    bed: "3 Bedrooms",
    bathimg: "./Icon (1).png",
    bath: "1,800 sqft",
    sizeimg: "./Icon (2).png",
    size: "2,150 sqft",
  },
  {
    img: "./maple.jpg",
    price: "$318,000",
    place: "Maple Glen",
    bedimg: "./Icon.png",
    bed: "5 Bedrooms",
    bathimg: "./Icon (1).png",
    bath: "3 Bathrooms",
    sizeimg: "./Icon (2).png",
    size: "2,850 sqft",
  },
  {
    img: "./Forest.jpg",
    price: "$325,000",
    place: "Forest Hill",
    bedimg: "./Icon.png",
    bed: "4 Bedrooms",
    bathimg: "./Icon (1).png",
    bath: "2 Bathrooms",
    sizeimg: "./Icon (2).png",
    size: "2,200 sqft",
  },
  {
    img: "./cedar.jpg",
    price: "$295,000",
    place: "Cedar Park",
    bedimg: "./Icon.png",
    bed: "3 Bedrooms",
    bathimg: "./Icon (1).png",
    bath: "2 Bathrooms",
    sizeimg: "./Icon (2).png",
    size: "1,650 sqft",
  },
  {
    img: "./willow.jpg",
    price: "$425,000",
    place: "Willow Creek",
    bedimg: "./Icon.png",
    bed: "4 Bedrooms",
    bathimg: "./Icon (1).png",
    bath: "3 Bathrooms",
    sizeimg: "./Icon (2).png",
    size: "2,650 sqft",
  },
];

export const MenuSection = () => {
  return (
    <div className="flex flex-col items-center max-w-312 gap-8 m-26">
      <p className="text-[16px]">Explore Properties</p>
      <div className="flex gap-3">
        {options.map((option, index) => {
          return (
            <OptionsCard
              text={option.text}
              key={index}
              style={{ backgroundColor: option.backgroundcolor }}
            />
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-6">
        {Menus.map((menu, index) => {
          return (
            <MenuCard
              key={index}
              img={menu.img}
              price={menu.price}
              place={menu.place}
              bedimg={menu.bedimg}
              bed={menu.bed}
              bathimg={menu.bathimg}
              bath={menu.bath}
              sizeimg={menu.sizeimg}
              size={menu.size}
            />
          );
        })}
      </div>
      <button className="h-9 w-49 bg-orange-500 rounded-xl flex justify-center items-center text-white">
        Load more Listings
      </button>
    </div>
  );
};
