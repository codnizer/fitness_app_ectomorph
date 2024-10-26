import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { Browser } from '@capacitor/browser';
import { useTranslation } from 'react-i18next';
const RateModal = () => {
  const { t } = useTranslation();
    const handleRate = async () => {
       const openCapacitorSite = async () => {
         await Browser.open({ url: 'https://play.google.com/store/apps/details?id=com.codnizer.soccermind' });
       };    
       openCapacitorSite()
     };
  return (
    <dialog id="rate" className="modal" >
    <div className="modal-box bg-slate-800 text-white poppins-regular text-[25px] ">
    <form method="dialog">
        <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 className="font-bold text-2xl text-center">{t('Rate The Game')}</h3>
        <h4 className='text-center text-[22.5px] my-5' >
            {t('You Can rate the game on Play Store Now')}
        </h4>
        <div className='flex flex-row justify-center items-center my-4' >
        <FaGooglePlay size={'35px'} color='#ecf0f1'   />
</div>
        <div className='flex flex-row justify-center items-center'>
        <FaStar color='#f1c40f' />
        <FaStar color='#f1c40f' />
        <FaStar color='#f1c40f' />
        <FaStar color='#f1c40f' />
        <FaStar color='#f1c40f' />

        </div>

      <div className='flex flex-col gap-4 mt-4 w-[98%] text-[20px]' > 
 
      <button onClick={handleRate} className="btn btn-primary w-full mt-4 ">{t('Rate The Game')}</button>
    </div>
    </div>
  </dialog>
  )
}

export default RateModal