/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import DaoCard from '../components/DaoCard.js'
import {
  numberWithCommas,
  isInIncreasingOrder,
  makeCompareFunction,
} from '../utils.js'
function Home(props) {
  const [daos, setDaos] = useState(props.daos)
  const [totalDAOs, setTotalDAOs] = useState(0)
  const [totalAUM, setTotalAUM] = useState(0)
  const [activeItem, setActiveItem] = useState('All')
  const handleItemClick = (e) => {
    setActiveItem(e.target.outerText)
  }

  const filterNames = ({ full_name }) => {
    return full_name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1
  }

  useEffect(() => {
    const updatedDaos = filterCategories()
    setDaos(updatedDaos.filter(filterNames))
  }, [props.search])

  useEffect(() => {
    setTotalDAOs(daos ? daos.length : 0)
    setTotalAUM(
      daos
        ? daos.reduce((accumulator, currentValue) => {
            const aum = isNaN(parseInt(currentValue.aum))
              ? 0
              : parseInt(currentValue.aum)

            return accumulator + aum
          }, 0)
        : 0
    )
  }, [daos])
  useEffect(() => {
    filterCategories()
  }, [activeItem])

  const filterCategories = () => {
    if (activeItem === 'All') {
      setDaos(props.daos)
      return props.daos
    }
    const updatedDaos = props.daos
      ? props.daos.filter((dao) => {
          return dao.category === activeItem
        })
      : daos

    setDaos(updatedDaos)
    return updatedDaos
  }
  const sortBy = (field) => {
    let oldItemsIds = []
    let itemsToSort = []

    for (let i = 0; i < daos.length; i++) {
      let item = daos[i]
      oldItemsIds.push(item.id)
      itemsToSort.push(item)
    }

    let sortIncreasing = true

    // IS IT ALREADY SORTED ACCORDING TO THE SELECTED
    // CRITERIA IN INCREASING ORDER?
    if (isInIncreasingOrder(itemsToSort, field)) {
      sortIncreasing = false
    }

    let compareFunction = makeCompareFunction(field, sortIncreasing)
    itemsToSort = itemsToSort.sort(compareFunction)

    // NOW GET THE SORTED ORDER FOR IDS
    let newItems = []
    for (let i = 0; i < itemsToSort.length; i++) {
      let item = itemsToSort[i]
      newItems.push(item)
    }
    setDaos(newItems)
  }

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
            <Card.Text>{totalDAOs ? totalDAOs : 0}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Total AUM (USD)</Card.Title>
            <Card.Text>
              {totalAUM ? `$${numberWithCommas(totalAUM)}` : 0}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='categories'>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={handleItemClick}
            className={activeItem === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div className='dao-header'>
        <button
          className='p-2'
          onClick={() => {
            sortBy('full_name')
          }}
        >
          NAME
        </button>
        <button
          className='p-2'
          onClick={() => {
            sortBy('category')
          }}
        >
          CATEGORY
        </button>
        <button
          className='p-2'
          onClick={() => {
            sortBy('aum')
          }}
        >
          AUM (USD)
        </button>
        <button
          className='p-2'
          onClick={() => {
            sortBy('aum')
          }}
        >
          TWITTER FOLLOWERS
        </button>
        <button
          className='p-2'
          onClick={() => {
            sortBy('aum')
          }}
        >
          FOUNDED DATE
        </button>
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
