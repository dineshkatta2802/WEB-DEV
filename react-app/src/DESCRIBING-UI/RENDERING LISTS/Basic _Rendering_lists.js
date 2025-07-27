import React from 'react';

//to render a list of items lets create an arry of lists
const People = ["Srinivasa Ramnaujan", "Albert Einstein", "Issac Newton", "Arya Bhatta"];

export default function App(){
    const listItems = People.map( Person =>  <li>{Person}</li>);

    return(
        <ul> {listItems} </ul>
    );
}