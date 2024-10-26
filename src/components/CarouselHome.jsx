import React from 'react'
import CarouselBox from './CarouselBox'
import { biceps,chest,forearms,legs,shoulders,triceps,abs,back} from '../assets/menuhomeexercices'
const CarouselHome = () => {
  return (
    <div className='flex  flex-col  justify-center items-center mx-7 px-6 w-full'>
     <div className='mt-4 '  >
     <h2 className='title' >دليل التمارين</h2>
     </div>
    

    <div className="carousel  carousel-center bg-background-gray rounded-box max-w-md gap-2  p-4  px-5 ml-6">
    <div className="carousel-item w-[35%] ">
     <CarouselBox src={biceps} type={"البايسبس"} />
    </div>
    <div className="carousel-item w-[35%]">
    <CarouselBox src={triceps }  type={"الترايسبس"} />
    </div>
    <div className="carousel-item w-[35%]">
    <CarouselBox src={chest}  type={"الصدر"} />
    </div>
    <div className="carousel-item w-[35%]">
    <CarouselBox src={shoulders}   type={"الأكتاف"}/>
    </div>
    <div className="carousel-item w-[35%]">
    <CarouselBox src={forearms}  type={"الساعد"} />
    </div>
    <div className="carousel-item w-[35%]">
    <CarouselBox src={legs}  type={"الأرجل"} />
    </div>
    <div className="carousel-item w-[35%]">
    <CarouselBox src={abs}  type={"البطن"} />
    </div>
    <div className="carousel-item w-[35%] mr-8">
    <CarouselBox src={back}  type={"الظهر"} />
    </div>

  </div>
  </div>
  )
}

export default CarouselHome