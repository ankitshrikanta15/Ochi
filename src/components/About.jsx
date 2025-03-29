import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.01" 
     className='w-full py-20 bg-[#CDEA68] rounded-t-2xl font-display text-[#212121]'>
      <h1 className='text-[4vw] leading-none px-14'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'>raise funds, sell products, explain complex ideas,</span> and <span className='underline'>hire great people</span>.</h1>
      <div className='w-full border-t-[1.5px] mt-20 pt-8 border-zinc-400 flex'>
        <div className='w-1/2 px-14'>
        <h1 className='text-5xl'>Our approach:</h1>
        <button className='uppercase flex gap-5 items-center py-4 px-8 mt-6 rounded-full bg-black text-[#FFFFFF]'>read more
          <div className='w-3 h-3 rounded-full bg-[#FFFFFF]'></div>
        </button>
        </div>
        <div className='w-1/2 pr-14'>
            <img className='rounded-xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About