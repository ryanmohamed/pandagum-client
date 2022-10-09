import React from 'react';
import useSocketContext from '../../hooks/useSocketContext';
import './Landing.css'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom'

function Landing() {

  const { socket } = useSocketContext()

  return (
    <main id="Landing">
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="logo"><a href="index.html">PetMacher</a></h1>


          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#team">Team</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              <li><a className="nav-link scrollto" href="./pages/login.html">Login</a></li>


            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>

      <section id="hero"
        style={{ background: 'url("/img/two-corgis.jpeg") top center' }}>
        <div className="hero-container">
          <h3>Are You <strong>Individual, Couples, or Family</strong> ?</h3>
          <h1>Can't Decide What Pet To Get?</h1>
          <h2>Don't worry! PetMacher uses AI & Pet Quiz to help You</h2>
          <a href="#started" className="btn-get-started scrollto">Get Started</a>
        </div>
      </section>

      <main id="main">


        <section id="started" className="started">
          <div className="container">

            <div className="section-title">
              <h2>Welcome</h2>
              <h3>How To find a Perfect Pet with <span>PetMacher?</span></h3>
            </div>

            <div className="row content">
              <div className="col-lg-5 pt-4 pt-lg-0 left_column ">
                <p>
                  <strong>Four Steps to decide your pet!</strong>
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> 1. Become a member (take less a minute).</li>
                  <li><i className="ri-check-double-line"></i> 2. Create or join a room.</li>
                  <li><i className="ri-check-double-line"></i> 3. Follow AI's instructions during the game.</li>
                  <li><i className="ri-check-double-line"></i> 4. AI generates a picture of your IDEAL pet.</li>
                </ul>
              </div>

              <div className="col-lg-6 pt-4 pt-lg-0 right_column">
                <p>
                  <strong>WHY PetMacher? </strong>
                </p>
                <ul>
                  <li><i className="ri-thumb-up-fill"></i> Gaming matching process makes a lot of fun.</li>
                  <li><i className="ri-thumb-up-fill"></i> Visualize your ideal pet based on your answer.</li>
                  <li><i className="ri-thumb-up-fill"></i> Immediate Chat feature to share your thoughts with participants.</li>
                  <li><i className="ri-thumb-up-fill"></i> Result can be stored in members' account for future reviews.</li>
                </ul>

                { /* React REVISION (Ryan): React is usually used for single page web
                     apps, when we're linking routes in OUR domain and want to maintain React structure
                      we must use a package call react-router to handle it for us,
                      all possible routes exist in the BrowserRouter (index.js),
                      with the associated element rendered for each route.
                    But instead of a tags, use the react-router component "Link"
                */}
                <Link to='/login' className='btn-learn-more'>Try it now</Link>

              </div>
            </div>

          </div>
        </section>


        <section id="team" className="team">
          <div className="container">

            <div className="section-title">
              <h2>Team</h2>
              <h3>Our Hardworking <span>Team</span></h3>
              <p>We are all CUNY Queens College students. Go Knights!</p>
            </div>

            <div className="row justify-content-center">

              <div className="col-lg-3 col-md-6 align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="img/team/team-1.jpeg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="https://www.linkedin.com/in/ryan-mohamed-41a253189/ " target="_blank"><i className="bi bi-linkedin" data-toggle="tooltip" data-placement="bottom" title="Linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Ryan</h4>
                    <span>Developer</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="/img/team/team-2.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="https://www.linkedin.com/in/chingkung310/" target="_blank"><i className="bi bi-linkedin" data-toggle="tooltip" data-placement="top" title="Linkedin"></i></a>
                      <a href="https://sheisol310.github.io/Portfolio/" target="_blank"><i className="bi bi-bookmark-star-fill" data-toggle="tooltip" data-placement="top" title="Portfolio"></i></a>

                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Gene</h4>
                    <span>Developer</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="/img/team/team-3.jpeg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="https://www.linkedin.com/in/parabjot-chander-1a76aa213/" target="_blank"><i className="bi bi-linkedin" data-toggle="tooltip" data-placement="top" title="Linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Parabjot</h4>
                    <span>Developer</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        <section id="contact" className="contact">
          <div className="container">

            <div className="section-title">
              <h2>Contact & Feedback</h2>
              <h3>Your Feedback is important to <span>Us</span></h3>
            </div>

            {/* <div>
          <iframe width="100%" height="270px" style="border:0" loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/view?zoom=14&center=40.7367%2C-73.8203&key=AIzaSyD8P0CfxHZyYlWm1WdP6qUSNvILHG6Hp2s"></iframe>
        </div> */}

            <div className="row mt-5">

              <div className="col-lg-4">
                <div className="info">
                  <img width="70%" src="assets/img/Queens college logo.jpeg" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">

                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>

              </div>

            </div>

          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="container d-md-flex py-4">

          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright <strong><span>PetMacher</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://github.com/ryanmohamed/pandagum-client" className="github" target="_blank"><i className="bx bxl-github"></i></a>
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>


      {/* <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>



      <script src="assets/js/main.js"></script> */}
    </main>
  );


}

export default Landing;