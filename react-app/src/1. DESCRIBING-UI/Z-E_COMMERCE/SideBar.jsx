import React from 'react';

const Genre = [
    'Fashion & LifeStyle',
    'Electronics and Applications',
    'Home, Furniture & Decor',
    'Grocery & Food',
    'Beauty, Health & Wellness',
    'Books, Stationery & Learning',
    'Kids, Baby & Toys',
    'Sports',
    'Automotive',
    'Pets',
];

function Categories({width, height}){
    const titles = Genre.map((section, index) => <p key={index} style={{
                                                                        border : '2px solid black',
                                                                        textAlign : 'center',
                                                                        width : '100%',
                                                                        height : '25px',
                                                                        borderRadius : '5px'
                                                                    }}>
                                                                        {section}
                                                                        </p>)
    return(
        <div style={{
            backgroundColor : '',
            borderRadius : '10px',
                    width : width, 
                    height : height,
                    display : 'flex',
                    flexDirection : 'column',
                    flexGrow : '1',
                    }}> 
            {titles}
        </div>
    );
}

export default function SideBar(){
    return(
        <Categories width = {'15%'} height = {'100vh'}/>
    );
}