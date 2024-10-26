import React from 'react'
import CardHomeExercixes from './CardHomeExercixes'
import { gainmass1,gainmass2,losemass1,losemass2 } from '../assets/menuhomeexercices'
const CarouselHome = () => {
  return (
    <div className='flex flex-col  justify-center items-center'>
     <div >
     <h2 className='title' >برامج التدريب</h2>
     </div>
    

    <div className="carousel carousel-center bg-background-gray rounded-box max-w-md   space-x-4 py-4 px-8">
    <div className="carousel-item w-[50%]  ">
      <CardHomeExercixes 
      src={gainmass1}
      title={'برنامج التضخيم'}
      detail={'برنامج مناسب لتضخيم العضلات'}
      />
    </div>
    <div className="carousel-item w-[50%]">
    <CardHomeExercixes 
      src={losemass1}
      title={'برنامج التنشيف'}
      detail={'برنامج مناسب لحرق الدهون'}      />
    </div>
    <div className="carousel-item w-[50%]">
    <CardHomeExercixes 
      src={gainmass2}
      title={'برنامج التضخيم'}
      detail={'برنامج مناسب لتضخيم العضلات'}
      />
    </div>
    <div className="carousel-item w-[50%]">
    <CardHomeExercixes 
      src={losemass2}
      title={'برنامج التنشيف'}
      detail={'برنامج مناسب لحرق الدهون'}      />
    </div>
    
  </div>
  </div>
  )
}

export default CarouselHome