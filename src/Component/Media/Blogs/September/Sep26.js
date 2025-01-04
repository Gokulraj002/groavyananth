import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Banner from "../../../../images/News.jpg";
import Banner1 from "../../../../images/news-mob.png";
import Images from "../../../../images/news-groavy.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Sep26() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Helmet>
        <title>Best Managed Farmland Sales Company - Groavy</title>
        <meta
          name="description"
          content="As the best managed farmland sales company, we offer premium agricultural investments near Chikkaballapur. Managed farmland ensures sustainable growth and high returns."
        />
        <meta
          name="keywords"
          content="Groavy Buildcon, farmland investments, sustainable agriculture, luxury living, Elegant Orchards Estate, 2025 investment"
        />
        <meta name="author" content="Groavy Team" />
        <meta
          property="og:title"
          content="Best Managed Farmland Sales Company - Groavy"
        />
        <meta
          property="og:description"
          content="As the best managed farmland sales company, we offer premium agricultural investments near Chikkaballapur. Managed farmland ensures sustainable growth and high returns."
        />
        <meta property="og:image" content={Images} /> {/* Dynamic Image URL */}
        <meta
          property="og:url"
          content="https://www.groavy.com/blogs/why-investors-trust-groavy-Buildcon-for-farmland-projects/"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Groavy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Managed Farmland Sales Company - Groavy"
        />
        <meta
          name="twitter:description"
          content="As the best managed farmland sales company, we offer premium agricultural investments near Chikkaballapur. Managed farmland ensures sustainable growth and high returns."
        />
        <meta name="twitter:image" content={Images} /> {/* Dynamic Image URL */}
        <meta name="twitter:creator" content="@GroavyTeam" />
        <link
          rel="canonical"
          href="https://www.groavy.com/blogs/why-investors-trust-groavy-Buildcon-for-farmland-projects/"
        />
      </Helmet>

      <div className="position-relative pb-5 bg-light">
        <picture className="w-100">
          <source srcSet={Banner1} media="(max-width: 699px)" />
          <img
            src={Banner}
            alt="Groavy Buildcon Farmland"
            width={"100%"}
            height={"auto"}
            className="w-100"
          />
        </picture>

        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 id="head" className="text-white text-center">
            <FontAwesomeIcon
              icon={faSeedling}
              className="icon-before animated-icon"
            />
            Why Investors Trust Groavy Buildcon for Farmland Projects
            <FontAwesomeIcon
              icon={faSeedling}
              className="icon-after animated-icon"
            />
          </h1>
        </div>
      </div>

      <div className="container text-secondary textalign">
        <p className="para-color3">
          As award winners in the farmland development sector, Groavy Buildcon
          never compromises on quality. Our commitment to delivering exceptional
          projects ensures that client satisfaction is our top priority. We take
          pride in maintaining high standards and implementing sustainable
          practices that foster trust and reliability in every investment. With{" "}
          <Link to="/">Groavy Buildcon</Link> , you can be confident that your
          agricultural projects are in expert hands, dedicated to your success.{" "}
          <b>Groavy Buildcon' farmland projects</b>! Let's explore why more and
          more people are choosing Groavy for their investment needs.
        </p>
        <h2 className="text-secondary text-center pb-2">
          Click Image to read News
        </h2>
        <div>
          <img
            src={Images}
            title="Click me "
            alt="Groavy Buildcon Farmland Features"
            width={"80%"}
            height={"850"}
            onClick={showModal}
            className="d-block mx-auto"
            style={{ cursor: "pointer" }} // Change cursor to pointer on hover
          />

          {/* Bootstrap Modal */}
          <Modal
            show={isModalVisible}
            onHide={handleClose}
            size="xl"
            className="rounded-0"
          >
            <Modal.Header closeButton>
              <Modal.Title>News Articles</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={Images}
                alt="Groavy Buildcon Farmland Features"
                width={"100%"}
                height={"auto"} // Set height to 800px when displayed in the modal
              />
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn-danger d-block mx-auto"
                onClick={handleClose}
              >
                Close
              </button>
            </Modal.Footer>
          </Modal>
        </div>

        <div className="para-color3 mt-5 text-secondary">
          <h2 className="text-secondary">
            What Makes Groavy Buildcon Special?
          </h2>
          <ul>
            <li className="para-color3 mb-2">
              <b>Green Farming:</b> We use eco-friendly methods to keep the land
              healthy and productive.
            </li>
            <li className="para-color3 mb-2">
              <b>Luxury Living:</b> Enjoy fancy amenities like swimming pools
              and gyms right on the farm!
            </li>
            <li className="para-color3 mb-2">
              <b>Expert Care:</b> Our team takes care of everything, so you
              don't have to worry about farming know-how.
            </li>
            <li className="para-color3 mb-2">
              <b>Clear Communication:</b> We keep you updated on how your
              investment is growing, just like the crops.
            </li>
            <li className="para-color3 mb-2">
              <b>Fast Registration:</b> We develop projects without any hassle,
              and land registration is completed for clients within 1 month!
            </li>
            <li className="para-color3 mb-2">
              <b>Free Cab Facilities:</b> We provide complimentary cab services
              for clients visiting our farmland.
            </li>
          </ul>
          {/* 
          <h2 className="text-secondary">
            Spotlight on Elegant Orchards Estate
          </h2> */}

          <h2 className="text-secondary">Cool Features of Elegant Orchards:</h2>
          <p className="para-color3">
            Let's take a closer look at our star project,{" "}
            <Link to="/elegantorchards">
              {" "}
              <b>Elegant Orchards Estate</b>
            </Link>
            . It's not just a farm; it's a slice of paradise near Bengaluru
            International Airport!
          </p>
          <ul>
            <li className="para-color3 mb-2">
              <b>Big Swimming Pool:</b> Perfect for a refreshing dip after a day
              in the sun.
            </li>
            <li className="para-color3 mb-2">
              <b>Always-Open Cafeteria:</b> Hungry at midnight? No problem!
            </li>
            <li className="para-color3 mb-2">
              <b>Sun-Powered Lights:</b> We use solar energy to light up the
              streets at night.
            </li>
            <li className="para-color3 mb-2">
              <b>Modern Gym:</b> Stay fit while enjoying beautiful farm views.
            </li>
            <li className="para-color3 mb-2">
              <b>Yoga Area:</b> Find your inner peace surrounded by nature.
            </li>
          </ul>

          <h2 className="text-secondary">Award-Winning Excellence</h2>
          <p className="para-color3">
            <b>Elegant Orchards Estate </b>
            recently won the <b>Times Business Award for 2024</b>. We were named
            the <b>Best Premium & Future Ready Farmland Project</b>. It's like
            getting a gold star, but for grown-ups!
          </p>

          <h2 className="text-secondary">Why Choose Groavy Buildcon?</h2>
          <p className="para-color3">
            Investing with Groavy Buildcon is like planting a money tree (if
            those existed). Here's why:
          </p>
          <ul>
            <li className="para-color3 mb-2">
              <b>Safe Investment:</b> Farmland is steady and reliable, unlike
              the roller coaster of stocks.
            </li>
            <li className="para-color3 mb-2">
              <b>Grow Your Wealth:</b> As crops grow, so does your investment!
            </li>
            <li className="para-color3 mb-2">
              <b>Eco-Friendly:</b> Feel good knowing your money supports
              sustainable farming.
            </li>
            <li className="para-color3 mb-2">
              <b>Hassle-Free:</b> We do all the work, you reap the rewards.
            </li>
          </ul>

          <h2 className="text-secondary">Ready to Plant Your Future?</h2>
          <p className="para-color3">
            Whether you're a seasoned investor or just starting out, Groavy
            Buildcon has the perfect plot for you. Our{" "}
            <b>award-winning Elegant Orchards Estate</b> is more than just
            farmland – it's a chance to grow your wealth while living in luxury.
          </p>
          <p className="para-color3">
            Want to learn more? <Link to="/contact/">Reach out to us</Link> today
            and let's start growing your green future together! Trust us as your
            partner in success, and join the ranks of award-winning farmland
            projects with Groavy Buildcon.
          </p>
          <p className="para-color3">
            For more insights on sustainable investments, check out our{" "}
            <Link to="/managed-farmland/">sustainable farming approach</Link>!
          </p>
        </div>
      </div>
    </>
  );
}

export default Sep26;
