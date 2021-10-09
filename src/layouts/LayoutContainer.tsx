import React from 'react'
import Header from './Header'

const LayoutContainer: React.FC = (props) => {
  return (
    <div className='container mx-auto bg-blue-50 h-screen'>
      <Header />
      {props.children}
    </div>
  )
}

export default LayoutContainer
