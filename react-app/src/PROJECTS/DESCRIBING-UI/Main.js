import React from 'react';
import { AnimeData } from './Data';
import CharCard from './CharCard';


//function Sample(){
//     return(
//         <div>
//             
//         </div>
//     );
//}

export default function Main(){
    //Pickiing a random Anime
    const randomAnime = AnimeData[Math.floor(Math.random() * AnimeData.length)];
    //Picking the random Anime
    const attack = randomAnime.Attack_Methods;
    const randomAttack = attack[Math.floor(Math.random() * attack.length)];

    //Picking image
    const image = randomAnime.ImageId[randomAttack];
    return(
        <div>
        <CharCard
        AnimeName={randomAnime.AnimeName}
        CharName={randomAnime.CharName}
        Power={randomAttack}
        Image={image}
        Size = {300}
        />

        <button onClick={() => window.location.reload()}> Generate</button>
        </div>
    );
}