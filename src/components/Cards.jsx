import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex items-center gap-5 px-14 font-display'>
      <div className='card-container h-[55vh] w-1/2'>
        <div className="card relative rounded-lg w-full h-full bg-[#004D43] flex items-center justify-center">
          <img className='w-[10vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute left-10 bottom-10 py-1 px-4 border-[1px] border-[#CDEA68] rounded-full text-[#CDEA68]'>@2019-2022</button>
        </div>
      </div>
      <div className='card-container relative flex gap-5 h-[55vh] w-1/2'>
      <div className="card relative rounded-lg w-1/2 h-full bg-[#212121] flex items-center justify-center">
      <img className='w-[9vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
      <button className='absolute left-10 bottom-10 py-1 px-4 border-[1px] border-[#CDEA68] rounded-full text-[#CDEA68] uppercase'>rating 5.0 on clutch</button>
      </div>
      <div className="card relative rounded-lg w-1/2 h-full bg-[#212121] flex items-center justify-center">
      <img className='w-[7vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
      <button className='absolute left-10 bottom-10 py-1 px-4 border-[1px] border-[#CDEA68] rounded-full text-[#CDEA68] uppercase'>business bootcamp alumni</button>
      </div>
      </div>
    </div>
  )
}

export default Cards