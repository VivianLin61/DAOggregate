import React, { useEffect, useState } from 'react'
import Layout from '../src/components/Layout.js'
import { Route } from 'react-router-dom'
import Home from '../src/pages/Home.js'
import Add from '../src/pages/Add.js'
import Dao from '../src/pages/Dao.js'
import { daolist } from '../src/data/daolist.js'
import Learn from '../src/pages/Learn.js'
function App() {
  const [daos, setDaos] = useState(daolist)

  useEffect(() => {
    setDaos(daolist)
  }, [])

  return (
    <Layout>
      <Route
        exact
        path='/'
        render={() => <Home daos={daos} setDaos={setDaos} />}
      />
      <Route
        exact
        path='/add'
        render={() => <Add daos={daos} setDaos={setDaos} />}
      />
      <Route
        exact
        path='/dao/:daoId'
        render={({ match, location }) => (
          <Dao daos={daos} location={location} match={match} />
        )}
      />
      <Route exact path='/learn' render={() => <Learn />} />
    </Layout>
  )
}

export default App
