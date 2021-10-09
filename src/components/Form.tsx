import React from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

interface IListName {
  name: string
}
const Form: React.FC = () => {
  const { register, handleSubmit } = useForm<IListName>()
  const onSubmit: SubmitHandler<IListName> = (data) => {
    console.log(data)
    console.log(register)
  }
  return (
    <div className='h-10 flex'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          className='w-10/12 min-h-full border border-r-0 rounded rounded-tr-none rounded-br-none pl-4 focus:outline-none'
          placeholder='Enter to do here'
          {...register('name', { required: true, maxLength: 20 })}
        />
        <input type='submit' className='hidden' />
      </form>
    </div>
  )
}

export default Form
