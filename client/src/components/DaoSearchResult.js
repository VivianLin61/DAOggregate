import React from 'react'
import { Link } from 'react-router-dom'
export default function DaoSearchResult({ dao, setShow, setSearch }) {
  return (
    <Link
      className='d-flex p-2 align-items-center search-item'
      style={{ cursor: 'pointer', borderRadius: '10px' }}
      to={`/dao/${dao.id}`}
      onClick={() => {
        setShow(false)
      }}
    >
      <img
        alt='no img'
        src={dao.img}
        style={{ height: '50px', width: '50px' }}
      />
      <div className='search-result ml-3'>
        <div className='track-name'>{dao.full_name}</div>
      </div>
    </Link>
  )
}
