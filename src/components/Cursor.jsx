import React, { useEffect, useState } from 'react'
import TornadoIcon from '@mui/icons-material/Tornado';


export default function Cursor(){
    const [time, setTime] = useState(0); 

    useEffect(()=>{
        const allAudio = document.querySelectorAll(".track");
        allAudio[0].addEventListener("timeupdate", () => {
            setTime((allAudio[0].currentTime / allAudio[0].duration) * 100);
          });
    },[])
   

    return (
        <div className="line" style={{left:`${time}%`}}>
            <TornadoIcon/>
        </div>
  )
}
