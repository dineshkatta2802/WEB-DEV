import React, {useState} from 'react';
import { imageMap } from './ImageData';

export default function Carousel({currentSubKey}){
    const [imageIndex, setImageIndex] = useState(0);

        const Keys = Object.keys(imageMap);
    
        const Main = Keys[imageIndex];
        const SubKeys = Object.keys(imageMap[Main])
        const Sub = SubKeys[imageIndex];
        const InnerKey = Object.keys(imageMap[Main][Sub]);
        console.log(InnerKey);

        const currentInnerKey = InnerKey[imageIndex % InnerKey.length];
        const currentImage = imageMap[Main][Sub][currentInnerKey];
    // Keys.forEach(Main => {
    //     const SubKeys = Object.keys(imageMap[Main])
    //     console.log(SubKeys);
    //     SubKeys.forEach(Sub => {
    //         const InnerKeys = Object.keys(imageMap[Main][Sub]);

    //     })
    // })

    function handleNextClick(){
                if(imageIndex < InnerKey.length-1){
            setImageIndex(imageIndex + 1);
        }
    }

        function handlePreviousClick(){
                if(imageIndex > 0){
            setImageIndex(imageIndex - 1);
        }
    }

    return(
        <div>
            <button className='PreviousBtn'><i className="fa-solid fa-angle-left"></i></button>
            <div className='Content'>
                {currentInnerKey}
                <img src={currentImage} alt={`Image of a ${currentImage}`}/>
            </div>
            <button className='NextButton'><i className="fa-solid fa-angle-right"></i></button>
        </div>
    );
}