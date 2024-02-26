import React from 'react'

function Leaderboard() {
  return (
    <>
      <div className='flex-col'>
        <div className='box-border border-4 border-black items-center font-bold flex text-white mr-10 h-24 w-96 rounded-xl'>
          <div className='box-border border-4 rounded-l border-black flex h-16 w-48 ml-1 mt-1'>marking scheme</div>
          <div className='box-border border-4 rounded-l border-black flex h-16 w-24 ml-1 mt-1'>+4</div>
          <div className='box-border border-4 rounded-l border-black flex h-16 w-24 ml-1 mt-1 mr-1'></div>
        </div>
        <div className='box-border border-4 rounded-xl flex-wrap border-black h-72 w-96 mt-2'>
          <div className='box-border border-4 rounded-xl border-black h-32 m-2 w-42'></div>
          <div className='box-border border-4 rounded-xl border-black h-32 m-2 w-42'></div>
        </div>
        <div className='box-border border-4 rounded-xl border-black h-16 w-48'>
          <div className='box-border border-4 rounded-xl border-black h-16 w-48 ml-48'></div>
        </div>
      </div>
    </>

  
  )
}

export default Leaderboard;