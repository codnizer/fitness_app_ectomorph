import React from 'react'

const CarouselBox = ({src,type}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
    <img
    src={src}
    className=" border-blue-500 border-2 rounded-full" />
    <h3 className='cairo-bold text-xl text-blue-600'>{type}</h3>
    </div>
  )
}

export default CarouselBox