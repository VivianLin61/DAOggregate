import React from 'react'
import Sidebar from './Sidebar.js'
import Search from './Search.js'
function Layout(props) {
  return (
    <>
      <Sidebar />
      <div className='app'>
        <Search />
        {props.children}
      </div>
    </>
  )
}

export default Layout
