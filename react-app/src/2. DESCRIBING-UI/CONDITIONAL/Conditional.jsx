import React from 'react';

// // Before adding the condition
// function Items({isPacked , name}){
//     return <li className='items'>{name}</li>
// }

//After adding the condition
function Items({isPacked , name}){
    // // One of the method to add condition
    // if(isPacked){
    //     return <li className='items'>{name}✅</li>
    // }
    // return <li className='items'>{name}</li>

    // // 2nd method to add condition(Ternary Operator)x
    // return <li className='items'>{isPacked ? name+"✅" : name }</li>

    // // 3rd method to add a condition
    return <li className='items'>{name} {isPacked && "✅"}</li>
}

export default function App(){
    return(
        <div>
            <h1>Packing list : </h1>
            <ul>
                <Items isPacked = {true} name = "Clothes"/>
                <Items isPacked = {false} name = "Food"/>
                <Items isPacked = {true} name = "Shoes"/>
                <Items isPacked = {false} name = "Drinks"/>
            </ul>
        </div>
    );
}