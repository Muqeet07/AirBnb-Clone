import React from 'react'
import './Home.css';
import Hero from './hero/Hero';
import ExploreNearby from './explorenearby/ExploreNearby';
import LiveAnywhere from './liveanywhere/LiveAnywhere';
import BecomeAHost from './becomeahost/BecomeAHost';
import Discover from './discoverexperiences/Discover';
import Inspiration from './inspirationforfuture/Inspiration';

function Home() {
  return (
    <div className="home">
        <Hero />
        <ExploreNearby />
        <LiveAnywhere />
        <BecomeAHost />
        <Discover />
        <Inspiration />
    </div>
  )
}

export default Home
