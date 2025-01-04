import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Home from "./ElegantImages/user-men.png";
import Home1 from "./ElegantImages/user-women.png";

const Testimonials = () => {
  const testimonialData = {
    bg: "bg py-3 my-4",
    containerClass: "py-4 mx-auto ",
    carousel: {
      controls: true,
      indicators: false,
      items: [
        {
          imageSrc: Home,
          imageAlt: "avatar",
          name: "Nagesh K",
          quote:
            "I am happy with the projects showcased and the support provided by the team. They are honest, genuine, trustworthy, and reliable. Thanks GRAOAVY.",
          rating: 5,
        },
        {
          imageSrc: Home,
          imageAlt: "avatar",
          name: "Yaswanth Katam",
          quote:
            "I liked the environment of the office and quite good staff with kind behavior. They provide clear information about our queries.",
          rating: 5,
        },
        {
          imageSrc: Home,
          imageAlt: "avatar",
          name: "Ram Sivaram",
          quote:
            "Recently purchased a plot from these people. Thanks for guiding me and providing lots of information. Anusha kept good follow-up with me, and their team was there at the site when I visited. Good hospitality and they showed and explained the project clearly.",
          rating: 5,
        },
        {
          imageSrc: Home,
          imageAlt: "avatar",
          name: "Nimra Nayak Nayak",
          quote:
            "I had the pleasure of investing in a farmland project with Groavybuildcon. From the outset, it was clear that they prioritized sustainability and environmental stewardship. The land was meticulously cared for, and the infrastructure provided exceeded my expectations. Highly recommend Groavybuildcon for anyone interested in sustainable farmland investments.",
          rating: 5,
        },
        {
          imageSrc: Home1,
          imageAlt: "avatar",
          name: "Vijayadhashami Shruthi",
          quote:
            "Really a genuine company. I don't have words to describe my experience with this company, everything is perfect. They gave me a clear clarification about the farmland project. I believed and purchased the site here. THANK YOU Groavy for giving me green and peaceful farmland. 🤗🤗",
          rating: 5,
        },
        {
          imageSrc: Home,
          imageAlt: "avatar",
          name: "Jnana Belaku",
          quote:
            "Right Direction for Right Choice. After searching so many real estate sites and online channels, finally I found the right direction to move ahead with buying my dreamland. The information is clear and crystal. This is the route where you can get maximum quality at an affordable price.",
          rating: 5,
        },
        {
          imageSrc: Home,
          imageAlt: "avatar",
          name: "Yashu Royal",
          quote:
            "Impressed with Groavy Buildcon's service. Clear communication, excellent market insights, and top-notch professionalism. Highly recommend them!",
          rating: 5,
        },
        {
          imageSrc: Home,
          imageAlt: "avatar",
          name: "Rahul Jauhari",
          quote:
            "Groavy Farmland, just 1.5 hours from Bengaluru, offers a perfect blend of tranquility and connectivity. With development moving steadily and plots clearly marked, it’s shaping up to be an excellent investment. A serene getaway with exciting potential for the future!.",
          rating: 5,
        },
        {
          imageSrc: Home,
          imageAlt: "avatar",
          name: "Deshavanthi v",
          quote:
            "This farmland soooo good For an investment purpose.",
          rating: 5,
        },
      ],
    },
  };

  return (
    <>
      <div className={testimonialData.bg}>
        <h2 className="font11 color text-center pt-2 fs-1">
          Reliable Service, Proven Satisfaction
        </h2>{" "}
        {/* Updated Header */}
        <Container className={testimonialData.containerClass}>
          <Carousel
            controls={testimonialData.carousel.controls}
            indicators={testimonialData.carousel.indicators}
          >
            {testimonialData.carousel.items.map((item, index) => (
              <Carousel.Item className="text-center" key={index}>
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={"100%"}
                  height={"auto"}
                  className="rounded-circle shadow-1-strong mb-4"
                  style={{ width: "150px" }}
                />
                <Row className="d-flex justify-content-center">
                  <Col lg={8}>
                    <h5 className="mb-3 font2">{item.name}</h5>
                    <p className="text-white test-font para-color1">
                      <i className="fas fa-quote-left pe-2" />
                      {item.quote}
                      <i className="fas fa-quote-right pe-2" />
                    </p>
                  </Col>
                </Row>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <li key={starIndex}>
                      <i
                        className={
                          starIndex < item.rating
                            ? "fas fa-star"
                            : "far fa-star"
                        }
                      />
                    </li>
                  ))}
                </ul>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;
