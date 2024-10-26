import React ,{useEffect,useContext} from 'react'
import { Link, useNavigate } from "react-router-dom";
import home from '../assets/mp3/home.mp3'
import { coinsContext } from '../coinsContext';
import { SettingsModal, PrivacyModal,RateModal } from '../components';
import { Preferences } from '@capacitor/preferences';
import { useTranslation } from 'react-i18next';
import useAudioPlayer from '../customHooks/useAudioPlayer';
import { Browser } from '@capacitor/browser';
import CarouselHome from '../components/CarouselHome';
import Exerciceshome from '../components/Exerciceshome';
import Faq from '../components/Faq';
import AlimtProg from '../components/AlimtProg';

const Home = ({setGoBack}) => {
  const { t } = useTranslation();
  const navigate= useNavigate()
  const {isSoundEnabled } = useContext(coinsContext);
  // const audioRef = useAudioPlayer(home, isSoundEnabled);
  const handleRate = async () => {
    const openCapacitorSite = async () => {
      await Browser.open({ url: 'https://codnizer.blogspot.com/p/privacy-policy.html' });
    };    
    openCapacitorSite()
  };
  useEffect(() => {
    setGoBack(false);
    return () => {
      setGoBack(true);
    };
  }, []);

  useEffect(() => {
    const checkSeriesCount = async () => {
      try {
        const lastOpenedDateJson = await Preferences.get({ key: 'lastOpenedDate' });
        const lastOpenedDate = lastOpenedDateJson && lastOpenedDateJson.value ? new Date(JSON.parse(lastOpenedDateJson.value)) : null;
        const currentDate = new Date();
        // Check if lastOpenedDate is null or if it's the next day
        if (!lastOpenedDate || !isSameDay(currentDate, lastOpenedDate)) {
          if (!lastOpenedDate) {
            // If it's opened for the first time, set series count to 1  
             
            document.getElementById('add_coins').showModal()
            document.getElementById('lang').showModal()
          } 
          else {
            // If it's the next day, increment the stored series count
            document.getElementById('add_coins').showModal()
            // console.log('next day opened time open')
          }
          // Store the current date and updated series count
          
        } else {
          document.getElementById('add_coins').close()
          // If it's the same day, do nothing
          // console.log('already opened time open')
         }
      } catch (error) {
        console.error('Error checking series count:', error);
      }
    };
    
        checkSeriesCount();
    
   
  }, []);
  const isSameDay = (date1, date2) => {
    const differenceInMilliseconds = Math.abs(date1 - date2);
    const twelveHoursInMilliseconds = 12 * 60 * 60 * 1000;
    return differenceInMilliseconds < twelveHoursInMilliseconds;
};


  return (

    <>
    <CarouselHome/>
    <Exerciceshome/>
    <Faq/>
    <AlimtProg />
   
   
   
     {/* <div className="font-cairo cairo-bold">
      <h1 className="text-2xl font-bold font-cairo">Welcome to the Gym App</h1>
      <p className="text-base">This app supports both Arabic and English text.</p>
      <p className="text-base cairo-bold"> هدا التطبيق يدعم العربية</p>
    </div> */}


    {/* <img  className="my-8 max-h-[25vh] animate-spin" src={football} alt="" />
    <img  className="my-5 max-h-[10vh]   " src={logo} alt="" />
     
    <div className='flex flex-col gap-4'>
      <div className=' animate-blink flex justify-center items-center ' >
      <button  onClick={()=>{navigate('/start')}} className=" play_button  py-4   text-gray-50   "><Link to="/start"><img className='h-[50px] animate-pulse' src={playbtn} alt="" /></Link></button>
   
      </div>
     <button onClick={()=>{navigate('/how-to-play')}}  className="normal_button">{t('how to play')}</button>
    </div> */}

{/* Modals */}

<SettingsModal />
<PrivacyModal/>
<RateModal/>

{/* end modals */}


{/* <a onClick={handleRate} className=" text-gray-300 poppins-regular ">Privacy Policy</a>

    <div className='flex flex-row my-5 justify-around items-center w-[70%]'>
      <div onClick={() => document.getElementById('settings').showModal()} className=" shadow-sm ">
      <FcAutomatic size={"50px"} />
      </div>

      <div onClick={() => document.getElementById('rate').showModal()} className=" shadow-sm ">
      <FcRating size={"50px"} />
      </div>
  
      <div onClick={() => document.getElementById('privacy').showModal()} className=" shadow-sm ">
      <FcInfo size={"50px"}/>
      </div>
    

    




    </div> */}
    

    
    </>
    
    
  )
}

export default Home