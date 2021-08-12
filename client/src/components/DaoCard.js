import React from 'react'
import { Link } from 'react-router-dom'
import { BiGlobe } from 'react-icons/bi'
import { FaTwitter } from 'react-icons/fa'
import { numberWithCommas } from '../utils.js'
function DaoCard({ dao }) {
  console.log(dao)
  return (
    <>
      {dao && (
        <Link
          to={`/dao/${dao.id}`}
          className='dao-card'
          style={{ cursor: 'pointer' }}
        >
          <div
            className='d-flex p-2 align-items-center'
            style={{ cursor: 'pointer' }}
          >
            <img
              alt='no img'
              src={dao.img}
              style={{ height: '50px', width: '50px', borderRadius: '15px' }}
            />
            <div style={{ width: '100%' }} className='ml-3'>
              <div style={{ width: '100%' }}>{dao.name}</div>
            </div>
          </div>
          <div className='d-flex p-2 align-items-center'>{dao.category}</div>
          <div className='d-flex p-2 align-items-center'>
            ${numberWithCommas(dao.aum)}
          </div>
          <div className='d-flex p-2 align-items-center'>
            {numberWithCommas(dao.twl)}
          </div>
          <div className='d-flex p-2 align-items-center'>{dao.foundDate}</div>
          <div
            className='d-flex p-2 align-items-center'
            style={{ justifyContent: 'space-between' }}
          >
            <BiGlobe />
            <FaTwitter />
          </div>
        </Link>
      )}
    </>
  )
}

export default DaoCard
