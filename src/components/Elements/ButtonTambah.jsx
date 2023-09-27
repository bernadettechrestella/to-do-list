import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const ButtonTambah = () => {
  return (
    <button className='text-white font-poppins font-semibold text-lg bg-blueSky w-[159px] h-[54px] rounded-full'>
        <div className='flex items-center justify-center gap-[6px]'>
            <AiOutlinePlus size={24}/>
            <p>Tambah</p>
        </div>
    </button>
  )
}

export default ButtonTambah