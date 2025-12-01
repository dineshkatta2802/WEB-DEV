import './GPV.css'
import Panel from './Panel'
export default function GPV(){
    return(
        <div className='GPVCon'>
            <div className="arm-left"></div>
            <div className="arm-right"></div>
            {/* <div className="cld1"></div>
            <div className="cld2"></div> */}

            <div className="browserCon">
                <header className="header">
                    <span className="Dot"></span>
                    <p>BRINGING THE HUMAN MACHINE DIVIDE</p>
                </header>

                <Panel/>

                <div className="imgArea">
                    <div className="lefthand"></div>
                    <div className="righthand"></div>
                </div>

            </div>
        </div>
    );
}



    //             <div className="GPV">
    //                 <h1>Gesture Pattern Vault</h1>

    //                 <div className="grid" onMouseDown={handleStartPattern} onMouseLeave={handleEndPattermn} onMouseUp={handleEndPattermn}>
    //                     {/* Creating the 9 cells */}
    //                     {Array.from({length : GRID_SIZE * GRID_SIZE}).map((_, index) => {
    //                                                                                         const active = currentDrawnPatern.includes(index);
    //                                                                                         <div className={`cell ${active? 'active' : ''}`} onMouseEnter={() => handleCellEnter(index)} onClick={() => handleCellClick(index)}>
    //                                                                                             {index}
    //                                                                                         </div>
    //                     })}
    //                 </div>

    //                 <div className="buttons">
    //                     <button onClick={handleisRecording}>Redord Pattern</button>
    //                     <button onClick={handleisVerifying} disabled={savedPattern.length === 0}>Verify Pattern</button>
    //                 </div>

    //                 <div className="mssg">
    //                     {message}
    //                 </div>

    //                 <div className="info">
    //                     <p><strong>Stored Pattern:</strong> {JSON.stringify(savedPattern)}</p>
    //                     <p><strong>Your Gesture:</strong> {JSON.stringify(currentDrawnPatern)}</p>
    //                 </div>

    //             </div>

    //                 // saved pattern Sequence (e,g, [1,2,3,4])
    // const [savedPattern , setSavedPattern] = useState([]);
    // // Gesture the user is drawing now
    // const [currentDrawnPatern, setCurrentDrawnPatern] = useState([]);
    // // Hows the message 
    // const [message, setMessagge] = useState('');
    // // Tooggle mode they say which mode we are in currently!
    //         // isRecording = true -> Capture the gesture drawn to save
    //         // isVerifying = true -> Check gesture with saved one
    // const [isRecording, setIsRecording] = useState(false);
    // const [isVerifying, setIsVerifying] = useState(false);
    // // Track wether the user is dragging across the cells
    // const [isMouseDown, setIsMouseDown] = useState(false);

    // // No fo cells in a grid
    // const GRID_SIZE = 3;

    // // Mouse Pressed
    // const handleStartPattern = () => {
    //     setCurrentDrawnPatern([]); // Starting fresh
    //     setMessagge(''); // No message
    //     setIsMouseDown(true); // Turn on the drag detection
    // }

    // // Mouse Released
    // const handleEndPattermn = () => {
    //     setIsMouseDown(false); // Turn off the drag detection

    //     // If we are recording save the pattern
    //     if(isRecording){
    //         setSavedPattern(currentDrawnPatern); 
    //         setMessagge("Pattern Recorded");
    //         setIsRecording(false);// Turn OFF record mode
    //     }

    //     // If we are Verifying compare patterns
    //     if(isVerifying){
    //         if(JSON.stringify(currentDrawnPatern) === JSON.stringify(savedPattern)){
    //             setMessagge('Pattern Saved!!!')
    //         }
    //         else{
    //             setMessagge('Incorrect Pattern!!!');
    //         }
    //     }
    // };

    // // Suppose u have got 3 on 3 grid and u started recording the pattern
    // // but the pattern is not continuous but discontinuous so to store 
    // // which cell we tapped or swiped we need to store it in the 'currentDrawnPattern' 
    // const handleCellClick = (index) => {
    //     addToPattern(index); //  When tapped cell is recorded and added to pattern
    // }

    // const handleCellEnter = (index) =>{
    //     if(isMouseDown) addToPattern(index); // When Swiped cells are recorded and added to the pattern
    // }

    // const addToPattern =(index) => {
    //     setCurrentDrawnPatern((prev) => {
    //                                         // if not added yet append it
    //                                         if(!prev.include(index)){ 
    //                                             return [...prev, index]
    //                                         }
    //                                         //elsw return the same previous pettern
    //                                         return prev;
    //                                     }
    //                             );
    // }

    // //Recording Mode
    // const handleisRecording = () => {
    //     setSavedPattern([]); // Clear everything.
    //     setCurrentDrawnPatern([]); // Clear everything.
    //     setMessagge('Draw your pattern'); 
    //     setIsRecording(true); // Switch on recording
    //     setIsVerifying(false);// Switch off verifying
    // }

    // // Verifying Mode 
    // const handleisVerifying = () => {
    //     setCurrentDrawnPatern([]);
    //     setMessagge('Veryfying your pattern');
    //     setIsRecording(false);
    //     setIsVerifying(true);
    // 