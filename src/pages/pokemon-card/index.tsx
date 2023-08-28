import FrameworkList from "@/components/Pokemon/List";
import ImageCarousel from "@/components/Pokemon/BackpackCarrosel";
import Card from "@/components/Pokemon/CardDescription";
import CardStats from "@/components/Pokemon/CardStats";
import PokemonCard from "@/components/Pokemon/pokemon-card/PokemonCard"
import CategorySelector from "@/components/Pokemon/CategoryBar";
import Meta from "@/components/common/Meta";
import Head from "next/head";
import styles from './styles.module.css'

export default function CartPage() {
  return (
    
    
    <div className={styles.bodyContainer}>
      <div className="grid grid-cols-4 gap-4">
     
          <div>
            <PokemonCard />
          </div>
          <div>
            <PokemonCard />
          </div>
          <div>
            <PokemonCard />
          </div>
          <div>
            <PokemonCard />
          </div>
       </div>
    </div>
  
  
  );
}