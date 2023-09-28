import React, { useState } from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

const CardActivity = (props) => {
    const {id, title, created_at, handleDeletePopup, handleCardClick} = props;

    const createdDate = new Date(created_at);
    const formattedDate = createdDate.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const handleClick = (id) => {
        handleDeletePopup(id);
    }

  return (
    <div>
        <div className='rounded-2xl cursor-default h-[234px] w-[235px] shadow-xl pt-[22px] pb-[25px] px-[27px] bg-white'>
            <div className='flex flex-col'>
                <h1 data-cy="activity-item-title" className='text-lg font-semibold' onClick={handleCardClick}>{title}</h1>
                <div className=''>
                    <div className='flex justify-between items-center'>
                        <p data-cy="activity-item-date" className='text-sm font-medium text-gray'>{formattedDate}</p>
                        <HiOutlineTrash data-cy="activity-item-delete-button" className='text-gray' size={24} onClick={() => handleClick(id)}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardActivity