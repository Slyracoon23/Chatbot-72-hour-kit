import styles from './PokemonCard.module.css';
import React, { useState } from 'react';




export default function PokemonCard ( {packName} ) {
  const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };
  
  const url = " https://pokeapi.co/api/v2/pokemon/";
  //const card = document.getElementById("card");
  //const btn = document.getElementById("btn");
  const [hp, setHp] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [pokeName, setPokeName] = useState(null);
  const [statAttack, setStatAttack] = useState(null);
  const [statDefense, setStatDefense] = useState(null);
  const [statSpeed, setStatSpeed] = useState(null);

  const [types, setTypes] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("");

  

  //Generate Card
  let getPokeData = () => {
    // Generate a random number between 1 and 150
    let id = Math.floor(Math.random() * 150) + 1;
    // Combine the pokeapi url with pokemon id
    const finalUrl = url + id;
    const testUrl = "https://pokeapi.co/api/v2/pokemon/7";
    // Fetch generated URL
    fetch(finalUrl)
      .then((response) => response.json())
      .then((data) => {
        generateCard(data);
      });
  };
  
  let generateCard = (data) => {
    // Get necessary data and assign it to variables
    console.log(data);
    setHp(data.stats[0].base_stat);
    setImgSrc(data.sprites.other.dream_world.front_default);
    setPokeName(data.name[0].toUpperCase() + data.name.slice(1));
    setStatAttack(data.stats[1].base_stat);
    setStatDefense(data.stats[2].base_stat);
    setStatSpeed(data.stats[5].base_stat);
   
    // Set themeColor based on pokemon type
    const themeColor = typeColor[data.types[0].type.name];
    
    console.log(themeColor);
    
    setTypes(data.types.map(type => type.type.name));
    setBackgroundColor(`radial-gradient(circle at 50% 0%, ${themeColor} 36%, #ffffff 36%)`);
  }
  
  
  

  
  return (
    <div className={styles.container}>
       <div className={styles.card} style={{ background: backgroundColor }}>
       <p className={styles.hp}>
          <span>HP</span>
            {hp}
        </p>
        <img src="/assets/backpack-1.png" />
        <h2 className={styles.pokeName}>{packName}</h2>
        <div className={styles.types}>
         
        </div>
        <div className={styles.stats}>
          <div>
            <h3>{statAttack}</h3>
            <p>Attack</p>
          </div>
          <div>
            <h3>{statDefense}</h3>
            <p>Defense</p>
          </div>
          <div>
            <h3>{statSpeed}</h3>
            <p>Speed</p>
          </div>
        </div>
      <button className={styles.btn}
              onClick={getPokeData}
              >
                Generate
              </button>
    </div>
        
    
    </div>
   
    
   
  )
}

/*
<div>
        <p class="hp">
          <span>HP</span>
            {hp}
        </p>
        <img src={imgSrc} />
        <h2 class="poke-name">{pokeName}</h2>
        <div class="types">
         
        </div>
        <div class="stats">
          <div>
            <h3>{statAttack}</h3>
            <p>Attack</p>
          </div>
          <div>
            <h3>{statDefense}</h3>
            <p>Defense</p>
          </div>
          <div>
            <h3>{statSpeed}</h3>
            <p>Speed</p>
          </div>
        </div>
    
    
   </div>
   */