import ProductList from "./ProductList";
import Product from "src/model/Product";
import Filter from "./Filter/Filter";
import ChatComponent from "../../Chat/ChatComponent";

interface AppProps {
  productsList: Product[];
}

export default function MainContent({ productsList }: AppProps) {
  return (
    
    <div className="grid grid-cols-product-category gap-x-4 items-start
    lg:grid-cols-[180px_1fr]
    sm:grid-cols-1
    ">
      <div>
        <Filter productsList={productsList} />
        <ChatComponent />
      </div>
      <ProductList productsList={productsList} />
      
   </div>
   
  
  );
}
