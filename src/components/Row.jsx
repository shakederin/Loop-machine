import React, { useRef, useState } from 'react'
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export default function Row({track, color}) {
  const [isMuted, setIsMuted] = useState(false)
  const audioElement = useRef(null)
  const muteTrack = ()=>{
    audioElement.current.muted = !isMuted;
    setIsMuted(!isMuted)
  }
  return (
      <div className='row' style={{backgroundColor :`${color}`}}>
          <audio  ref={audioElement}
                  className="track" 
                  src={`../loopTracks/${track}`}>
          </audio>
        <div className='muteBtn'>
          {isMuted ? 
          <VolumeOffIcon onClick={muteTrack}/> :
          <VolumeUpIcon onClick={muteTrack}/>
          }
        </div>
      </div>
  )
}
