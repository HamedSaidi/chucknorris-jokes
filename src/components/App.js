import '../css/App.css'

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './lib/Header'
import Footer from './lib/Footer'
import ListPage from './pages/ListPage'
import DetailsPage from './pages/DetailsPage'

const App = (props) => (
  <main>
    <Header />
    <div className="main-body">
      <Route render={({ location }) => (
        <Switch location={location}>
          <Route exact path="/" component={ListPage} />
          <Route exact path="/joke/:id" component={DetailsPage} />
        </Switch>
      )} />
    </div>
    <Footer />
  </main>
)

export default App
