
import React,{useContext} from 'react'
import { MdOutlineChangeCircle } from "react-icons/md";
import { coinsContext } from '../coinsContext';
 import Languages from './Languages'
 import { Browser } from '@capacitor/browser';
 import { useTranslation } from 'react-i18next';

const SettingsModal = () => {
  const { t, i18n } = useTranslation();
 const {isSoundEnabled, setIsSoundEnabled}=useContext(coinsContext)
 const handleRate = async () => {
    const openCapacitorSite = async () => {
      await Browser.open({ url: 'https://play.google.com/store/apps/details?id=com.codnizer.soccermind' });
    };    
    openCapacitorSite()
  };
  return (
    <dialog id="settings" className="modal" >
    <div className="modal-box bg-slate-800 text-white poppins-regular text-[25px] ">
    <form method="dialog">
        <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 className="font-bold text-2xl text-center">{t('Settings')}</h3>
      <div className='flex flex-col gap-4 mt-4 w-[98%] text-[20px]' > 
        <div className="flex flex-row justify-around items-center" >
        <input type="checkbox" className="toggle toggle-info w-1/6 "  checked={isSoundEnabled}
            onChange={()=>{setIsSoundEnabled(prev=>!prev)}} />
      <h3>{t('Sound')} {isSoundEnabled ? t('On') : t('Off')}</h3>
      </div>

      <div className="flex flex-row justify-around items-center" >
      
      <button onClick={()=>{document.getElementById('lang').showModal()}} className="btn p-1  w-1/6   btn-outline btn-info  ">
      <MdOutlineChangeCircle size={'35px'}  />
      </button>
      <h3 className='' >{t('Language')}</h3>
      </div>
      </div>
      <button onClick={handleRate} className="btn btn-primary w-full mt-4 ">{t('Rate The Game')}</button>
    </div>
    <Languages/>
  </dialog>
  )
}

export default SettingsModal