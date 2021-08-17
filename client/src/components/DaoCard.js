/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import { BiGlobe } from 'react-icons/bi'
import { FaTwitter } from 'react-icons/fa'
import { numberWithCommas } from '../utils.js'
function DaoCard({ dao }) {
  return (
    <>
      {dao && (
        <Link
          to={{
            pathname: `/dao/${dao.id}`,
            state: { dao: dao },
          }}
          className='dao-card'
          style={{ cursor: 'pointer' }}
        >
          <div
            className='d-flex p-2 align-items-center'
            style={{ cursor: 'pointer' }}
          >
            <img
              onError={(e) => {
                e.target.onerror = null
                e.target.src =
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/A_sample_of_the_transparent_rectangle.svg/2560px-A_sample_of_the_transparent_rectangle.svg.png'
              }}
              src={
                dao.img
                  ? dao.img
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/A_sample_of_the_transparent_rectangle.svg/2560px-A_sample_of_the_transparent_rectangle.svg.png'
              }
              style={{ height: '50px', width: '50px', borderRadius: '15px' }}
            />
            <div style={{ width: '100%' }} className='ml-3'>
              <div style={{ width: '100%' }}>{dao.full_name}</div>
            </div>
          </div>
          <div className='d-flex p-2 align-items-center'>{dao.category}</div>
          <div className='d-flex p-2 align-items-center'>
            {dao.aum ? `$${numberWithCommas(dao.aum)}` : 'N/A'}
          </div>
          <div className='d-flex p-2 align-items-center'>
            {dao.twl ? numberWithCommas(dao.twl) : 'N/A'}
          </div>
          <div className='d-flex p-2 align-items-center'>
            {dao.date_founded ? dao.date_founded : 'N/A'}
          </div>
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
