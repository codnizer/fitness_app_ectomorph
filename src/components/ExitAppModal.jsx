 

  import { useTranslation } from 'react-i18next';
const ExitAppModal = ({onConfirm,onCancel}) => {
  const { t } = useTranslation();
  return (

    <dialog id="exit_app" className="modal" >
    <div className="modal-box bg-slate-800 text-white poppins-regular text-[25px] ">
      <form method="dialog">
        <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 className="font-bold text-lg text-center">{t('Exit the game!')}</h3>
      <p className="text-center py-4">{t('Do You Want To Exit The Game')}<br/>
      
     </p>
     <div className='flex flex-row gap-4 justify-center items-center'>
     <button onClick={onConfirm} className="btn btn-ghost">{t('Yes')}</button>
     <button onClick={onCancel} className="btn btn-primary">{t('No')}</button>
     </div>
    </div>
  </dialog>
  )
}

export default ExitAppModal