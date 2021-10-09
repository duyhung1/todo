import React from 'react'
import { Menu } from '@headlessui/react'

const Dropdown: React.FC = () => {
  return (
    <Menu as='div' className='relative'>
      <Menu.Button className='text-gray-300 px-6 py-2 hover:bg-gray-600 border-b-2 border-gray-700 focus:border-blue-400'>
        New List
      </Menu.Button>
      <Menu.Items className='absolute left-0 top-14 border z-10'>
        <Menu.Item as='div' className='p-5'>
          <p>List Name</p>
          <input type='text' name='' id='' className='border-b' />
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default Dropdown
