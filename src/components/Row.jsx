import React, { useRef, useState } from 'react'


export default function Row({track, color}) {
  const [isMuted, setIsMuted] = useState(false)
  const audioElement = useRef(null)
  const muteTrack = ()=>{
    audioElement.current.muted = !isMuted;
    setIsMuted(!isMuted)
  }
  return (
    <div style={{backgroundColor :`${color}`}}>
        <audio  ref={audioElement}
                className="track" controls
                src={`../loopTracks/${track}`}>
        </audio>
        <div onClick={muteTrack}>
          {isMuted ? "unmute" : "mute"}
          </div>
    </div>
  )
}
