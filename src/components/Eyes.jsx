import React, { useEffect, useState } from 'react'

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {

    window.addEventListener("mousemove", (e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      setRotate(angle - 180);
      
    })
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden'> 
      <div data-scroll data-scroll-speed="-0.7" className='w-full h-full relative bg-cover bg-center bg-red-400 bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
      <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <div className='flex items-center justify-center h-[13vw] w-[13vw] rounded-full bg-[#F4F4F4]'>
        <div className='relative h-[8vw] w-[8vw] rounded-full bg-[#212121]'>
          <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-6">
          <div className='h-[1.5vw] w-[1.5vw] rounded-full bg-[#F4F4F4]'></div>
          </div>
        </div>
        </div>
        <div className='flex items-center justify-center h-[13vw] w-[13vw] rounded-full bg-[#F4F4F4]'>
        <div className='relative h-[8vw] w-[8vw] rounded-full bg-[#212121]'>
        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-6">
          <div className='h-[1.5vw] w-[1.5vw] rounded-full bg-[#F4F4F4]'></div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Eyes