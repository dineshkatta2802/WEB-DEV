import React, { useEffect, useRef, useState } from 'react';

export default function App(){
    const videos = [
        {id : 1, title : 'Nigger', url : '/videos/Nigger.mp4'},
        {id : 2, title : 'Villains', url : '/videos/Villains.mp4'},
        {id : 3, title : 'Avengers', url : '/videos/Avengers.mp4'},
        {id : 4, title : 'Baby Driver', url : '/videos/Baby.mp4'},
        {id : 5, title : 'Pursuit of Happiness', url : '/videos/Happiness.mp4'},
    ]
    const [selectedVideo, setSelectedVideo] = useState(videos[0]);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMute, setIsMute] = useState(false);
    const videoRef = useRef(null);

    const handleClick = () => {
        setIsPlaying(!isPlaying);
        if(!isPlaying){
            videoRef.current.play();
        }
        else{
            videoRef.current.pause();
        }
    }

    useEffect(()=>{
        const handleKeyDown = (e) => {
            if(e.code === 'Space'){
                e.preventDefault();
                handleClick();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () =>{
            window.removeEventListener('keydown', handleKeyDown)
        } 
    }, [isPlaying, handleClick])


    const handleMute = () => {
        videoRef.current.muted = !videoRef.current.muted
        setIsMute(videoRef.current.muted)
    }

    const handleRestart = () => {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
    }

    const handleVolume = (e) => {
        videoRef.current.volume = e.target.value;
    }

    const handleSpeed = (e) => {
        videoRef.current.playbackRate = e.target.value;
    }

    const handleFullScreen = () => {
        videoRef.current.requestFullscreen();
    }

    const handleSelect = (e) => {
        const film = videos.find(v => v.id ===  parseInt(e.target.value))
        setSelectedVideo(film);
    }

    return(
        <div>
            <video
            // controls
            autoPlay
            loop
            ref={videoRef}
            width= '1000'
            height= '500'
            key={selectedVideo.url} // Adding key={selectedVideo.url} to the <video> tag forces React to reload the player when the video changes.
            >
                <source src={selectedVideo.url} type='video/mp4' auto/>
            </video>
            <br />
            <button onClick={handleClick}>{isPlaying ? 'Pause'  :'Play'}</button>
            <button onClick={handleMute}>{isMute? 'UnMute'  :'Mute'}</button>
            <button onClick={handleRestart}>Restart</button>
            <button onClick={handleFullScreen}>FullScreen</button>
            <select name='Videos' onChange={handleSelect}>
                {
                    videos.map(v => (
                        <option key={v.id} value={v.id}>{v.title}</option>
                    ))
                }
            </select>
            <br />
            <label htmlFor="volume">Volume
                <input type="range" min='0' max='1' step='.1' defaultValue='.5' onChange={handleVolume}/>
            </label>
            <br />
            <label htmlFor="Speed">Speed
                <input type="range" min='.5' max='2' step='.5' defaultValue='1' onChange={handleSpeed}/>
            </label>
        </div>
    );
}