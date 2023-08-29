import Link from "next/link";
import ActiveLinkImprove from "src/components/layout/ActiveLinkImprove";
import { NavData } from "src/model/NavData";
import backpack from "@/public/assets/backpack_logo.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiFillFire } from "react-icons/ai";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiFillPlaySquare } from "react-icons/ai";
// import guy from "@/public/assets/guy.jpg";
// import quayMat from "@/public/assets/quayMat.jpg";

import shirtLanding from "@/public/assets/Shirt-landing.png";
import shoeLanding from "@/public/assets/Shoe-landing.png";
import sunglassesLanding from "@/public/assets/Sunglasses-landing.png";
import Head from "next/head";
import Meta from "@/components/common/Meta";
import PokemonCard from "@/components/Pokemon/pokemon-card/PokemonCard";

const navItems = [
  new NavData("Men"),
  new NavData("Women"),
  new NavData("Children"),
  new NavData("Shoes"),
  new NavData("Accessory"),
];

// first:before:absolute first:before:py-1 first:before:px-3 first:before:rounded-full first:before:bg-primary-color first:before:-top-6 first:before:left-7 first:before:content-['new'] first:before:text-center
// intend to make message box but it's hard to make arrow parts
const HomePage = () => {
  return (
    <>
      <Meta
        title="Lighthouse | Won't let you down"
        description="Lighthouse used to be my everything."
        image="/preview2.png"
      />

      <div className="max-w-[1290px] mx-auto pt-[50px] ">
        <div className="flex justify-between md:flex-col">
          <Link href="/" passHref>
            <a
              className="text-[37px] relative -translate-x-8
          xs:translate-y-5
          md:translate-x-32 md:translate-y-0
          w-[200px]
          md:mt-5"
            >
              <span className="font-extrabold">Evac</span>
              <span className="font-normal drop-shadow-logo">Packs</span>
              <div className="absolute top-[-3px] right-[49px] -z-10 h-14 w-14 md:right-[365px] md:top-[-2px]">
                <Image src={backpack} alt="the sun | cosmestic content" />
              </div>
            </a>
          </Link>
          {/* <div className="flex items-center shadow-md rounded-lg px-3 md:hidden">
            <FaSearch size={20} className="" />
            <input text="text" placeholder="Search" className="py-3 px-5" />
            <div className="border-l-2 pl-3">
              <HiOutlineShoppingCart size={20} />
            </div>
          </div> */}
        </div>
        <div className="flex items-start gap-20 mt-[70px] md:mt-5 md:flex-col py-4">
          <div className="mt-10">
            <h2 className="text-3xl font-semibold mb-5">Featured Backpacks</h2>
            <div className="grid grid-cols-4 m-10 md:grid-cols-4 lg:grid-cols-4 gap-80">
              <div className="pokemon-card m-2">
                <PokemonCard 
                  packName={"red"}/>
              </div>
              <div className="pokemon-card m-2">
                <PokemonCard
                  packName={"blue"} />
              </div>
              <div className="pokemon-card m-2">
                <PokemonCard
                  packName={"yellow"} />
              </div>
              <div className="pokemon-card m-2">
                <PokemonCard
                  packName={"green"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
{
  /* <div className="hidden">
        <h1 className="text-white">
          7:25a.m 3/3/2022 Thi ra la mot giac mo. Lighthouse duy nhat ma toi co,
          gio la chiec website nay.
        </h1>
        <p className="text-white">
          6:00 9/3/2022 Lai la 1 giac mo dep... em vui ve noi chuyen voi toi
        </p>
      </div> */
}
