import styles from './PokemonCard.module.css';
import React, { useState } from 'react';




export default function PokemonCard () {
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
    
    //appendTypes(data.types);
    //styleCard(themeColor);
  }
  /*let appendTypes = (types) => {
    types.forEach((item) => {
      let span = document.createElement("SPAN");
      span.textContent = item.type.name;
      document.querySelector(".types").appendChild(span);
    });
  };
  let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
    card.querySelectorAll(".types span").forEach((typeColor) => {
      typeColor.style.backgroundColor = color;
    });
  };*/
  

  
  return (
    <div className={styles.container}>
       <div className={styles.card}>
       <p className={styles.hp}>
          <span>HP</span>
            {hp}
        </p>
        <img src={imgSrc} />
        <h2 className={styles.pokeName}>{pokeName}</h2>
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