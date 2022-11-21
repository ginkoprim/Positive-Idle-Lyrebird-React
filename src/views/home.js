import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Positive Idle Lyrebird</title>
        <meta property="og:title" content="Positive Idle Lyrebird" />
      </Helmet>
      <div className="home-container1"></div>
    </div>
  )
}

export default Home
