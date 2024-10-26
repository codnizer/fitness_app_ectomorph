import React from 'react'

const CarouselBox = ({src,type}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
    <img
    src={src}
    height={"15px"}
    className=" border-blue-500 border-4 rounded-full h-[100px]" />
    <h3 className='cairo-bold text-xl text-blue-600'>{type}</h3>
    </div>
  )
}

export default CarouselBox