import React, { useState, useRef } from 'react';
import './MusicTrack.css';

import { BsFillVolumeMuteFill } from 'react-icons/bs';
import { BsFillVolumeUpFill } from 'react-icons/bs';

const MusicTrack= (props) =>{
    //state
    const [icon, setIcon] = useState(<BsFillVolumeUpFill/>)
       
    //references
    const audio = useRef();
    const audioButtom = useRef();

    //mute each track whene btn click
    const muteAudio= () =>{
        if (audio.current.muted){
            audio.current.muted =false;
            audioButtom.current.value='Mute'
            setIcon(<BsFillVolumeUpFill/>)
        } else {
            audio.current.muted =true;
            audioButtom.current.value='Unmute'
            setIcon(<BsFillVolumeMuteFill/>)
        }
    }  

    return(
        <div>
            <div className='flex justify-center items-center'>
                <div className={`flex justify-end items-center br1 ma1 w-75 h2 bg-${props.color} shadow-3 o-60`}>
                    <audio ref={audio} id={props.id}>
                        <source src={props.track} type="audio/mpeg"></source>
                        Your browser does not support the audio element.
                    </audio>
                    <div className='line' id={props.id+'l'}></div>
                </div>    
                <button 
                    ref={audioButtom}
                    value='Mute'
                    className='near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma1 br2 pa1 shadow-5'
                    onClick={muteAudio}
                    type="button">{icon}
                </button>       
            </div>
        </div>
    )
}

export default MusicTrack;
