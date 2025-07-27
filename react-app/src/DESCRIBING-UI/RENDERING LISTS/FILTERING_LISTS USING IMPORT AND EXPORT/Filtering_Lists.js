import React from 'react';
import { People } from './Data';
import getImageURl from './Utils';

export default function App(){
    //Flitering the list
    // const Mathematicians = People.filter( (Person) => Person.Profession == "Mathematician");
    // const Physicists = People.filter( (Person) => Person.Profession == "Physicist");

    // const listItems = Physicists.map((Person) => <li key = {Person.id}> 
    const listItems = People.map((Person) => <li key = {Person.id} style={{listStyle : "none"}}> 
                                                        <p style={{display : 'flex', gap : 10, alignItems : 'center', flexDirection : "row"}}>
                                                        <img src = {getImageURl(Person)} alt={Person.name} style={{borderRadius : "50%",width: 200, height : 200, objectFit : "cover"}}/>
                                                            <br/>
                                                            <b style={{fontSize : 20}}>{Person.name}:</b>
                                                            {/* <br/> */}
                                                            {" "+Person.Profession+" "}
                                                            known for {Person.accomplishments}
                                                        </p>
                                                        </li>);

    return( <ul>{listItems}</ul> );
}