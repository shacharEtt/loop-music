import React from 'react';
import './App.css';

import AllMusic from './components/AllMusic';
import Controls from './components/Controls';
import { RiCopyrightLine } from 'react-icons/ri';

import B_VOC from './musicFiles/B VOC.mp3';
import DRUMS from './musicFiles/DRUMS.mp3';
import HE_HE_VOC from './musicFiles/HE HE VOC.mp3';
import HIGH_VOC from './musicFiles/HIGH VOC.mp3';
import JIBRISH from './musicFiles/JIBRISH.mp3';
import LEAD_1 from './musicFiles/LEAD 1.mp3';
import UUHO_VOC from './musicFiles/UUHO VOC.mp3';
import _tambourine_shake_higher from './musicFiles/_tambourine_shake_higher.mp3';

const songs= [[B_VOC, 'blue'], [DRUMS, 'green'], [HE_HE_VOC,'light-purple'],[HIGH_VOC,'yellow' ],[JIBRISH,'light-yellow'], [LEAD_1,'pink'], [UUHO_VOC,'light-blue'],[_tambourine_shake_higher,'light-red']]


const App= ()=>{
  
  return (
    <div className="App pv1">
      <h1 className=''>Loop Machine</h1>
      <AllMusic songs={songs}/>
      <Controls songs={songs}/>
      <div className='flex align-center justify-center pv1'> <RiCopyrightLine/>shacharEtt</div>
    </div>
  );
}

export default App;
