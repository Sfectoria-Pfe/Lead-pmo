import React from 'react';
import '../components/style/landing.css';
  
const Landing = () =>{
    return (
      // <div className="home-page">
      //         {/* Banner Section */}
      //         <section className="banner">
      //             <div className="banner-content">
      //                 <h1>Welcome to SprintGo</h1>
      //                 <p>Stay informed about our latest initiatives and announcements.</p>
                      
      //             </div>
      //         </section>
  
      //         {/* About Section */}
      //         <section className="about">
      //             <div className="container">
      //                 <h2>AboutUs</h2>
      //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tincidunt mauris. In hac habitasse platea dictumst. Sed ut commodo orci. Nulla hendrerit dolor quis magna ullamcorper, nec ullamcorper nunc suscipit.</p>
      //             </div>
      //         </section>
  
      //         {/* Key Initiatives Section */}
      //         <section className="key-initiatives">
      //             <div className="container">
      //                 <h2>Key Initiatives</h2>
      //                 <p>Discover our top initiatives aimed at making a difference in people's lives.</p>
                      
      //             </div>
      //         </section>
  
      //         {/* Latest News Section */}
      //         <section className="latest-news">
      //             <div className="container">
      //                 <h2>Latest News</h2>
      //                 {/* Insert news articles or links here */}
      //             </div>
      //         </section>
  
      //         {/* Contact Section */}
      //         <section className="contact">
      //             <div className="container">
      //                 <h2>Contact Us</h2>
      //                 <p>Have questions or feedback? We'd love to hear from you!</p>
                      
      //             </div>
      //         </section>
      //     </div>
  
  
  
  
  
      
          <div>
            <header>
             
              <div className="section__container header__container">
                <div className="header__content">
                  <h1>Providing an Exceptional Patient Experience</h1>
                  <p>
                    Welcome, where exceptional patient experiences are our priority.
                    With compassionate care, state-of-the-art facilities, and a
                    patient-centered approach, we're dedicated to your well-being. Trust
                    us with your health and experience the difference.
                  </p>
                  <button className="btn">See Services</button>
                </div>
                <div className="header__form">
                  <form>
                    <h4>Book Now</h4>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="text" placeholder="Address" />
                    <input type="text" placeholder="Phone No." />
                    <button className="btn form__btn">Book Appointment</button>
                  </form>
                </div>
              </div>
            </header>
    
            <section className="section__container service__container">
              <div className="service__header">
                <div className="service__header__content">
                  <h2 className="section__header">Our Special service</h2>
                  <p>
                    Beyond simply providing medical care, our commitment lies in
                    delivering unparalleled service tailored to your unique needs.
                  </p>
                </div>
                <button className="service__btn">Ask A Service</button>
              </div>
              <div className="service__grid">
                <div className="service__card">
                  <span><i className="ri-microscope-line"></i></span>
                  <h4>Laboratory Test</h4>
                  <p>
                    Accurate Diagnostics, Swift Results: Experience top-notch Laboratory
                    Testing at our facility.
                  </p>
                  <a href="#">Learn More</a>
                </div>
                <div className="service__card">
                  <span><i className="ri-mental-health-line"></i></span>
                  <h4>Health Check</h4>
                  <p>
                    Our thorough assessments and expert evaluations help you stay
                    proactive about your health.
                  </p>
                  <a href="#">Learn More</a>
                </div>
                <div className="service__card">
                  <span><i className="ri-hospital-line"></i></span>
                  <h4>General Dentistry</h4>
                  <p>
                    Experience comprehensive oral care with Dentistry. Trust us to keep
                    your smile healthy and bright.
                  </p>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </section>
            <section className="section__container about__container">
              <div className="about__content">
                <h2 className="section__header">About Us</h2>
                <p>
                  Welcome to our healthcare website, your one-stop destination for
                  reliable and comprehensive health care information. We are committed
                  to promoting wellness and providing valuable resources to empower you
                  on your health journey.
                </p>
                <p>
                  Explore our extensive collection of expertly written articles and
                  guides covering a wide range of health topics. From understanding
                  common medical conditions to tips for maintaining a healthy lifestyle,
                  our content is designed to educate, inspire, and support you in making
                  informed choices for your health.
                </p>
                <p>
                  Discover practical health tips and lifestyle advice to optimize your
                  physical and mental well-being. We believe that small changes can lead
                  to significant improvements in your quality of life, and we're here to
                  guide you on your path to a healthier and happier you.
                </p>
              </div>
              <div className="about__image">
                <img src="aboutImage" alt="about" />
              </div>
            </section>
    
            <section className="section__container why__container">
              <div className="why__image">
                <img src="chooseUsImage" alt="why choose us" />
              </div>
              <div className="why__content">
                <h2 className="section__header">Why Choose Us</h2>
                <p>
                  With a steadfast commitment to your well-being, our team of highly
                  trained healthcare professionals ensures that you receive nothing
                  short of exceptional patient experiences.
                </p>
                <div className="why__grid">
                  <span><i className="ri-hand-heart-line"></i></span>
                  <div>
                    <h4>Intensive Care</h4>
                    <p>
                      Our Intensive Care Unit is equipped with advanced technology and
                      staffed by team of professionals
                    </p>
                  </div>
                  <span><i className="ri-truck-line"></i></span>
                  <div>
                    <h4>Free Ambulance Car</h4>
                    <p>
                      A compassionate initiative to prioritize your health and
                      well-being without any financial burden.
                    </p>
                  </div>
                  <span><i className="ri-hospital-line"></i></span>
                  <div>
                    <h4>Medical and Surgical</h4>
                    <p>
                      Our Medical and Surgical services offer advanced healthcare
                      solutions to address medical needs.
                    </p>
                  </div>
                </div>
              </div>
            </section>
    
            <section className="section__container doctors__container">
              <div className="doctors__header">
                <div className="doctors__header__content">
                  <h2 className="section__header">Our Special Doctors</h2>
                  <p>
                    We take pride in our exceptional team of doctors, each a specialist
                    in their respective fields.
                  </p>
                </div>
                <div className="doctors__nav">
                  <span><i className="ri-arrow-left-line"></i></span>
                  <span><i className="ri-arrow-right-line"></i></span>
                </div>
              </div>
              <div className="doctors__grid">
                <div className="doctors__card">
                  <div className="doctors__card__image">
                    <img src="doctor1" alt="doctor" />
                    <div className="doctors__socials">
                      <span><i className="ri-instagram-line"></i></span>
                      <span><i className="ri-facebook-fill"></i></span>
                      <span><i className="ri-heart-fill"></i></span>
                      <span><i className="ri-twitter-fill"></i></span>
                    </div>
                  </div>
                  <h4>Dr. Emily Smith</h4>
                  <p>Cardiologist</p>
                </div>
                <div className="doctors__card">
                  <div className="doctors__card__image">
                    <img src="doctor2" alt="doctor" />
                    <div className="doctors__socials">
                      <span><i className="ri-instagram-line"></i></span>
                      <span><i className="ri-facebook-fill"></i></span>
                      <span><i className="ri-heart-fill"></i></span>
                      <span><i className="ri-twitter-fill"></i></span>
                    </div>
                  </div>
                  <h4>Dr. James Anderson</h4>
                  <p>Neurosurgeon</p>
                </div>
                <div className="doctors__card">
                  <div className="doctors__card__image">
                    <img src="doctor3" alt="doctor" />
                    <div className="doctors__socials">
                      <span><i className="ri-instagram-line"></i></span>
                      <span><i className="ri-facebook-fill"></i></span>
                      <span><i className="ri-heart-fill"></i></span>
                      <span><i className="ri-twitter-fill"></i></span>
                    </div>
                  </div>
                  <h4>Dr. Michael Lee</h4>
                  <p>Dermatologist</p>
                </div>
              </div>
            </section>
    
            <footer className="footer">
              <div className="section__container footer__container">
                <div className="footer__col">
                  <h3>Health<span>Care</span></h3>
                  <p>
                    We are honored to be a part of your healthcare journey and committed
                    to delivering compassionate, personalized, and top-notch care every
                    step of the way.
                  </p>
                  <p>
                    Trust us with your health, and let us work together to achieve the
                    best possible outcomes for you and your loved ones.
                  </p>
                </div>
                <div className="footer__col">
                  <h4>About Us</h4>
                  <p>Home</p>
                  <p>About Us</p>
                  <p>Work With Us</p>
                  <p>Our Blog</p>
                  <p>Terms & Conditions</p>
                </div>
                <div className="footer__col">
                  <h4>Services</h4>
                  <p>Search Terms</p>
                  <p>Advance Search</p>
                  <p>Privacy Policy</p>
                  <p>Suppliers</p>
                  <p>Our Stores</p>
                </div>
                <div className="footer__col">
                  <h4>Contact Us</h4>
                  <p>
                    <i className="ri-map-pin-2-fill"></i> 123, London Bridge Street, London
                  </p>
                  <p><i className="ri-mail-fill"></i> support@care.com</p>
                  <p><i className="ri-phone-fill"></i> (+012) 3456 789</p>
                </div>
              </div>
              <div className="footer__bar">
                <div className="footer__bar__content">
                  <p>Copyright © 2023 Web Design Mastery. All rights reserved.</p>
                  <div className="footer__socials">
                    <span><i className="ri-instagram-line"></i></span>
                    <span><i className="ri-facebook-fill"></i></span>
                    <span><i className="ri-heart-fill"></i></span>
                    <span><i className="ri-twitter-fill"></i></span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
  
  
  
  
  
  
  
  
  
    );
  }
  

export default Landing;
