import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import ButtonTambah from '../components/Elements/ButtonTambah'
import CardActivity from '../components/CardActivity'
import { useGetActivity } from '../hooks/useGetActivity'
import { PiWarning, PiWarningCircle } from 'react-icons/pi'
import { deleteActivity } from '../services/activity.services'
import { useNavigate } from 'react-router-dom'

const DashboardPage = () => {
  const [activities, setActivities] = useGetActivity()
  const [showPopup1, setShowPopup1] = useState(false)
  const [showPopup2, setShowPopup2] = useState(false)
  const [deleteId, setDeleteId] = useState(null);
  const [popupTitle, setPopupTitle] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const pageRef = useRef(null);
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
      setShowPopup2(true)
    })
  }

  useEffect(() => {
    const handleClickOutsidePopup2 = (event) => {
      if (pageRef.current && !pageRef.current.contains(event.target)) {
        setShowPopup2(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutsidePopup2);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutsidePopup2);
    };
  }, []);

  return (
    <div className='font-poppins' ref={pageRef}>
        <Navbar />
        <div className='px-[220px] pt-[43px] w-full min-h-screen bg-semiGray'>
          <div className='flex justify-between'>
            <p className='font-bold text-4xl text-black'>Activity</p>
            <ButtonTambah/>
          </div>
          <div className='grid grid-cols-4 gap-[20px] w-[1000px] py-[55px]'>
            {activities.length > 0 && activities.map((activity) => (
              <CardActivity 
                key={activity.id}
                title={activity.title}
                created_at={activity.created_at}
                handleDeletePopup={() => handleDeletePopup(activity.id, activity.title)}
                handleDelete={handleDelete}
                handleCardClick={() => handleCardClick(activity.id)}/>
            ))}
          </div>
          {/* <div className='pl-[116px] pt-[65px]'>
            <img src="src/assets/img/newActivity.svg" alt="/"/>
          </div> */}

        </div>
        {showPopup1 && (
            <div className='popup-container'>
                <div className='popup-overlay'></div>
                <div className="popup-card text-center">
                  <PiWarning size={84} className='text-red w-full mt-[40px] mb-[32px]'/>
                  <h1 className='font-bold text-lg'>Apakah anda yakin menghapus activity <p className='font-bold'>"{popupTitle}"?</p></h1>
                  <div className='flex gap-[20px] px-[85px] pt-[46px] pb-[43px] font-semibold text-lg'>
                    <button className='bg-semiGray w-[150px] h-[54px] rounded-full' onClick={() => setShowPopup1(false)}>Batal</button>
                    <button className='bg-red w-[150px] h-[54px] text-white rounded-full' onClick={handleDelete}>Hapus</button>
                  </div>
                </div>
            </div>
        )}

        {showPopup2 && (
            <div className='popup-container'>
                <div className='popup-overlay'></div>
                <div className="popup-card-2 flex text-center pl-[27px] py-[17px] gap-[10px]">
                  <PiWarningCircle size={24} className='text-green'/>
                  <h1 className='font-medium text-sm pt-[2px]'>Activity berhasil dihapus</h1>
                </div>
            </div>
        )}
    </div>
  )
}

export default DashboardPage