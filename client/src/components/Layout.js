import React from 'react'
import Sidebar from './Sidebar.js'
import Search from './Search.js'
function Layout(props) {
  const { daos, search, setSearch } = props
  return (
    <>
      <Sidebar />
      <div className='app'>
        <Search daos={daos} search={search} setSearch={setSearch} />
        {props.children}
      </div>
    </>
  )
}

export default Layout
