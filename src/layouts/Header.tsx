import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CreateListTodo from './CreateListTodo'
import MyDialog from '../components/MyDialog'

type TCategory = {
  name: string
  id: number | string
  path: string
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const categories: TCategory[] = [
    { name: 'Lists', id: 1, path: '/' },
    { name: 'Today', id: 2, path: '/today' },
  ]

  const onClick = () => {
    setIsOpen(!isOpen)
    console.log('test click', isOpen)
  }
  console.log('test render')

  return (
    <div className='h-14 bg-gray-800 flex items-center justify-between px-2 md:px6'>
      {window.location.pathname === '/' ? (
        <CreateListTodo />
      ) : (
        <div style={{ width: '109.89px' }}></div>
      )}
      <div className=' gap-3 hidden md:flex'>
        {categories.map((e) => (
          <NavLink
            key={e.id}
            exact
            to={e.path}
            className='text-gray-300 px-10 py-2 border-b-2 border-gray-800 hover:bg-gray-700 hover:border '
            activeClassName='border-blue-400'
          >
            {e.name}
          </NavLink>
        ))}
      </div>
      <button
        className='px-3 py-2 text-white rounded bg-blue-500'
        onClick={onClick}
      >
        Login
      </button>
      <MyDialog isOpen={isOpen} onClick={onClick} />
    </div>
  )
}

export default Header
