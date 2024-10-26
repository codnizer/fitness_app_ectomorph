import React from 'react'
import { mealgain,meallose } from '../assets/menuhomeexercices'
const AlimtProg = () => {
  return (
    <>
    
    <div className='my-2 mt-4' >
     <h2 className='title' >دليل التغدية</h2>
     </div>

   
    <div className="flex w-full flex-col my-4">
    <div className="card bg-base-300 rounded-box grid h-20 place-items-center  mb-8">
        
    <div
    className="hero h-[100%] rounded-xl"
    style={{
      backgroundImage: `url(${mealgain})` ,
    }}>
    <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-2xl cairo-bold text-white">برنامج تغدية للتضخيم</h1>
         
        <p className='cairo-regular' >خطة غذائية تهدف إلى زيادة الكتلة العضلية</p>
        </div>
    </div>
  </div>

    </div>
      
    <div className="card bg-base-300 rounded-box grid h-20 place-items-center my-8">
        
    <div
    className="hero h-[100%] rounded-xl "
    style={{
      backgroundImage: `url(${meallose})`,
    }}>
    <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-2xl cairo-bold text-white">برنامج تغدية للتنشيف</h1>
         
        <p className='cairo-regular'>نظام غذائي مخصص لحرق الدهون مع الحفاظ على الكتلة العضلية</p>
      </div>
    </div>
  </div>

    </div>
  </div>

  </>
  )
}

export default AlimtProg