import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { FaCaretUp } from 'react-icons/fa'

const CreateListTodo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const checkModal = () => {
    setIsOpen(!isOpen)
    console.log('test')
  }
  return (
    <>
      <button
        onClick={checkModal}
        className={`text-gray-300 px-6 py-2 hover:bg-gray-700 border-b-2 ${
          isOpen ? 'border-blue-400' : 'border-gray-800'
        }`}
      >
        New List
        <FaCaretUp
          className={`text-3xl absolute text-gray-800 top-11 ${
            isOpen ? '' : 'hidden'
          }`}
        />
      </button>

      <Dialog
        open={isOpen}
        onClose={() => checkModal()}
        className='fixed z-10 inset-0 overflow-y-auto'
      >
        <div className='container mx-auto pl-4 pt-16'>
          <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
          <div className='relative bg-gray-800 rounded max-w-sm w-10/12 md:w-3/6 p-5 text-gray-300'>
            <p>List Name</p>
            <form>
              <input
                type='text'
                name=''
                id=''
                className='pl-1 border-b-2 border-blue-600 focus:outline-none bg-gray-800 w-full mt-3'
              />
              <div className='flex justify-between mt-4'>
                <button
                  className='px-3 md:px-10 py-2 bg-gray-700'
                  onClick={() => checkModal()}
                >
                  Cancel
                </button>
                <button
                  className='px-3 md:px-10 py-2 bg-gray-700'
                  type='submit'
                  disabled
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </Dialog>
    </>
  )
}
export default CreateListTodo
