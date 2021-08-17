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
          to={`/dao/${dao.id}`}
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
                  'https://s3-ca-central-1.amazonaws.com/cdn.hedgetrade.com/wp-content/uploads/2019/03/29033151/The-dao-logo.png'
              }}
              src={
                dao.img
                  ? dao.img
                  : 'https://s3-ca-central-1.amazonaws.com/cdn.hedgetrade.com/wp-content/uploads/2019/03/29033151/The-dao-logo.png'
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
