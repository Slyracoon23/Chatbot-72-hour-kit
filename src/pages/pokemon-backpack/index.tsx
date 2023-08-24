import FrameworkList from "@/components/Pokemon/List";
import ImageCarousel from "@/components/Pokemon/BackpackCarrosel";
import Meta from "@/components/common/Meta";
import Head from "next/head";

export default function CartPage() {
  return (
    <>
      <Meta
        title="Your cart"
        description="Your cart is here. Buy now"
        image="/cart.jpg"
      />
      <ImageCarousel />;
    </>
  );
}
