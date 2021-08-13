import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Search(props) {
  const [search, setSearch] = useState('')
  console.log(search)
  return (
    <div className='menu-container'>
      <div className='search-container'>
        <Form.Control
          className='searchBar'
          placeholder='Search Dao'
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className='menu'>
          <Link to={'/add'}>
            <Button variant='primary'>
              <span style={{ fontSize: '20px' }}>+</span> Add DAO
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Search
