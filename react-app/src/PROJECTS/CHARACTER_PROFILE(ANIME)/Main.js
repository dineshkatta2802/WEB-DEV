import React from "react";
import { AnimeData } from "./Data";
import CharCard from "./CharCard";

export default function Main() {
  // Pick a random anime character
  const randomAnime = AnimeData[Math.floor(Math.random() * AnimeData.length)];

  // Pick a random attack method from that character
  const attackMethods = randomAnime.Attack_Methods;
  const randomAttack = attackMethods[Math.floor(Math.random() * attackMethods.length)];

  // Get the image corresponding to that attack
  const image = randomAnime.ImageId[randomAttack];
  console.log(image);

  //Getting to know the Captain
  const Captain = randomAnime.isCaptain === "YES";

  //CharLogger
  // ✅ Log the displayed data
  console.log("Currently Displayed:");
  console.log(`Anime: ${randomAnime.AnimeName}`);
  console.log(`Character: ${randomAnime.CharName}`);
  console.log(`Power Used: ${randomAttack}`);
  console.log("------------------------");


  return (
    <div
      style={{
        fontFamily: "'Trade Winds', system-ui",
        color : "white",
        width: "100%",
        minHeight: "100vh",
        // padding: "2px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // centers horizontally
        justifyContent: "center", // optional: centers vertically
        background : "linear-gradient(45deg,#0d1b2a,#1b263b,#415a77)"
      }}
    >
      {/* Importing Component */}
      <CharCard
        AnimeName={randomAnime.AnimeName}
        CharName={randomAnime.CharName}
        Power={randomAttack}
        Captain={Captain}
        Image={image}
        Size={300}
      />


      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", width: "100%" }}>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            width: "200px",
            height: "50px",
            cursor: "pointer",
            border: "1px solid white",
            borderRadius : "10px",
            background : "linear-gradient(315deg,#415a77)",
            fontSize : "17px",
            color : "white",
          }}
        >
          Fetch Again!
        </button>
      </div>
    </div>
  );
}
