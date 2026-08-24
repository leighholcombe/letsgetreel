import reels from '@/public/data/reels.json';

export default function Stepbutton(props: {index:number, direction:string}) {
  if(props.direction == "next") {
    if(props.index + 1 > reels.length) {
      return (
        <button id="buttonNext" disabled>Next</button>
      )
    } else {
      return (
        <button id="buttonNext">Next</button>
      )
    }
  } else {
    if(props.index - 1 < 0) {
      return (
        <button id="buttonPrev" disabled>Prev</button>
      )
    } else {
      return (
        <button id="buttonPrev">Prev</button>
      )
    }
  }
}