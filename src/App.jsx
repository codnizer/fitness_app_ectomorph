 
import './App.css'
import './index.css'
import '@ionic/react/css/core.css';
import { setupIonicReact } from '@ionic/react';
import { Route, Routes,useNavigate } from 'react-router-dom';
import {Home } from './screens'
 import { App as CapacitorApp  } from '@capacitor/app';
 import { IonContent, IonHeader, IonToolbar, IonApp,IonFooter, IonTitle } from '@ionic/react';
 import ExitAppModal from './components/ExitAppModal';
import { useContext , useEffect, useState} from "react";

import { LocalNotifications } from '@capacitor/local-notifications';
import { initializeAdMob } from './admob/adMobService.ts';
import { banner } from "./admob/banner.ts";
import { useTranslation } from 'react-i18next';
import Welcome from './screens/Welcome.jsx';
import PartExercise from './screens/PartExercise.jsx';
import Navbar from './components/Navbar.jsx';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import SignIn from './screens/SignIn.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import { useAuth } from './authContext';
import Profile from './screens/Profile.jsx';

setupIonicReact();
  
export default function App() {
  const { t,i18n } = useTranslation();
  const { user, logout } = useAuth(); // Get user data and logout function
  useEffect(() => {
    const scheduleNotification = async () => {
      await LocalNotifications.requestPermissions();
      
      const notification = {
        title: t('notification title'),
        body: t('notification description'),
        id: 1,
        schedule: {
          on: { hour: 14, minute: 0 }, // Set your desired time here
          repeats: true, // Set to repeat daily
        }
      };

      await LocalNotifications.schedule({
        notifications: [notification],
      });
    };

    // Ensure that the translation function is ready before scheduling the notification
    if (i18n.isInitialized) {
      scheduleNotification();
    } else {
      i18n.on('initialized', scheduleNotification);
    }
  }, [t, i18n]);



  useEffect(() => {
    
    initializeAdMob()
    // important banner to activate
    banner()
  }, []);


  const navigate = useNavigate();

  const[goBack,setGoBack]=useState(true)
  const[goHome,setGoHome]=useState(false)

    //back handler
    CapacitorApp.addListener('backButton', async ({ canGoBack }) => {
      if (!canGoBack) {
        // Show the exit confirmation modal
        document.getElementById('exit_app').showModal();
      } else {
        window.history.back();
      }
    });
    const handleConfirmExit = () => {
        CapacitorApp.exitApp();
    };
    const handleCancelExit = () => {
      document.getElementById('exit_app').close();
    };
    //end back handler

  return (
    <>
      <IonApp  >
      <IonContent className="ion-padding">
      <Navbar />
      <div className="bg-background-gray flex justify-around   min-h-[100%]">
      <div className='container max-w-[95%] mx-auto flex flex-col justify-around items-center pt-[64px]  ' >
      
    <Routes>
      <Route path='/' element={<Home setGoBack={setGoBack} />} />
      <Route path='/sign-in' element={ <SignIn/> } />
      <Route path='/register' element={ <RegisterScreen/> } />
      <Route path='/profile' element={ <Profile/> } />
      <Route path='/welcome' element={ <Welcome/> } />
      <Route path='/part-exs' element={ <PartExercise/> } />
 </Routes>
    </div>
    </div>
    </IonContent>

      <ExitAppModal onConfirm={handleConfirmExit}
      onCancel={handleCancelExit} />
      <IonFooter   >
        <IonToolbar className='h-[65px]'>
          {/* <IonTitle>Ad placement</IonTitle> */}
        </IonToolbar>
      </IonFooter>
    </IonApp>
    </>
  
  )
}