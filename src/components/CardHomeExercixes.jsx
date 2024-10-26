import React from 'react'

const CardHomeExercixes = ({src,title,detail}) => {
  return (
    
    <div className="card bg-base-100 image-full w-96 shadow-xl  ">
  <figure>
    <img
      src={src}
      alt="" />
  </figure>
  <div className="card-body justify-center items-center cairo-regular">
    <h2 className="card-title text-white">{title}</h2>
    <p className='text-center text-gray-800' >{detail}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">مشاهدة</button>
    </div>
  </div>
</div>
  )
}

export default CardHomeExercixes