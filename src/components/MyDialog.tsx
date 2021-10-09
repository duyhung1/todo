import { Dialog } from '@headlessui/react'
import React from 'react'

interface ICheck {
  isOpen: boolean
  onClick: () => void
}
const MyDialog: React.FC<ICheck> = (props) => {
  const { isOpen, onClick } = props

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        console.log('test outsite')
        onClick()
      }}
      className='fixed z-10 inset-0 overflow-y-auto'
    >
      <div className='flex items-center justify-center min-h-screen'>
        <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
        <div className='relative bg-white rounded max-w-sm mx-auto w-3/6'>
          <Dialog.Title>Complete your order</Dialog.Title>
          <div className='h-60 border rounded'></div>
          <button onClick={() => onClick()}>Cancel</button>
        </div>
      </div>
    </Dialog>
  )
}

export default MyDialog
