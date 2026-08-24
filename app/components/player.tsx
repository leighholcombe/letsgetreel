'use client'

import reels from '@/public/data/reels.json';
import { Reel, PageProps } from '../lib/definitions';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Stepbutton from './stepbutton';

export default function Player() {
  const [pause, setPaused] = useState("paused");
  // Check if reels is an array before mapping to avoid errors
  if (!Array.isArray(reels)) {
    return <p>No reels available.</p>;
  }
  const searchParams = useSearchParams()
  const myIndex = Number(searchParams.get("index")) || 0;

  const currentVideo = reels[myIndex];

  return (
    <>
      <video autoPlay loop disablePictureInPicture>
        <source src={currentVideo.source} type="video/mp4" />
      </video>
      <ul id="video-controls" className="controls" data-state="hidden">
        <li><Stepbutton index={myIndex} direction="prev"/></li>
        <li><button id="play-pause" type="button">Play/Pause</button></li>
        <li><button id="info" type="button">Info</button></li>
        <li className="progress">
          <progress id="progress" value="0"></progress>
        </li>
        <li><Stepbutton index={myIndex} direction="next"/></li>
      </ul>
    </>
  )
}