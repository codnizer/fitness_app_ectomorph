import React from 'react'
// import saudi from '../assets/ui_assets/saudi.png'
// import uk from '../assets/ui_assets/uk.png'
// import spain from '../assets/ui_assets/spain.png'
// import fr from '../assets/ui_assets/fr.png'
import { useTranslation } from 'react-i18next';
import { Preferences } from '@capacitor/preferences';
const Languages = () => {
  const { t, i18n } = useTranslation();
;
  const changeLanguage = async (lng) => {
    await Preferences.set({ key: 'user-language', value: lng });
    i18n.changeLanguage(lng);
  };

  return (
    <>
    </>
//     <dialog id="lang" className="modal" >
//     <div className="modal-box bg-slate-800 text-white poppins-regular text-[25px] ">
//       <form method="dialog">
//         <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//       </form>
//       <h3 className=" text-[25px] text-center">{t('Set Game Language')}</h3>
//       <div className='flex flex-row flex-wrap justify-center items-center w-full mt-4 gap-4'>
//   <div className='w-1/3 mb-4'>
//     <div onClick={() => { changeLanguage('ar'); document.getElementById('lang').close() }} className='h-24'>
//       <img src={saudi} alt="" className='h-full object-cover rounded-full border-4' />
//     </div>
//   </div>
  
//   <div className='w-1/3 mb-4'>
//     <div onClick={() => { changeLanguage('en'); document.getElementById('lang').close() }} className='h-24'>
//       <img src={uk} alt="" className='h-full object-cover rounded-full border-4' />
//     </div>
//   </div>

//   <div className='w-1/3 mb-4'>
//     <div onClick={() => { changeLanguage('es'); document.getElementById('lang').close() }} className='h-24'>
//       <img src={spain} alt="" className='h-full object-cover rounded-full border-4' />
//     </div>
//   </div>

//   <div className='w-1/3 mb-4'>
//     <div onClick={() => { changeLanguage('fr'); document.getElementById('lang').close() }} className='h-24'>
//       <img src={fr} alt="" className='h-full object-cover rounded-full border-4' />
//     </div>
//   </div>
// </div>

//     </div>
//   </dialog>
  )
}

export default Languages