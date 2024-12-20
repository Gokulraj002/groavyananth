import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const data = {
    title: "Why Choose Elegant Orchards Estate",
    items: [
      {
        id: 1,
        icon: "bi-tree-fill",
        stepTitle: "28 Acres of Lush Land",
        title: "Perfect for Farming or Leisure Retreats",
        description:
          "Elegant Orchards Estate spans 28 acres of fertile, scenic land. Ideal for sustainable agriculture or building a private retreat surrounded by nature.",
        animation: "fade-right",
      },
      {
        id: 2,
        icon: "bi-rulers",
        stepTitle: "Flexible Plot Sizes",
        title: "Starting from 5,700 sq.ft.",
        description:
          "Choose a plot size that fits your needs. Ranging from 5,700 to 10,000 sq.ft., each plot offers a customizable space for your dream project.",
        animation: "fade-left",
      },
      {
        id: 3,
        icon: "bi-geo-alt-fill",
        stepTitle: "Prime Location",
        title: "Jeeganahalli Village, Chikkaballapura Taluk",
        description:
          "Situated in a serene yet accessible area, close to nature while providing proximity to modern conveniences.",
        animation: "fade-right",
      },
      {
        id: 4,
        icon: "bi-car-front-fill",
        stepTitle: "Quick Access",
        title: "30 mins to Nandi Hills, 45 mins to Bangalore Airport",
        description:
          "Perfectly located for weekend getaways or permanent residence, with easy access to popular tourist spots and essential facilities.",
        animation: "fade-left",
      },
      {
        id: 5,
        icon: "bi-house-door-fill",
        stepTitle: "20+ Modern Amenities",
        title: "Luxury Lifestyle in the Lap of Nature",
        description:
          "Amenities include a clubhouse, swimming pool, parks, solar power, and more, ensuring a perfect balance of nature and modern living.",
        animation: "fade-right",
      },
    ],
  };

  return (
    <div className="timeline-container">
      <h2 className="text-center py-4 fw-bold">{data.title}</h2>
      <div id="timeline-wrapper">
        {data.items.map((item, index) => (
          <div
            key={item.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            data-aos={item.animation}
          >
            <div className="content">
              <h3 className="step-title">
                <i className={`bi ${item.icon} me-2`}></i>
                {item.stepTitle}
              </h3>
              <h4 className="timeline-title">{item.title}</h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
