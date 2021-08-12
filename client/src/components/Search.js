import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
function Search(props) {
  const history = useHistory()
  const [search, setSearch] = useState('')
  return (
    <div className='menu-container'>
      <div className='search-container'>
        <Form.Control
          className='searchBar'
          placeholder='Search Dao'
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className='menu'>
          <Button variant='primary' onClick={() => history.push('add')}>
            <span style={{ fontSize: '20px' }}>+</span> Add DAO
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Search
