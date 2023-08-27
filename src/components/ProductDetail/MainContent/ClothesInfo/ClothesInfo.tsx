import { TiStarburst } from "react-icons/ti";
import { BsCheck } from "react-icons/bs";
import ClothesSelection from "./ClothesSelection";
import Tabbed from "./Tabbed/Tabbed";
import Product from "src/model/Product";

interface AppProps {
  singleProduct: Product;
}

export default function ClothesInfo({ singleProduct }: AppProps) {
  return (
    <div className="pt-[130px]">
      <div className="bg-white px-[30px] pt-[37px] pb-[25px] mb-[30px] relative ">
        <ClothesSelection singleProduct={singleProduct} />
      </div>
    </div>
  );
}
