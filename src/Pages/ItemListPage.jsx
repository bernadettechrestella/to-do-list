import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom';
import ButtonTambah from '../components/Elements/ButtonTambah';
import { getActivityById } from '../services/activity.services';
import newListImg from '../assets/img/newList.svg';
import {IoIosArrowBack} from 'react-icons/io'
import {LuPencil} from 'react-icons/lu'
import CardList from '../components/CardList';

const ItemListPage = () => {
  const {id} = useParams();
  const [title, setTitle] = useState('')
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)
    getActivityById(id, (data) => {
      setTitle(data.title);
      setTodoItems(Object.values(data.todo_items));
    })
  }, [id])

  console.log(todoItems)

  return (
    <div className='font-poppins'>
        <Navbar />
        <div className='px-[220px] pt-[43px] w-full min-h-screen bg-semiGray'>
          <div className='flex justify-between'>
            <div className='flex gap-[19px] items-center'>
              <Link to='/'>
                <IoIosArrowBack size={32}/>
              </Link>
              <p className='font-bold text-4xl text-black'>{title}</p>
              <LuPencil size={24} className='text-gray'/>
            </div>
            <ButtonTambah />
          </div>
          {!todoItems || todoItems.length === 0 &&
            <div className='pl-[230px] pt-[103px]'>
              <img src={newListImg} alt="/"/>
            </div>
          }
          {todoItems && todoItems.length > 0 &&
            <div className='mt-[48px]'>
              {todoItems.map((item) => (
                <CardList
                  key={item.id}
                  is_active={item.is_active}
                  priority={item.priority}
                  title={item.title}/>
              ))}
            </div>
          }
        </div>
    </div>
  )
}

export default ItemListPage