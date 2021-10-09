import React from 'react'

const ListTodo: React.FC = () => {
  const todos = [
    { id: 1, name: 'html' },
    { id: 2, name: 'php' },
  ]
  return (
    <div className='border-r border-b border-l mt-6'>
      {todos.map((e, index) => (
        <div
          key={e.id}
          className={
            index % 2 !== 0
              ? 'border-t h-14 flex items-center pl-4'
              : 'border-t h-14 flex items-center pl-4 bg-gray-300'
          }
        >
          <input type='checkbox' name='' id='' />
          <p className='pl-4 w-8/12'>{e.name}</p>
          <button className='px-5 py-2 border rounded mr-4 bg-green-500'>
            Edit
          </button>
          <button className='px-5 py-2 border rounded bg-red-500'>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default ListTodo
