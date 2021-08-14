/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import DaoSearchResult from '../components/DaoSearchResult.js'
function Search(props) {
  const { daos, search, setSearch } = props
  const location = useLocation()
  const [searchResults, setSearchResults] = useState([])
  const [show, setShow] = useState(false)
  const node = useRef()
  useEffect(() => {
    if (search !== '') {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [search])

  useEffect(() => {
    let searchResultsContainer = document.querySelectorAll('.search-results')[0]
    if (searchResultsContainer && show) {
      let searchResultsContainer =
        document.querySelectorAll('.search-results')[0]
      searchResultsContainer.classList.add('display')
    } else if (searchResultsContainer && !show) {
      searchResultsContainer.classList.remove('display')
    }
  }, [show])
  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  })
  const handleClick = (e) => {
    if (node.current) {
      if (node.current.contains(e.target)) {
        return
      }
    }
    setShow(false)
  }

  const filterNames = ({ full_name }) => {
    return full_name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  }

  useEffect(() => {
    if (!search) return setSearchResults([])

    setSearchResults(daos.filter(filterNames))
  }, [search])

  return (
    <div className='menu-container'>
      <div className='search-container'>
        <Form.Control
          className='searchBar'
          placeholder='Search Dao'
          onChange={(e) => setSearch(e.target.value)}
        />
        <>
          {location.pathname.indexOf('/dao/') !== -1 &&
            location.pathname.indexOf('/edit') === -1 && (
              <div className='menu'>
                <Link to={`${location.pathname}/edit`}>
                  <Button variant='primary'>
                    <span style={{ fontSize: '20px' }}>+</span> Edit DAO
                  </Button>
                </Link>
              </div>
            )}{' '}
        </>
      </div>
      <>
        {location.pathname !== '/' && (
          <div ref={node} className='search-results'>
            <div className='flex-grow-1 my-2' style={{ overflowY: 'auto' }}>
              {searchResults.map((dao) => (
                <DaoSearchResult setShow={setShow} dao={dao} key={dao.id} />
              ))}
            </div>
          </div>
        )}
      </>
    </div>
  )
}

export default Search
