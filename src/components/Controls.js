import React, { useState, useRef } from 'react';

import { BsFillStopFill, BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { RiRepeat2Fill, RiRepeatOneFill } from 'react-icons/ri';

const btnStyle= 'near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center justify-center w3 ma1 shadow-5 br2 pa2'

const Controls= (props) => {
    //state
    const [icon, setIcon]= useState(<BsFillPlayFill/>)
    const [loopIcon, setloopIcon]= useState(<RiRepeatOneFill/>)

    //references
    const playPuaseBtn = useRef();
    const loopBtn = useRef();
    const bar = useRef();
    const moveBarRef = useRef();

    //control functions- play, stop and loop
    const playAll= ()=>{
        if (playPuaseBtn.current.value ==='Play'){
        props.songs.forEach((song) =>{
            document.getElementById(song[0]).play()
        })
        moveBarRef.current= requestAnimationFrame(whenPlay)
        playPuaseBtn.current.value= 'Puase'
        setIcon(<BsFillPauseFill/>)
        } else {
        props.songs.forEach((song) =>{
            document.getElementById(song[0]).pause()
        })
        cancelAnimationFrame(moveBarRef.current)
        playPuaseBtn.current.value= 'Play'
        setIcon(<BsFillPlayFill/>)
        }
    } 

    const stopMusic= () =>{
        props.songs.forEach((song) =>{
            document.getElementById(song[0]).pause()
            document.getElementById(song[0]).currentTime = 0
        })
        playPuaseBtn.current.value='Play'
        bar.current.value='0'
        setIcon(<BsFillPlayFill/>)
    }

    const setLoop= ()=>{
        if (loopBtn.current.value ==='Loop'){
        props.songs.forEach((song) =>{
            document.getElementById(song[0]).loop=true;
        })
        loopBtn.current.value= 'Unloop'
        setloopIcon(<RiRepeat2Fill/>)
        } else {
        props.songs.forEach((song) =>{
            document.getElementById(song[0]).loop=false;
        })
        loopBtn.current.value= 'Loop'
        setloopIcon(<RiRepeatOneFill/>)
        }
    }

    //clculate percent of song based on number (0-17)
    const calPercent= (place) =>{
        const percet= 100-(place*100/17)
        return percet
    }

    //while playing, change line and bar place
    const whenPlay= () => {
        const place=document.getElementById('/static/media/B VOC.c435443f.mp3').currentTime
        bar.current.value= place
        const linePlace= calPercent(place)
        props.songs.forEach((song) =>{
            const line= document.getElementById(song[0]+'l')
            line.style.width =`${linePlace}%`
        })
        moveBarRef.current= requestAnimationFrame(whenPlay)
    }

    //whene range is changed, change song current time and line place
    const chagePlace= ()=> {
        const place= Number(bar.current.value).toFixed(6);
        props.songs.forEach((song) =>{
            document.getElementById(song[0]).currentTime= place;
        })
        const linePlace= calPercent(place)
        props.songs.forEach((song) =>{
            const line= document.getElementById(song[0]+'l')
            line.style.width =`${linePlace}%`
        })
    }

    return (
        <div className=''>
            <div>
            <input ref={bar} className='w-75' type='range' min='0' max='17' step='any' defaultValue='0' onChange={chagePlace}></input> 
            <div className='dib w2 ml1'></div>
            </div>
            <button 
                id='play/pause' ref={playPuaseBtn} value='Play'
                className={btnStyle} onClick={playAll}
                type="button">{icon}
            </button>
            <button 
                className={btnStyle} onClick={stopMusic}
                type="button"><BsFillStopFill/>
            </button>
            <button 
                ref={loopBtn}
                id='loop/unloop' value='Loop'
                className={btnStyle} onClick={setLoop}
                type="button">{loopIcon}
            </button>
        </div>
    );
}

export default Controls;
