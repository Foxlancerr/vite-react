import React,{useState, useRef}  from 'react';

export default function App() {
  const playRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (isPlaying)  {
      playRef.current.play()
    }else{
      playRef.current.pause()
    }
  }

  return (
    <div className='flex h-screen justify-center flex-col-reverse items-center bg-red-400'>
      <h1 className='text-5xl text-white font-bold '>useRef hook to implement this Functionality</h1>
     <button onClick={handleClick} className='bg-blue-500 py-2 px-4 rounded-lg text-[20px] font-bold mt-2 text-white inline'>
        {isPlaying ? 'Play' : 'Pause'}
      </button>
      <video width="500" ref = {playRef} className='inline mt-2'>
        <source 
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
      
    </div>
  )
}
