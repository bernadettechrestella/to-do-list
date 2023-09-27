import React from 'react'
import {LuPencil} from 'react-icons/lu'
import {BsDot} from 'react-icons/bs'
import { HiOutlineTrash } from 'react-icons/hi'

const CardList = (props) => {
    const {id, is_Active, priority, title} = props;

    const priorityColors = {
        'very-high': 'text-very-high',
        'high': 'text-high',
        'medium': 'text-medium',
        'low': 'text-low',
        'very-low': 'text-very-low',
    }

    const dotColorClass = priorityColors[priority] || '';

  return (
    <div className='flex justify-between bg-white h-[80px] px-[28px] rounded-lg shadow-lg mb-[10px]'>
        <div className="flex text-center items-center">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blueSky bg-white border-gray rounded focus:ring-blueSky focus:ring-2 mr-[22px]"/>
            <BsDot size={50} className={dotColorClass}/>
            <label htmlFor="default-checkbox" className="text-lg font-medium mx-[16px]">{title}</label>
            <LuPencil className='text-gray' size={15}/>
        </div>
        <div className='flex text-center items-center'>
            <HiOutlineTrash size={24} className='text-gray'/>
        </div>
    </div>
  )
}

export default CardList