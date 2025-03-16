import React from 'react'

const Loading = () => {
  return (
    <div class="flex justify-center items-center h-screen bg-white z-50">
        <div class="rounded-full h-20 w-20 bg-gray-600 animate-ping"></div>
    </div>
  )
}

export default Loading