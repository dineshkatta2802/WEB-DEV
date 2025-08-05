import React from 'react';
import { Data } from './Data';
import Images from './Images'; // Assuming this returns a path or URL based on a character object

const animeList = ["OnePiece", "Naruto", "Demon Slayer"];
const randomAnime = animeList[Math.floor(Math.random() * animeList.length)];

const selectedAnime = Data.filter((char) => char.AnimeName === randomAnime);

const randomAnimeChar = selectedAnime[Math.floor(Math.random() * selectedAnime.length)];

function Display({ details }) {
    if (!details) return null;

    return (
        <div>
            <img src={Images(details)} alt={details.CharName} />
            <p><strong>Character:</strong> {details.CharName}</p>
            <p><strong>Powers:</strong> {details.Power}</p>
            <p><strong>Attack Methods:</strong> {details.Attack_Methods.join(', ')}</p>
        </div>
    );
}

export default function Main() {
    return (
        <div>
            <Display details={randomAnimeChar} />
        </div>
    );
}
