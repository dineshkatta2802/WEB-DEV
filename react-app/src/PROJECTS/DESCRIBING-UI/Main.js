import React from "react";
import { AnimeData } from "./Data";
import CharCard from "./CharCard";

export default function Main() {
  // Pick a random anime character
  const randomAnime = AnimeData[Math.floor(Math.random() * AnimeData.length)];

  // Pick a random attack method from that character
  const attackMethods = randomAnime.Attack_Methods;
  const randomAttack =
    attackMethods[Math.floor(Math.random() * attackMethods.length)];

  // Get the image corresponding to that attack
  const image = randomAnime.ImageId[randomAttack];
  console.log(image);

  return (
    <div
      style={{
        fontFamily: "'Trade Winds', system-ui",
        color : "white",
        width: "100%",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // centers horizontally
        justifyContent: "center", // optional: centers vertically
        background : "linear-gradient(45deg,#0d1b2a,#1b263b,#415a77)"
      }}
    >
      <CharCard
        AnimeName={randomAnime.AnimeName}
        CharName={randomAnime.CharName}
        Power={randomAttack}
        Image={image}
        Size={350}
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
            borderRadius : "10px",
            backgroundColor : "white",
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
