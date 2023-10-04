import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import ButtonTambah from '../components/Elements/ButtonTambah'
import CardActivity from '../components/CardActivity'
import { useGetActivity } from '../hooks/useGetActivity'
import { PiWarning, PiWarningCircle } from 'react-icons/pi'
import { deleteActivity } from '../services/activity.services'
import { useNavigate } from 'react-router-dom'

const DashboardPage = () => {
  const [activities, setActivities, handleCreateActivity] = useGetActivity()
  const [showPopup1, setShowPopup1] = useState(false)
  const [showPopup2, setShowPopup2] = useState(false)
  const [deleteId, setDeleteId] = useState(null);
  const [popupTitle, setPopupTitle] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    setSelectedCardId(id)
    navigate(`/activityList/${id}`)
  }

  const handleDeletePopup = (id, title) => {
    setDeleteId(id)
    setShowPopup1(true)
    setPopupTitle(title)
  }

  const handleDelete = () => {
    deleteActivity(deleteId, (data) => {
      setActivities(activities.filter((activity) => activity.id !== deleteId))
      setShowPopup1(false);
      setShowPopup2(true);
      setTimeout(() => {
        setShowPopup2(false);
      }, 2000);
    })
    console.log("HANDLE DELETE TERPANGGIL")
  }

  const handleCreateNewActivity = () => {
    const title = "New Activity";
    const email = "bernadettechrestella@gmail.com"
    console.log("create new activity");
    handleCreateActivity(title, email);
    setActivities([...activities, { id: activities.length+1, title, created_at: new Date().toISOString() }]);
    console.log(activities)
  }

  return (
    <div className='font-poppins'>
        <Navbar />
        <div className='px-[220px] pt-[43px] w-full min-h-screen bg-semiGray'>
          <div className='flex justify-between'>
            <p data-cy="activity-title" className='font-bold text-4xl text-black'>Activity</p>
            <ButtonTambah onClick={handleCreateNewActivity} data-cy="activity-add-button"/>
          </div>
          {activities.length > 0 &&
            <div data-cy="activity-item" className='grid grid-cols-4 gap-[20px] w-[1000px] py-[55px]'>
              {activities.length > 0 && activities.map((activity) => (
                <CardActivity 
                  key={activity.id}
                  title={activity.title}
                  created_at={activity.created_at}
                  handleDeletePopup={() => handleDeletePopup(activity.id, activity.title)}
                  handleDelete={() => handleDelete}
                  handleCardClick={() => handleCardClick(activity.id)}/>
              ))}
            </div>
          }
          {!activities || activities.length === 0 && 
            <div data-cy="activity-empty-state" className='pl-[116px] pt-[65px]'>
              <img src="src/assets/img/newActivity.svg" alt="/"/>
            </div>
          }

        </div>
        {showPopup1 && (
            <div className='popup-container' data-cy="modal-delete">
                <div className='popup-overlay'></div>
                <div className="popup-card text-center">
                  <PiWarning data-cy="modal-delete-icon" size={84} className='text-red w-full mt-[40px] mb-[32px]'/>
                  <h1 data-cy="modal-delete-title" className='font-bold text-lg'>Apakah anda yakin menghapus activity <p className='font-bold'>"{popupTitle}"?</p></h1>
                  <div className='flex gap-[20px] px-[85px] pt-[46px] pb-[43px] font-semibold text-lg'>
                    <button data-cy="modal-delete-cancel-button" className='bg-semiGray w-[150px] h-[54px] rounded-full' onClick={() => setShowPopup1(false)}>Batal</button>
                    <button data-cy="modal-delete-confirm-button" className='bg-red w-[150px] h-[54px] text-white rounded-full' onClick={handleDelete}>Hapus</button>
                  </div>
                </div>
            </div>
        )}

        {showPopup2 && (
            <div className='popup-container' data-cy="modal-information">
                <div className='popup-overlay'></div>
                <div className="popup-card-2 flex text-center pl-[27px] py-[17px] gap-[10px]">
                  <PiWarningCircle size={24} className='text-green' data-cy="modal-information-icon"/>
                  <h1 className='font-medium text-sm pt-[2px]' data-cy="modal-information-title">Activity berhasil dihapus</h1>
                </div>
            </div>
        )}
    </div>
  )
}

export default DashboardPage