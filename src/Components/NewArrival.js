import React from 'react'
import {Link} from 'react-router-dom'

const NewArrival = () => {
  return (
    <section id="new-arrivals">
    <div className="new-arrivals wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-2 text-content text-center">
            <h2>NEW ARRIVALS</h2>
            <p>Introducing Our Latest Arrivals: Elevate Your Space with Fresh Designs and Inspiration.</p>
          </div>
        </div>
        <div className="row align-item-center">
          <div className="col-sm-4 col-12 p-sm-0 card-banner">
            <div className="card-banner position-relative text-center">
              <Link to="/Products" className="card-thumb">
                <img src="image/img/img-1.jpg" alt="img-1" className="img-fluid"/>
              </Link>
              <div className="banner-info text-center">
                <h2>SOFAS</h2>
                <p>Experience Comfort Beyond Compare.</p>
                <Link to="/Products" className="main-btn">Shop now</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-12 p-sm-0 card-banner">
            <div className="card-banner position-relative text-center">
              <Link to="/Products" className="card-thumb">
                <img src="image/img/img-2.jpg" alt="img-1" className="img-fluid"/>
              </Link>
              <div className="banner-info text-center">
                <h2>MIRRORS</h2>
                <p>Reflecting Beauty in Every Glance.</p>
                <Link to="/Products" className="main-btn">Shop now</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-12 p-sm-0 card-banner">
            <div className="card-banner position-relative text-center">
              <Link to="/Products" className="card-thumb">
                <img src="image/img/img-3.jpg" alt="img-1" className="img-fluid"/>
              </Link>
              <div className="banner-info text-center">
                <h2>CHANDELIERS</h2>
                <p>Brighten Every Moment with Our Lamps</p>
                <Link to="/Products" className="main-btn">Shop now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NewArrival
