import React from 'react'
import { Link } from 'react-router-dom'

const BestSeller = () => {
  return (
    <section id="products" className="products">
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 text-content text-center">
            <h2>BEST SELLERS</h2>
            <p> Experience Unmatched Quality and Style with Our Bestsellers.</p>
          </div>
          <div className="col-12">
            <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="jwellery-tab" data-bs-toggle="tab" data-bs-target="#jwellery"
                  type="button" role="tab" aria-controls="jwellery" aria-selected="true">Sofas</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="ring-tab" data-bs-toggle="tab" data-bs-target="#ring" type="button"
                  role="tab" aria-controls="ring" aria-selected="false">Mirrors</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="earings-tab" data-bs-toggle="tab" data-bs-target="#earings" type="button"
                  role="tab" aria-controls="earings" aria-selected="false">Chandeliers</button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="jwellery" role="tabpanel" aria-labelledby="jwellery-tab">
                <div className="row">
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/b-1.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Sofas</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Brown Asthetic Sofa</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">$800.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                          <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/b-2.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Sofas</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/products">Modern 7-Seat Modular Sofa Round</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">$4000.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                          <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/b-3.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Sofas</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">White Premium Quality Round Sofa</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">$700.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                          <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/b-4.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Sofas</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Antique Silver-Gold Sofa</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">$3000.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="ring" role="tabpanel" aria-labelledby="ring-tab">
                <div className="row">
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/r-1.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Mirrors</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Round Mirror with LED Light</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">$350.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/r-2.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Mirrors</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Rectangular mirror with Stone Border</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">$300.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/r-3.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Mirrors</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Marble Border Mirror</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">$400.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/r-4.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Mirrors</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Floral Round Mirror</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">$600.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="earings" role="tabpanel" aria-labelledby="earings-tab">
                <div className="row">
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/e-1.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Lamps</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Falling Drops Chandelier</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">$700.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/e-2.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Lamps</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Golden Chandelier</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">$600.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/e-3.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Lamps</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Modern Chandelier</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">$500.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/e-4.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Lamps</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Floral Contemporary Chandelier</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">$550.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
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
    </div>
  </section>
  )
}

export default BestSeller
