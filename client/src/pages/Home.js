import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import DaoCard from '../components/DaoCard.js'
function Home({ daos, setDaos }) {
  const categories = [
    'All',
    'Protocol',
    'Service',
    'Grant',
    'Media',
    'Social',
    'Investment',
    'Platform',
    'Collector',
  ]

  return (
    <div className='app-container home'>
      <h1>Daolist</h1>
      <div className='summary'>
        <Card>
          <Card.Body>
            <Card.Title>Number of DAOs</Card.Title>
            <Card.Text>111</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Total AUM (USD)</Card.Title>
            <Card.Text>111</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='categories'>
        {categories.map((category, index) => (
          <button key={index}>{category}</button>
        ))}
      </div>
      <hr />
      <div className='dao-header'>
        <div className='p-2'>NAME</div>
        <div className='p-2'>CATEGORY</div>
        <div className='p-2'>AUM (USD)</div>
        <div className='p-2'>TWITTER FOLLOWERS</div>
        <div className='p-2'>FOUNDED DATE</div>
        <div className='p-2'></div>
      </div>
      <hr />
      <div className='daos'>
        {daos && daos.map((dao) => <DaoCard key={dao.id} dao={dao} />)}
      </div>
    </div>
  )
}

export default Home
