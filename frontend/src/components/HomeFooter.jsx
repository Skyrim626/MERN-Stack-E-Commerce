import React from 'react'
import "../css/homefooter.css";

export default function HomeFooter() {
  return (
    <footer className='home-footer | p-5'>
      <div className="container pt-5">
        <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 g-5">
          <div className="col">
            <div className="footer-link-container">
              <p className='h5 text-light mb-4 | fw-500'>Contact</p>
              <p>Street: Claro M. Recto Avenue, Lapasan</p>
              <p>City: Cagayan de Oro City</p>
              <p>State full: Philippines</p>
              <p>Zip Code: 9000</p>
              <p>Phone Number: 088-856-1738</p>
              <p>Mobile Number: 088-856-4696</p>
            </div>
          </div>
          <div className="col">
            <div className="footer-link-container">
              <p className='h5 text-light mb-4 | fw-500'>Visit Us</p>
              <p>Getting Here</p>
              <p>Our Supporters</p>
              <p>Seating Charts</p>
              <p>Staff Directory</p>
              <p>Current Season</p>
              <p>Donor Events</p>
            </div>
          </div>
          <div className="col">
            <div className="footer-link-container">
             <p className='h5 text-light mb-4 | fw-500'>Recent Posts</p>
             <p>Breaking Down Barriers</p>
             <p>A Celebration of Success</p>
             <p>A World of Opurtunities</p>
            </div>
          </div>
          <div className="col">
            <div className="footer-link-container">
              <p className='h5 text-light mb-4 | fw-500'>Recent Posts</p>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, fugit blanditiis neque rerum quis vel. Dolores voluptatum iure soluta possimus, quia exercitationem laborum aliquid aliquam expedita similique. Pariatur, necessitatibus obcaecati!</p>
              <div class="input-group my-3">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@email.com" />
                <button class="btn btn-dark" type="button" id="button-addon2">Send</button>
              </div>

              <div className="social-media-group">
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
