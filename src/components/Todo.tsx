import React, { useState } from 'react'
import Form from './Form'
import ListTodo from './ListTodo'
import { FaTasks, FaPlus } from 'react-icons/fa'

const Todo: React.FC = () => {
  return (
    <div className='w-11/12 lg:w-7/12 mx-auto mt-16 '>
      {/* <div className='p-3 border-b bg-gray-100 font-bold flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <FaTasks className='text-lg' />
          Todo <span>({3})</span>
        </div>
        <FaPlus className='text-lg text-blue-600 cursor-pointer' />
      </div>
      <div className='mx-3.5 mt-3 mb-6'>
        <Form />
        <ListTodo />
      </div> */}
    </div>
  )
}

export default Todo
