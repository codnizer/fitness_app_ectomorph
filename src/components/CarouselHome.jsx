import React from 'react'
import CarouselBox from './CarouselBox'
import { biceps,chest,forearms,legs,shoulders,triceps,abs,back} from '../assets/menuhomeexercices'
const CarouselHome = () => {
  return (
    <div className='flex  flex-col  container   justify-center items-center '>
     <div className='mt-4 '  >
     <h2 className='title' >دليل التمارين</h2>
     </div>
    

    <div className="carousel container   rounded-box  py-4 gap-2">
    <div className="carousel-item ">
     <CarouselBox src={biceps} type={"البايسبس"} />
    </div>
    <div className="carousel-item ">
    <CarouselBox src={triceps }  type={"الترايسبس"} />
    </div>
    <div className="carousel-item ">
    <CarouselBox src={chest}  type={"الصدر"} />
    </div>
    <div className="carousel-item ">
    <CarouselBox src={shoulders}   type={"الأكتاف"}/>
    </div>
    <div className="carousel-item ">
    <CarouselBox src={forearms}  type={"الساعد"} />
    </div>
    <div className="carousel-item ">
    <CarouselBox src={legs}  type={"الأرجل"} />
    </div>
    <div className="carousel-item ">
    <CarouselBox src={abs}  type={"البطن"} />
    </div>
    <div className="carousel-item ">
    <CarouselBox src={back}  type={"الظهر"} />
    </div>

  </div>
  </div>
  )
}

export default CarouselHome