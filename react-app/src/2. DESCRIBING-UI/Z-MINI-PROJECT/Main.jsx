import React from 'react';
import { FamousScientists } from './Data';
import getImageURl from './Images';

export default function App() {
    const professionMap = {
        Mathematician: "Mathematicians",
        Physician: "Physicians",
        Physicist: "Physicists",
        Biologist: "Biologists",
        Logician: "Logicians",
        Philosopher: "Philosophers",
        Astronomer: "Astronomers",
        Engineer: "Engineers",
        Astrologer: "Astrologers",
        Scientist: "Scientists",
        Trader: "Traders",
        Inventor: "Inventors",
        Innovator: "Innovators",
        Chemist: "Chemists",
        Cosmologist: "Cosmologists"
    }; 

    const singularProfessions = Object.keys(professionMap);
    const randomProfession = singularProfessions[Math.floor(Math.random() * singularProfessions.length)];
    const selectedScientists = FamousScientists.filter((Person) =>
        Person.Professions.includes(randomProfession)
    );

    return (
        <div>
            <h1>{professionMap[randomProfession]}</h1>
            <ul>
                {selectedScientists.map((Person) => (
                    <li key={Person.id} style={{ display: "flex", alignItems: 'center', flexDirection: 'row', gap: 40 }}>
                        <div className='image'>
                            <img src={getImageURl(Person)} alt={Person.name} style={{ borderRadius: "50%", width: 200, height: 200, objectFit: "cover" }} />
                        </div>
                        <div className='content' style={{ display: "flex", flexDirection: "column" }}>
                            <h2>{Person.name} ({Person.lived}):</h2>
                            <h3>{Person.Professions.join(', ')}</h3>
                            <p>Is a {Person.Nationality} Scientist known for {Person.Accomplishments}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
