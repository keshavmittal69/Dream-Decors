import React from 'react'
import {Link} from  'react-router-dom'


const Blog = () => {
  return (
    <section id="blog">
    <div className="blog-section wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-2 text-content text-center">
            <h2>LATEST NEWS FROM THE BLOG</h2>
            <p>Discover the Latest Trends and Insights from Our Blogs</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-4 col-sm-6 mb-4 mb-lg-0">
            <div className="blog-item">
              <a href="#" className="card-thumb">
                <img src="image/img/b-1.jpg" alt="" className="img-fluid"/>
              </a>
              <div className="text-center px-2 mt-2">
                <h2>Sofa Selection Guide</h2>
                <p>Discover the perfect sofa for your living space with our comprehensive guide. From choosing the right style to sizing and material options, we'll help you make the best choice for your home decor.</p>
                  <Link to="/BlogPage" className="main-btn">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4 mb-lg-0">
            <div className="blog-item">
              <a href="#" className="card-thumb">
                <img src="image/img/b-2.jpg" alt="" className="img-fluid"/>
              </a>
              <div className="text-center px-2 mt-2">
                <h2>Mirror Magic: Reflecting Your Style</h2>
                <p>Explore the world of mirrors and how they can transform your living spaces. Learn about different mirror styles, 
                  placement tips, and how mirrors can create an illusion of space and light.</p>
                  <Link to="/BlogPage" className="main-btn">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4 mb-lg-0">
            <div className="blog-item">
              <a href="#" className="card-thumb">
                <img src="image/img/b-3.jpg" alt="" className="img-fluid"/>
              </a>
              <div className="text-center px-2 mt-2">
                <h2>Lighting Up Your Life: Lamp Choices</h2>
                <p>Delve into the world of lamps and lighting solutions. From table lamps to floor lamps, 
                  we guide you through the best options to illuminate your home while adding a touch of style.</p>
                <Link to="/BlogPage" className="main-btn">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Blog
