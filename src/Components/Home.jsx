import React, { useState } from 'react';
import { useEffect } from "react";
import Background from '../Components/Background/Background'; // Import the Background component
import Navbar from '../Components/Navbar/Navbar'; // Import the Navbar component
import Hero from '../Components/Hero/Hero'; // Import the Hero component

const Home = () => {
   // Set initial state or fetch data as needed
   const [playStatus, setPlayStatus] = useState(2);
   const [heroCount, setHeroCount] = useState(false);
   const heroData =[
    {text1:"Dive into",text2:"what you love"},
   {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ] /* Fetch or define your hero data array */;

  useEffect(()=>{
    setInterval(()=> {
       setHeroCount((count)=>{return count===2?0:count+1 })
     },3000);
    },[])

  return (
    <div>
      {/* Render the Background component with the necessary props */}
      <Background playStatus={playStatus} heroCount={heroCount} />

      {/* Render the Navbar component */}
      <Navbar />

      {/* Render the Hero component with the necessary props */}
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default Home;
