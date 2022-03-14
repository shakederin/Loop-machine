import React, { useState } from 'react'

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
    <div>
        <button onClick={()=>{
            console.log(isPlaying);
            isPlaying ?
            pauseAllTracks() :
            playAllTracks()
        }
            }>
            {isPlaying ? "pause" : "play"}
        </button>
        <button onClick={stopAllTracks}>stop</button>
        <button onClick={loopAllTracks}>
            {!isLoop ? "noLoop" : "yesLoop"}
        </button>
    </div>
  )
}
