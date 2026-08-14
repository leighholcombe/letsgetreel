import reels from '@/public/data/reels.json';
import { Reel } from '../lib/definitions';

export default async function Player() {
  // Check if reels is an array before mapping to avoid errors
  if (!Array.isArray(reels)) {
    return <p>No reels available.</p>;
  }

  const startingIndex = 0;

  const currentVideo = reels[startingIndex];

  return (
    <video controls autoPlay loop>
      <source src={currentVideo.source} type="video/mp4" />
    </video>
  )
}