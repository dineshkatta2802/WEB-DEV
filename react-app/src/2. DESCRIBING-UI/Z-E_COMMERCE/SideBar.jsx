    import React from 'react';
    import {Genre} from './Genre'

    function ListOfGenre(){
            const mainGenre = Genre.map( (genreData) => {
                                                            const MainKeys = Object.keys(genreData).filter( (result) => result !== 'id' );
                                                            return MainKeys.toString();
                                                        }
                                        );
            return <div style={{position : 'absolute',
                                width : '100%', height : '100vh',
                                display : 'flex', flexDirection : 'column',
                                justifyContent : 'space-around' }}>

                    { mainGenre.map( (genre) => <p>{genre}</p>) }

                    </div>
                        }

    export default function SideBar(){
        return(
            <div style={{
                            display : 'flex',
                            flexDirection : 'column',
                            width : '20%',
                            height : '100vh',
                            position : 'relative',

            }}>
                <ListOfGenre/>
            </div>
        );
    }
    
    
    
    // //---------------------------------------------------------------------------------------------------------------------------------
    // import React from 'react';
    // import {Genre} from './Genre'

    // function Categorization({style}){
    //     const main = Genre.map( (category) => Object.keys(category).find( (key) => key !== 'id'));
    //     // console.log(main);
    //     return(
    //         <div style={{
    //             backgroundColor : '#E6E6FA',
    //             display : 'flex',
    //             flexDirection : 'column',
    //             justifyContent : 'space-between',
    //             alignItems : 'center',
    //             borderRadius : '10px',
    //             position : 'relative',
    //             ...style,
    //         }}>

    //             {
    //                 main.map( (Type, index) => <div key={index} style={{
    //                                                                         width : '90%', 
    //                                                                         height : '100vh', 
    //                                                                         // color : '#FFFFFF',
    //                                                                         // border : '2px solid black',  
    //                                                                         textAlign : 'center',
    //                                                                         margin : '10px',
    //                                                                         padding : '10px 1px',
    //                                                                         borderRadius : 'inherit',
    //                                                                         cursor : 'pointer',
    //                                                                         fontSize : '15PX',
    //                                                                         fontWeight : 'bold'}}
    //                             onMouseEnter={(e) =>(e.currentTarget.style.backgroundColor = '#CDADFC')}
    //                             onMouseLeave={(e) =>(e.currentTarget.style.backgroundColor = '#E6E6FA')}>{Type}</div> )
    //             }
    //         </div>
    //     )
    // }

    // export default function SideBar(){
    //     return(
    //         <div>
    //             <Categorization style={{
    //                                     width : '15%',
    //                                     height : '100vh',
    //                                     // backgroundColor : 'blue'
    //             }}/>
    //         </div>
    //     );
    // }