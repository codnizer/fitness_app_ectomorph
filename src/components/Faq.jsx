import React from 'react'
import { faq } from '../assets/menuhomeexercices'
const Faq = () => {
  return (
    <>
    
    <div className='my-4' >
     <h2 className='title' >أسئلة شائعة</h2>
     </div>

    
    <div
    className="hero h-40 rounded-md"
    style={{
      backgroundImage: `url(${faq})`,
    }}>
    <div className="hero-overlay bg-opacity-40 rounded-md"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-2xl font-bold cairo-regular">اطلع على اهم الاسئلة الشائعة المتعلقة بكمال الاجسام</h1>
         
        {/* <button className="btn bg-accent-orange text-white cairo-regular text-xl ">Get Started</button> */}
      </div>
    </div>
  </div>

  </>
  )
}

export default Faq