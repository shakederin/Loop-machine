import React, { useState } from 'react'
import StopCircleIcon from '@mui/icons-material/StopCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

export default function ControlPanel() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isLoop, setIsLoop] = useState(false)

    const allAudioElements = document.querySelectorAll(".track");

    const playAllTracks = () =>{
        document.querySelectorAll(".track").forEach((track)=>{
            track.play();
        });
        setIsPlaying(true);
    }

    const pauseAllTracks = () =>{

        allAudioElements.forEach((track)=>{
            track.pause();
            track.onended = () => {
                setIsPlaying(false);
            };
        });
        setIsPlaying(false);
    }

    const stopAllTracks = () => {
        allAudioElements.forEach((track)=>{
            track.pause();
            track.currentTime = 0;
        });
        setIsPlaying(false);
    };

    const loopAllTracks = () =>{
        !isLoop ? 
        allAudioElements.forEach((track)=>{
            track.loop = true
        }) :
        allAudioElements.forEach((track)=>{
            track.loop = false
        });
        setIsLoop(!isLoop)
    }
  return (
        <div className='controlPanel'>
                    <StopCircleIcon onClick={stopAllTracks}/>
                    <div className="playPause">
                        {isPlaying ?
                        <PauseCircleIcon onClick={pauseAllTracks}/> : 
                        <PlayCircleIcon onClick={playAllTracks}/>
                        }
                    </div>
                    <ReplayCircleFilledIcon style={{color : isLoop ? "#2C73D2" : "black"}} className="controlBtn" onClick={loopAllTracks}/>
        </div>
  )
}
