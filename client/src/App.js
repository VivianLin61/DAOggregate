import React, { useEffect, useState } from 'react'
import Layout from '../src/components/Layout.js'
import { Route } from 'react-router-dom'
import Home from '../src/pages/Home.js'
import Add from '../src/pages/Add.js'
import Organization from '../src/pages/Organization.js'
import Dao from '../src/pages/Dao.js'
import Learn from '../src/pages/Learn.js'
function App() {
  return (
    <Layout>
      <Route exact path='/' render={() => <Home />} />
      <Route exact path='/add' render={() => <Add />} />
      <Route exact path='/dao' render={() => <Organization />} />
      <Route
        exact
        path='/dao/:daoId'
        render={({ match, location }) => (
          <Dao location={location} match={match} />
        )}
      />
      <Route exact path='/learn' render={() => <Learn />} />
    </Layout>
  )
}

export default App
