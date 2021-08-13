/* eslint-disable jsx-a11y/alt-text */
import React, { createRef } from 'react'
import { Card } from 'react-bootstrap'
import { numberWithCommas } from '../utils.js'
import { Link } from 'react-router-dom'
function Dao(props) {
  const { match, daos } = props
  const id = match.params.daoId
  const dao = daos ? daos.filter((d) => d.id === id)[0] : {}

  function Link(props) {
    return (
      <a
        rel='noreferrer'
        target='_blank'
        href={
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'
        }
      >
        <button
          style={{
            color: `${props.color}`,
            backgroundColor: `${props.background}`,
          }}
        >
          {props.name} ↗
        </button>
      </a>
    )
  }
  return (
    <div className='app-container dao'>
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
          src={dao.img ? dao.img : ''}
          style={{ height: '100px', width: '100px', borderRadius: '15px' }}
        />
        <div style={{ width: '100%' }} className='ml-3'>
          <div style={{ width: '100%' }} className='full-name'>
            {dao.full_name}
            {dao.governance_token_name ? `(${dao.governance_token_name})` : ''}
          </div>
        </div>
      </div>
      <div className='details'>
        <Card className='description'>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>{dao.description}</Card.Text>
          </Card.Body>
        </Card>
        <div style={{ width: '48%' }}>
          <Card className='links'>
            <Card.Body>
              <Card.Title>Links</Card.Title>
              <Card.Text>
                <Link
                  background={'rgba(5, 161, 198, 0.1)'}
                  color={'#1DA1F2'}
                  name={'Twitter'}
                />
                <Link
                  background={'rgba(124, 100, 252, 0.1)'}
                  color={'#7289DA'}
                  name={'Discord'}
                />
                <Link
                  background={'rgba(127, 127, 127, 0.1)'}
                  color={'white'}
                  name={'Github'}
                />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='TVL'>
            <Card.Body>
              <Card.Title>Total Value Locked (TVL)</Card.Title>
              <Card.Text>
                {dao.tvl ? numberWithCommas(dao.tvl) : 'N/A'}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='token-info'>
        <div className='title'>Token Information</div>
        <Card>
          <Card.Body>
            <div className='token-header'>
              <div className='p-2'>Symbol</div>
              <div className='p-2'>Name</div>
              <div className='p-2'>Blockchain</div>
              <div className='p-2'>Headquarters</div>
              <div className='p-2'>Date Founded</div>
            </div>
            <div className='token'>
              <div className='d-flex p-2 align-items-center'>
                {dao.governance_token_name ? dao.governance_token_name : 'N/A'}
              </div>
              <div className='d-flex p-2 align-items-center'>
                {dao.full_name ? dao.full_name : 'N/A'}
              </div>
              <div className='d-flex p-2 align-items-center'>
                {dao.blockchain ? dao.blockchain : 'N/A'}
              </div>
              <div className='d-flex p-2 align-items-center'>
                {dao.headquarters ? dao.headquarters : 'N/A'}{' '}
              </div>
              <div className='d-flex p-2 align-items-center'>
                {dao.date_founded ? dao.date_founded : 'N/A'}
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Dao
