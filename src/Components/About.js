import React from "react";
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <h1 className="text-center item">ABOUT US</h1>
      <div class="card mb-3 blog bg-dark">
        <div class="row g-0">
          <div class="col-md-2">
            <img src="image/logo1.png" class="img-fluid rounded-start" alt="img" id="logoimg" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title h4">About Dream Decors</h5>
              <p class="card-text" id="Aboutp">Welcome to Dream Decors, where we transform your living space into a
                haven of style, comfort, and sophistication. At Dream Decors, we are
                passionate about interior design and believe that your home should
                reflect your unique personality and lifestyle. Our handpicked
                collection of modern interior items, including mirrors, decoration
                pieces, sofas, tables, lamps, and more, is curated to inspire and
                elevate your living spaces.
                <br /><br />
                Our mission is to bring elegance and aesthetics to your home. We
                understand that every detail matters, and that's why we offer a wide
                range of exquisite items to suit your taste. Whether you're looking
                for a statement mirror to enhance the decor, a cozy sofa to relax
                on, or the perfect lighting to set the mood, Dream Decors has you
                covered.
                <br /><br />
                We're dedicated to providing high-quality, unique, and
                thoughtfully-designed pieces that will make your home a true
                reflection of your individuality. Explore our collection and let
                Dream Decors be your partner in creating the home of your dreams.

              </p>


            </div>
          </div>
        </div>
      </div>

      <section id="products" className="products">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 text-content text-center">
                <h2>OUR TEAM MEMBERS</h2>
                <p> Meet our passionate team of interior design enthusiasts, dedicated to bringing your dream spaces to life.</p>
              </div>
              <div className="col-12">
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="jwellery" role="tabpanel" aria-labelledby="jwellery-tab">
                    <div className="row">
                      <div className="col-md-3 col-sm-6 mb-3">
                        <div className="item-product">
                          <Link to="#" className="product-thumb-link">
                            <img src="image/product-img/Lavanya.png" alt="product1" className="img-fluid" />
                          </Link>
                        </div>
                        <div className="product-info">
                          <div className="d-flex justify-content-between py-3">
                            <span className="cat-parent">Lavanya Singh</span>
                          </div>
                          <h4 className="product-title">
                            <Link to="#">BE(CSE) 7th SEM</Link>
                          </h4>
                          <div className="product-price">
                            <ins><span className="money text-white">2110992319</span></ins>
                          </div>
                          <div className="d-flex align-items-center justify-content-between py-1">


                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 mb-3">
                        <div className="item-product">
                          <Link to="#" className="product-thumb-link">
                            <img src="image/product-img/Keshav.png" alt="product1" className="img-fluid" />
                          </Link>
                        </div>
                        <div className="product-info">
                          <div className="d-flex justify-content-between py-3">
                            <span className="cat-parent">KESHAV MITTAL</span>

                          </div>
                          <h4 className="product-title">
                            <Link to="#">BE(CSE) 7th SEM</Link>
                          </h4>
                          <div className="product-price">
                            <ins><span className="money text-white">2110992313</span></ins>
                          </div>

                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 mb-3">
                        <div className="item-product">
                          <Link to="#" className="product-thumb-link">
                            <img src="image/product-img/Vanshika.png" alt="product1" className="img-fluid" />
                          </Link>
                        </div>
                        <div className="product-info">
                          <div className="d-flex justify-content-between py-3">
                            <span className="cat-parent">Vanshika</span>

                          </div>
                          <h4 className="product-title">
                            <Link to="#">BE(CSE) 7th Sem</Link>
                          </h4>
                          <div className="product-price">
                            <ins><span className="money text-white">2110992258</span></ins>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center item">VIDEOS</h1>



      </section>
    </>
  )
}

export default About;
