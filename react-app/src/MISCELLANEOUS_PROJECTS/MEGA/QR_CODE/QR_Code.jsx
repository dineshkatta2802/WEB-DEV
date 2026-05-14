import React, {useState, useReducer, useEffect} from "react";
import "./QR_Style.css";
import QRCode from "qrcode";
import { initialState, reducer } from "./Qr_code";

const blobMorphValues = `
    M56.8,-57.2C69.5,-44.2,72.8,-22.1,73.3,0.5C73.8,23.1,71.6,46.2,58.9,58.6C46.2,70.9,23.1,72.6,2.7,69.8C-17.7,67.1,-35.4,60.1,-50.5,47.7C-65.5,35.4,-78,17.7,-79.6,-1.6C-81.1,-20.8,-71.8,-41.6,-56.7,-54.6C-41.6,-67.6,-20.8,-72.8,0.6,-73.5C22.1,-74.1,44.2,-70.2,56.8,-57.2Z;
    M45.9,-42.4C61.3,-30.5,76.9,-15.2,79.9,3C82.9,21.3,73.4,42.5,58,57.7C42.5,72.8,21.3,81.7,2.6,79.2C-16.1,76.6,-32.2,62.4,-44.7,47.3C-57.2,32.2,-66,16.1,-67.1,-1.1C-68.2,-18.3,-61.5,-36.5,-49,-48.5C-36.5,-60.4,-18.3,-66.1,-1.5,-64.6C15.2,-63.1,30.5,-54.4,45.9,-42.4Z;
    M53.5,-51.5C66.1,-40.8,71.1,-20.4,71.1,-0.1C71,20.2,65.9,40.5,53.2,53.9C40.5,67.2,20.2,73.7,-1,74.8C-22.3,75.8,-44.6,71.3,-56.8,57.9C-69.1,44.6,-71.3,22.3,-69.6,1.7C-67.9,-18.9,-62.3,-37.8,-50,-48.5C-37.8,-59.3,-18.9,-61.9,0.7,-62.6C20.4,-63.4,40.8,-62.3,53.5,-51.5Z;
    M56.8,-57.2C69.5,-44.2,72.8,-22.1,73.3,0.5C73.8,23.1,71.6,46.2,58.9,58.6C46.2,70.9,23.1,72.6,2.7,69.8C-17.7,67.1,-35.4,60.1,-50.5,47.7C-65.5,35.4,-78,17.7,-79.6,-1.6C-81.1,-20.8,-71.8,-41.6,-56.7,-54.6C-41.6,-67.6,-20.8,-72.8,0.6,-73.5C22.1,-74.1,44.2,-70.2,56.8,-57.2Z`
    ;

export default function QR_CODE() {
    const [input , setInput] = useState('');

    const [state, dispatch] =  useReducer(reducer, initialState);

    useEffect(() => {
        if(!input.trim()) return; // this prevents qr to stop generating QR code for empty string

        dispatch({ type: "START" }); // We are saying that the QR COde generation can start now

        QRCode.toDataURL(input) // converting the text to the QR code image
                                .then((url) => {dispatch({type : 'generated', payload :url})})
                                .catch((err) => {console.err(err)});
    }, [input]) // we want the useEfect to render when the text changes i.e, input

    function handleChange(e){
        setInput(e.target.value);
    }

    return (
        <section className="blob-container">
            <div className="blob">
                <svg
                    viewBox="0 0 200 200"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4AAAAA" />
                            <stop offset="100%" stopColor="#5bd7a3" />
                        </linearGradient>
                    </defs>

                    {/* Translate path to center */}
                    <g transform="translate(100,100)">
                        <path fill="url(#blobGradient)">
                            <animate
                                attributeName="d"
                                dur="10s"
                                repeatCount="indefinite"
                                values={blobMorphValues}
                            />
                        </path>
                    </g>
                </svg>
            </div>

            {(state.qrcode )  && <img src={state.qrcode} alt="QR Code"  className="qrimg"/>}

            <div className="input">
                <input type="text" onChange={handleChange} placeholder="Enter any text..."/>
            </div>

            {/* {(state.status === 'error') ? <p className="error"> Error occured</p> : <p className="Succcess"> The QR is generated</p>} */}
        </section>
    );
}
