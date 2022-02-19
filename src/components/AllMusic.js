import React from 'react';
import MusicTrack from './MusicTrack';

const AllMusic= (props)=> {

  //create new MusicTrack component for each loop
  const tracks=props.songs.map(([song,color]) =>{
      return(
        <MusicTrack id={song} key={song} track={song} color= {color}/> 
      )
    })

  return (
      <div className='pv2'>
          {tracks}
      </div>
  );
}

export default AllMusic;

