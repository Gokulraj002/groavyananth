import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import Banner1 from "../../../../images/sliderimages/44.png";
import elegant from "../../../Projects/Eligent/ElegantImages/ele-log.png";
import Images1 from "../Image/sep25.jpg";
import { Helmet } from "react-helmet";
import award from "../../../../images/News.jpg";
import { Link } from "react-router-dom";
import YoutubeVideo from "../../videos/YoutubeVideo";

function Sep11th() {
  return (
    <>
      <Helmet>
        <title>Managed Farmland - GroavyBuildcon</title>
        <meta
          name="description"
          content='Managed farmland, managed farmland near Bangalore, managed farmland near Chikkaballapur, farmland for sale near Nandi Hills, premium farmland in Karnataka.'
        />
        <meta
          name="keywords"
          content="managed farmland, managed farmland near Bangalore, managed farmland near Chikkaballapur, farmland near Bangalore, farmland for sale near Nandi Hills, best managed farmland, premium farmland in Karnataka"
        />
        <meta name="author" content="GroavyBuildcon" />
        <meta property="og:title" content="Managed Farmland - GroavyBuildcon" />
        <meta
          property="og:description"
          content='Managed farmland, managed farmland near Bangalore, managed farmland near Chikkaballapur, farmland for sale near Nandi Hills, premium farmland in Karnataka.'
        />
        <meta property="og:image" content={Banner1} />
        <meta
          property="og:url"
          content="https://www.groavy.com/managed-farmland/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Managed Farmland - GroavyBuildcon"
        />
        <meta
          name="twitter:description"
          content='Managed farmland, managed farmland near Bangalore, managed farmland near Chikkaballapur, farmland for sale near Nandi Hills, premium farmland in Karnataka.'
        />
        <meta name="twitter:image" content={Banner1} />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.groavy.com/managed-farmland/" />
      </Helmet>

      {/* Banner Section */}
      <div className="position-relative bg-light">
        <picture className="w-100">
          <source srcSet={Banner1} media="(max-width: 699px)" />
          <img
            src={award}
            alt="Managed Farmland Award"
            width="100%"
            height="auto"
            className="w-100"
          />
        </picture>
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 id="head" className="text-white text-center">
            <FontAwesomeIcon
              icon={faTree}
              className="icon-before animated-icon"
            />
            Best Managed Farmland
            <FontAwesomeIcon
              icon={faTree}
              className="icon-after animated-icon"
            />
          </h1>
        </div>
      </div>

      <div className="bg-light pb-5">
        <h2 className="text-center py-md-4 font11 fs-1">
          Top Managed Farmlands Near Bangalore
        </h2>
        {/* <Managed_Land/> */}

        <div className="container-fluid g-0">
          <div className="container">
            <p className="para-color3">
              Investing in{" "}
              <Link to="/blogs/best-farmland-near-chikkaballapur">
                managed farmland near Chikkaballapur
              </Link>{" "}
              presents a remarkable opportunity for nature enthusiasts and savvy
              investors. Nestled in an idyllic location with rich, fertile soil,
              this land is primed for thriving agricultural ventures or the
              creation of a serene, private retreat. Its proximity to iconic
              landmarks like Nandi Hills and Bangalore ensures you’ll enjoy both
              tranquility and convenience. This managed farmland offers the
              perfect blend of peaceful living and high-potential investment,
              promising not only a sustainable lifestyle but also exceptional
              long-term financial rewards. Whether you're looking for <strong>farmland
              near Bangalore Airport</strong> or exploring farmland investment
              opportunities, this region guarantees excellent returns and
              growth. Don’t miss out on owning a piece of the best farmland
              project near Bangalore – where nature meets luxury and value.
            </p>

            <div className="row">
              <div className="col-6 center1">
                <ul className="list-unstyled para-color3">
                  <li className="d-flex align-items-center text-muted mb-3  rounded">
                    <i className="bi bi-check-circle-fill text-success me-3"></i>
                    <span className="para-color2 text-muted">
                      <strong className="">28 Acres of Lush Land :</strong> Ideal for farming
                      or leisure retreats.
                    </span>
                  </li>
                  <li className="d-flex align-items-center text-muted mb-3  rounded">
                    <i className="bi bi-check-circle-fill text-success me-3"></i>
                    <span className="para-color2 text-muted">
                      <strong>Flexible Plot Sizes:</strong> Start from 5,700
                      sq.ft.
                    </span>
                  </li>
                  <li className="d-flex align-items-center text-muted mb-3  rounded">
                    <i className="bi bi-check-circle-fill text-success me-3"></i>
                    <span className="para-color2 text-muted">
                      <strong>Prime Location :</strong> Jeeganahalli Village,
                      Chikkaballapura Taluk.
                    </span>
                  </li>
                  <li className="d-flex align-items-center text-muted mb-3  rounded">
                    <i className="bi bi-check-circle-fill text-success me-3"></i>
                    <span className="para-color2 text-muted">
                      <strong>Quick Access :</strong> 30 mins to Nandi Hills, 45
                      mins to Bangalore Airport.
                    </span>
                  </li>
                  <li className="d-flex align-items-center mb-4 text-muted mb-3  rounded">
                    <i className="bi bi-check-circle-fill text-success me-3"></i>
                    <span className="para-color2 text-muted">
                      <strong>Amenities : </strong>20+ Modern Amenities for a
                      luxury lifestyle.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <img src={elegant} className="w-100" alt="Elegant-Logo" />
              </div>
            </div>

            <Link to="/elegantorchards" className="text-decoration-none">
              <button
                className="btn text-white text-center shadow-sm px-4 py-2 para-color1"
                style={{ backgroundColor: "#f9ab24" }}
              >
                More Details
              </button>
            </Link>
            <Link to="/gallery" className="text-decoration-none ms-3">
              <button
                className="btn text-white text-center shadow-sm px-4 py-2 para-color1"
                style={{ backgroundColor: "#3b5998" }}
              >
                View Gallery
              </button>
            </Link>
          </div>
        </div>
      <div className="container pt-5">
        <YoutubeVideo />
      </div>
      </div>

      {/* Content Section with Awards */}
      <div className="py-3">
        <div className="para-color3 w-75 mx-auto text-center textalign">
          <h2 className="text-center font11 fs-1">
            Award-Winning Excellence in Farmland Management
          </h2>
          <p className="para-color3">
            <span className="text-success text-center fw-bold pt-md-4">
              Times Business Award 2024
            </span>
            <br />
            Elegant Orchards Estate, a flagship project by Groavy Buildcon, has
            been honored with the prestigious Times Business Award for 2024.
            This accolade recognizes our commitment to excellence and innovation
            in the real estate industry, highlighting our status as a Premium &
            Future Ready Farmland Project.
          </p>
          <p className="para-color3">
            <span className="text-success fw-bold pt-md-2">
              Certificate of Excellence:
            </span>
            <br />
            In addition to the award, Elegant Orchards Estate has also received
            the Certificate of Excellence from the Times Business Awards
            Bengaluru 2024. This certificate acknowledges our dedication to
            delivering top-quality real estate solutions and maintaining the
            highest standards in customer satisfaction.
          </p>
        </div>
      </div>

      {/* Additional Content Section */}

      <div>
        <div className="para-color3 container pb-4 mt-4 ">
          <h2 className="text-center py-md-3 py-1 font11 fs-1">
            Ideal Managed Farmland Close to Bangalore and Lepakshi
          </h2>
          <img
            src={Images1}
            alt="Chikkaballapur Managed Farmland"
            className="mb-4"
            height={"auto"}
            width={"100%"}
          />{" "}
          <h2 className="text-success text-center fs-5 fw-bold py-md-3">
            Premium Managed Farmland Near Chikkaballapur
          </h2>
          <p className="para-color3 justify">
            Discover a 28-acre plot in Jeeganahalli Village, Chikkaballapura
            Taluk, featuring diverse plantations like sandalwood, mahogany,
            mango, cashew, sapota, and jackfruit. This premium farm sale in
            Chikkaballapur offers a unique opportunity for those seeking managed
            farmland plots in Chikkaballapur Bangalore. With easy access to
            Nandi Hills and Bangalore International Airport, the property
            combines serenity with convenience. Located near popular attractions
            like the Veerapuram Bird Sanctuary and Lepakshi Historical Temple,
            it’s the perfect location for those interested in agricultural land
            investment. The estate features modern amenities, including a
            clubhouse, swimming pool, and solar power, making it an ideal choice
            for anyone looking for managed farmland projects in the region.
          </p>
          <h2 className="text-success text-center fs-5 fw-bold py-md-3">
            Exclusive Managed Farmland Near Lepakshi
          </h2>
          <p className="para-color3 justify">
            Explore Elegant Orchards Farmhouses & Resorts, a 40-acre gated
            community near Lepakshi, offering the perfect balance of nature and
            luxury. With breathtaking views and proximity to cultural landmarks
            like the Veerabhadra Temple and Lepakshi Handicraft Center, this
            property is perfect for building a farmhouse or making a profitable
            investment. Ideal for those seeking{" "}
            <Link to="blogs/managed-farmland-near-bangalore/">
              managed farmland near Bangalore
            </Link>
            , it’s a prime option for individuals interested in{" "}
            <Link to="blogs/managed-farmland-near-nandi-hills/">
              managed farmland projects for sale near Nandi Hills
            </Link>
            . Elegant Orchards offers the best farmland project in Bangalore,
            with modern amenities and a peaceful atmosphere for those looking
            for a serene lifestyle just a short drive from the city.
          </p>
        </div>
      </div>
      <div className="container py-3">
        <h2 className="text-dark font2">
          Agricultural Managed Farmland Near Bangalore
        </h2>
        <p className="para-color3 py-2 justify">
          Investing in agricultural land near Bangalore offers a prime
          opportunity to enjoy both serene nature and lucrative returns. Located
          near popular attractions like Nandi Hills and Bengaluru, this region
          boasts fertile soil and a favorable climate for agriculture. The
          growing demand for managed farmland near Bangalore makes it a wise
          investment for long-term value appreciation and sustainable growth.
          Explore the{" "}
          <a href="/blogs/managed-farmland-near-bangalore">
            best farmland options near Bengaluru
          </a>{" "}
          for a profitable investment in managed agriculture.
        </p>
        <ul className="list-unstyled para-color3">
          <li className="mb-2 d-flex">
            <i className="bi bi-check-circle-fill text-success me-3"></i>
            <span>
              <strong>Prime Location:</strong> Near Bangalore, with easy access
              to both the tranquility of nature and the convenience of city
              life.
            </span>
          </li>
          <li className="mb-2 d-flex">
            <i className="bi bi-check-circle-fill text-success me-3"></i>
            <span>
              <strong>High-Value Crops:</strong> Ideal for cultivating
              profitable crops like sandalwood, mahogany, and organic produce.
            </span>
          </li>
          <li className="mb-2 d-flex">
            <i className="bi bi-check-circle-fill text-success me-3"></i>
            <span>
              <strong>Strong Land Appreciation:</strong> As demand for managed
              farmland grows, property values continue to rise.
            </span>
          </li>
          <li className="mb-2 d-flex">
            <i className="bi bi-check-circle-fill text-success me-3"></i>
            <span>
              <strong>Eco-Friendly Features:</strong> Equipped with solar power,
              water supply from borewells, and sustainable farming
              opportunities.
            </span>
          </li>
          <li className="mb-2 d-flex">
            <i className="bi bi-check-circle-fill text-success me-3"></i>
            <span>
              <strong>Attractive Nearby Attractions:</strong> Close to Nandi
              Hills, Bhoga Nandeeshwara Temple, and other scenic spots that
              boost the property’s value.
            </span>
          </li>
        </ul>
      </div>

      {/* Call to Action Section */}
      <div
        className="text-white text-center py-5"
        style={{ backgroundColor: "#f59b25" }}
      >
        <h2>Ready to Invest in Your Future?</h2>
        <p className="w-75 mx-auto para-color3 text-white">
          Take the first step towards owning a piece of paradise. With Groavy's
          managed farmlands, you're investing in a sustainable future and a
          profitable asset. Our team is here to guide you every step of the way.
        </p>
        <Link to="/contact" className="text-decoration-none">
          <button className="btn btn-light text-success shadow-sm px-5 py-3">
            Contact Us Today
          </button>
        </Link>
      </div>
    </>
  );
}

export default Sep11th;
