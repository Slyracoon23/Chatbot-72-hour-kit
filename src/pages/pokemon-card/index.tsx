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
      <div className={styles.gridContainer}>
     
          <div>
            <PokemonCard 
              packName={"spectreseek"}/>
          </div>
          <div>
            <PokemonCard
              packName={"alterok"} />
          </div>
          <div>
            <PokemonCard
              packName={"gaudmire"} />
          </div>
          <div>
            <PokemonCard
              packName={"erevald"} />
          </div>
       </div>
    </div>
  
  
  );
}
