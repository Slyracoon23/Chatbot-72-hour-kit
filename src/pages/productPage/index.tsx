import ProductCategory from "@/components/ProductCategory/ProductCategory";
import ProductPage from "@/components/ProductPage/ProductPage"
import { MongoClient } from "mongodb";
import { GetStaticPaths, GetStaticProps } from "next";
import Product from "src/model/Product";
import Head from "next/head";
import Meta from "@/components/common/Meta";
type AppProps = {
  products: Product[];
};

export default function ProductPageComponent() {
  return (
    <>
      <Meta
        title="Lighthouse | Category"
        description="Lighthouse were my everything."
        image="/preview.png"
      />
      <ProductPage />;
    </>
  );
}

