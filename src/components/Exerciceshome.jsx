import React from 'react'
import CardHomeExercixes from './CardHomeExercixes'
import { gainmass1,gainmass2,losemass1,losemass2 } from '../assets/menuhomeexercices'
const CarouselHome = () => {
  return (
    <div className='flex flex-col container justify-center items-center '>
     <div className='flex flex-row justify-around items-center w-full' >
     <h2 className='title' >برامج التدريب</h2>
     <h2 className='cairo-regular text-sm' >شاهد الكل</h2>
     </div>
    

     <div className="carousel container carousel-center rounded-box">
    <div className="carousel-item  ">
      <CardHomeExercixes 
      src={gainmass1}
      title={'برنامج التضخيم'}
      detail={'برنامج مناسب لتضخيم العضلات'}
      />
    </div>
    <div className="carousel-item">
    <CardHomeExercixes 
      src={losemass1}
      title={'برنامج التنشيف'}
      detail={'برنامج مناسب لحرق الدهون'}      />
    </div>
    <div className="carousel-item">
    <CardHomeExercixes 
      src={gainmass2}
      title={'برنامج التضخيم'}
      detail={'برنامج مناسب لتضخيم العضلات'}
      />
    </div>
    <div className="carousel-item">
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