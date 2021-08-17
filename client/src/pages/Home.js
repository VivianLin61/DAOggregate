/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { BiFilter } from 'react-icons/bi'
import DaoCard from '../components/DaoCard.js'
import { TiArrowSortedDown } from 'react-icons/ti'
import { numberWithCommas, sort } from '../utils.js'
import { motion, AnimatePresence } from 'framer-motion'
import {
  categories,
  dateFounded,
  blockchain,
  total_value_locked,
} from '../data/options.js'
import SelectFilters from '../components/SelectFilters.js'
function Home(props) {
  const [daos, setDaos] = useState(props.daos)
  const [totalDAOs, setTotalDAOs] = useState(0)
  const [totalAUM, setTotalAUM] = useState(0)
  const [activeItem, setActiveItem] = useState('All')
  const [filteredDate, setFilterDate] = useState({
    value: 'all',
    label: 'All Dates',
  })
  const [filteredBlockchain, setFilterBlockchain] = useState({
    value: 'all',
    label: 'All',
  })
  const [fliterdTVL, setFilterTVL] = useState({
    value: { low: -1, high: -1 },
    label: 'All ',
  })
  const [showFilters, setShowFilters] = useState(false)
  const handleItemClick = (e) => {
    setActiveItem(e.target.outerText)
  }

  const filterNames = (filterdDaos) => {
    const updatedDaos = filterdDaos
      ? filterdDaos.filter((dao) => {
          return (
            dao.full_name.toLowerCase().indexOf(props.search.toLowerCase()) !==
            -1
          )
        })
      : daos
    setDaos(updatedDaos)
    return updatedDaos
  }

  const filterCategories = (filterdDaos) => {
    if (activeItem === 'All') {
      setDaos(filterdDaos)
      return filterdDaos
    }
    const updatedDaos = filterdDaos
      ? filterdDaos.filter((dao) => {
          return dao.category === activeItem
        })
      : daos

    setDaos(updatedDaos)
    return updatedDaos
  }

  const filterDateFounded = (filterdDaos) => {
    if (filteredDate.value === 'all') {
      setDaos(filterdDaos)
      return filterdDaos
    }
    const updatedDaos = filterdDaos
      ? filterdDaos.filter((dao) => {
          return dao.date_founded.indexOf(filteredDate.value) !== -1
        })
      : daos

    setDaos(updatedDaos)
    return updatedDaos
  }

  const filterBlockchain = (filterdDaos) => {
    if (filteredBlockchain.value === 'all') {
      setDaos(filterdDaos)
      return filterdDaos
    }
    const updatedDaos = filterdDaos
      ? filterdDaos.filter((dao) => {
          return dao.blockchain && dao.blockchain === filteredBlockchain.value
        })
      : daos

    setDaos(updatedDaos)
    return updatedDaos
  }

  const filterTVL = (filterdDaos) => {
    if (fliterdTVL.value.low === -1) {
      setDaos(filterdDaos)
      return filterdDaos
    }
    const updatedDaos = filterdDaos
      ? filterdDaos.filter((dao) => {
          return (
            dao.tvl &&
            dao.tvl >= fliterdTVL.value.low &&
            dao.tvl < fliterdTVL.value.high
          )
        })
      : daos
    setDaos(updatedDaos)
    return updatedDaos
  }

  //apply filters
  useEffect(() => {
    filterTVL(
      filterBlockchain(
        filterCategories(filterDateFounded(filterNames(props.daos)))
      )
    )
  }, [filteredDate, activeItem, props.search, filteredBlockchain, fliterdTVL])

  //sort
  const sortBy = (field) => {
    const newItems = sort(field, daos)
    setDaos(newItems)
  }

  //Get summary card data
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

  //Components
  const DaoHeader = ({ sortField, field }) => {
    return (
      <button
        className='p-2'
        onClick={() => {
          sortBy(sortField)
        }}
      >
        {field} <TiArrowSortedDown />
      </button>
    )
  }
  const SummaryCard = ({ title, info }) => {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{info}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
  return (
    <div className='app-container home'>
      <h1>Daolist</h1>
      <div className='summary'>
        <SummaryCard
          title={'Number of DAOs'}
          info={totalDAOs ? totalDAOs : 0}
        />
        <SummaryCard
          title={'Total AUM (USD)'}
          info={totalAUM ? `$${numberWithCommas(totalAUM)}` : 0}
        />
      </div>
      <div className='categories'>
        <div>
          {categories.map((category, index) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={index}
              onClick={handleItemClick}
              className={activeItem === category ? 'active' : ''}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <button
          className='filter-btn'
          style={{
            backgroundColor: `${
              showFilters ? 'var(--main-color)' : ' var(--bg-secondary)'
            }`,
            borderColor: `${
              showFilters ? 'var(--main-color)' : ' var(--bg-secondary)'
            }`,
          }}
          onClick={() => {
            setShowFilters(!showFilters)
          }}
        >
          <BiFilter />
          Filters
        </button>
      </div>
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className={'filter-options'}
          >
            <div className='date-founded'>
              <h3>Date Founded</h3>
              <SelectFilters
                initial={filteredDate}
                callback={(e) => {
                  setFilterDate(e)
                }}
                options={dateFounded}
              />
            </div>
            <div className='blockchain'>
              <h3>Blockchain</h3>
              <SelectFilters
                initial={filteredBlockchain}
                callback={(e) => {
                  setFilterBlockchain(e)
                }}
                options={blockchain}
              />
            </div>
            <div className='total-value-locked'>
              <h3>TVL</h3>
              <SelectFilters
                initial={fliterdTVL}
                options={total_value_locked}
                callback={(e) => {
                  setFilterTVL(e)
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <hr />
      <div className='dao-header'>
        <DaoHeader sortField='full_name' field='NAME' />
        <DaoHeader sortField='category' field='CATEGORY' />
        <DaoHeader sortField='aum' field='AUM (USD)' />
        <DaoHeader sortField='twl' field='TWITTER FOLLOWERS' />
        <DaoHeader sortField='date_founded' field='FOUNDED DATE' />
        <div className='p-2'></div>
      </div>
      <hr />
      <div className='daos'>
        {daos && daos.length > 0 ? (
          daos.map((dao) => <DaoCard key={dao.id} dao={dao} />)
        ) : (
          <div className='no-results'>No results found</div>
        )}
      </div>
    </div>
  )
}

export default Home
