import React from 'react'

function Dao(props) {
  const { match } = props
  const id = match.params.daoId
  return <div className='app-container'>{id}</div>
}

export default Dao
