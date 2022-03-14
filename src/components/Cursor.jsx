import React, { useEffect, useState } from 'react'
import TornadoIcon from '@mui/icons-material/Tornado';
import interact from 'interactjs'


export default function Cursor(){
    const [time, setTime] = useState(0); 

    useEffect(()=>{
        const allAudio = document.querySelectorAll(".track");
        allAudio[0].addEventListener("timeupdate", () => {
            setTime((allAudio[0].currentTime / allAudio[0].duration) * 100);
          });
    },[])

    const cursor = interact('.line');
    cursor.draggable({
        origin: "self",
        inertia: false,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent"
          }),
        ],
        listeners: {
          move(event) {
            let value = event.pageX;
            value = (value > 100 ? value = 100 : event.pageX)
            value = (value < 0 ? value = 0 : event.pageX)
            const audioElements = document.querySelectorAll(".track")
            audioElements.forEach((audioElement) => {
                audioElement.currentTime =
                (audioElements[0].duration * Math.floor(value)) / 100;
            });
            setTime(value);
          },
        },
      });

    return (
        <div className="line" style={{left:`${time}%`, cursor: "grab"}}>
            <TornadoIcon/>
        </div>
  )
}
