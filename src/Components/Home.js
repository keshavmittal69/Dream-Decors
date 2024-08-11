import React from 'react'
import {Link} from 'react-router-dom'
import BestSeller from './BestSeller'
import Blog from './Blog'
import Deal from './Deal'
import NewArrival from './NewArrival'

const Home = () => {
  return (
    <>
    <section id="home">
    <div id="carouselExampleControls" className="carousel" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="image/bg/bg1.jpg" className="d-block w-100" alt="img-1"/>
          <div className="carousel-caption text-center ">
            <h1>up to 45% off</h1>
            <p>Discover a world of interior inspiration where your dream home takes shape, one piece at a time.</p>
            <Link to="/Products" className="main-btn">Shop now</Link>
          </div>
        </div>
        <div className="carousel-item">
          <img src="image/bg/bg2.jpg" className="d-block w-100" alt="img-2"/>
          <div className="carousel-caption text-center">
            <h1>up to 30% off</h1>
            <p>Illuminate Your Space with Elegance and Style – Welcome to Our World of Lamps and Interior Brilliance!</p>
              <Link to="/Products" className="main-btn">Shop now</Link>
          </div>
        </div>
        <div className="carousel-item">
          <img src="image/bg/bg3.jpg" className="d-block w-100" alt="img-3"/>
          <div className="carousel-caption text-center">
            <h1>up to 25% off</h1>
            <p>Step inside our world of mirrors, where every reflection tells a story of sophistication and style. Explore a curated collection that mirrors your unique vision of home.</p>
              <Link to="/Products" className="main-btn">Shop now</Link>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  <NewArrival/>
  <BestSeller/>
  <Deal/>
  <Blog/>

  </>
  )
}

export default Home
