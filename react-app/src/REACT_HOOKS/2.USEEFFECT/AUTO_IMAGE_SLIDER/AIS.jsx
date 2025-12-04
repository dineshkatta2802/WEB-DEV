import React, { useEffect, useState } from 'react';
import './AIS.css'

const API_KEY = 'HmoIjX68f2i-bRujTnp5Z3XxZapNi6hsZk8a2h2QVYs';

export default function AIS(){
    const [image, setImage] = useState([])//Empty array of images
    const [index, setIndex] = useState(0);

    // Fetching the images
    useEffect(() => {
        const fetchingImages = async() => {
                                            const res = await fetch(`https://api.unsplash.com/search/photos?query=wallpaper&client_id=${API_KEY}`);
                                            const data = await res.json();
                                            setImage(data.results);
        }
        fetchingImages();
    },[])

    useEffect(() => {
        if(image.length === 0) return;
        const interval = setInterval(()=>{
                                            setIndex(prev => (prev+1) % image.length);
                            }, 5000)
        return () => clearInterval(interval);
    },[image])


    const currentImg =  image.length>0 ? image[index].urls.regular : '';  

    return(
        <div className='AISCon' style={{'--url' : `url(${currentImg})`}}>
        </div>
    );
}