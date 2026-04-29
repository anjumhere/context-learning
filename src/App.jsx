import React from 'react'

const App = () => {
  return (
    <div className=' flex justify-center gap-10 items-center min-h-screen bg-gray-900 text-white border-amber-500 border-2'>
      <div className='h-50 w-50 hover:scale-103 transition-all duration-300 cursor-pointer bg-red-500 border-2 border-gray-300 rounded-lg'>BOX1</div>
      <div className='h-50 w-50 hover:scale-103 transition-all duration-300 cursor-pointer bg-amber-500 border-2 border-gray-300 rounded-lg'>BOX2</div>
      <div className='h-50 w-50 hover:scale-103 transition-all duration-300 cursor-pointer bg-amber-500 border-2 border-gray-300 rounded-lg'>BOX3</div>

    </div>
  )
}

export default App
