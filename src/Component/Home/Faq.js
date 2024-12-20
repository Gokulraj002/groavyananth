import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import logo from "../../images/about-us1.png";

const FAQ = () => {
  const location = useLocation(); // Hook to get the current route

  const faqs = [
    {
      Title:"Frequently Asked Questions (FAQs)",
      category: "Managed Farmland Investment",
      questions: [
        {
          question: "Which is the best managed farmland near Bangalore?",
          answer:
            "Elegant Orchards Estate by Groavy Builders is recognized as the best-managed farmland near Bangalore. It offers luxurious amenities, expert land management, and high-value plantation options like Sandalwood and Mahogany.",
        },

        {
          question: "Why should I invest in managed farmland near Chikkaballapur?",
          answer:
            "Investing in managed farmland near Chikkaballapur ensures sustainable returns, professional land management, and appreciation in land value. With Groavy Builders' Elegant Orchards Estate, you get access to premium farmlands with world-class amenities.",
        },
     
        {
          question: "How far is Elegant Orchards Estate from Bangalore?",
          answer:
            "Elegant Orchards Estate is just a short 45-minute drive from Bangalore, located in Chikkaballapur Taluk near Jeeganahalli Village, making it an ideal weekend retreat and investment opportunity.",
        },

    
        {
          question: "What Makes Managed Farmland a Profitable Investment?",
          answer:
            "Managed farmland is a unique investment that combines land appreciation and crop yield, offering a dual income source. Unlike traditional investments, farmland provides stable, long-term returns, and demand for food and timber only increases over time. With Groavy’s professional management, investors can enjoy a hands-off experience, knowing their land is being cared for by experts committed to optimizing productivity and ensuring consistent returns.",
        },
        {
          question: "What makes Groavy's managed farmland stand out?",
          answer:
            "Groavy’s managed farmland is uniquely designed to deliver high-value returns through eco-friendly practices, expert management, and premium locations. Positioned near Bangalore, these lands benefit from high appreciation potential, while our team handles day-to-day care and optimizes crop yield. Groavy offers a seamless experience with transparent processes, so you can trust your investment is in capable hands.",
        },
        {
          question:
            "What are the key benefits of investing in managed farmland?",
          answer:
            "Investing in managed farmland with Groavy offers financial growth, eco-friendly ownership, and diversification. It’s an asset that appreciates in value, generates passive income, and supports sustainable agriculture. For those wanting a stable investment that grows over time, managed farmland offers a unique combination of low volatility, tangible value, and environmental benefits.",
        },
        {
          question:
            "How does managed farmland compare to other real estate investments?",
          answer:
            "Farmland is a tangible asset with dual returns from both land appreciation and crop yield. Unlike residential or commercial real estate, farmland is less volatile and offers a steady income stream from agricultural activities. Managed farmland is especially attractive as it requires minimal involvement, providing investors with a stress-free, passive income source backed by sustainable land management practices.",
        },
      ],
    },
    {
      category: "Sustainability & Environmental Practices",
      questions: [
        {
          question: "What makes Groavy Buildcon' Elegant Orchards unique?",
          answer:
            "Groavy Buildcon' Elegant Orchards stands out for its forest-themed development, premium plantations, luxurious clubhouse, swimming pool, and over 20 modern amenities. It’s the perfect blend of nature and luxury.",
        },
        {
          question:
            "How does Groavy implement sustainability in farmland management?",
          answer:
            "Groavy is committed to sustainable agriculture through eco-friendly practices like crop rotation, organic farming, and water conservation. These techniques protect soil health, enhance biodiversity, and reduce chemical usage, promoting long-term land productivity. By investing in Groavy’s managed farmland, you contribute to environmental conservation while benefiting from sustainable returns.",
        },
        {
          question: "Can managed farmland support biodiversity?",
          answer:
            "Absolutely. Groavy’s farms are managed to promote biodiversity, fostering habitats for native plants, pollinators, and beneficial wildlife. This balance creates a resilient ecosystem that supports healthy crops, improves soil health, and reduces dependency on chemical inputs. Biodiverse farmland not only enhances agricultural productivity but also strengthens environmental sustainability.",
        },
        {
          question: "How does Groavy conserve water on its farmland?",
          answer:
            "Water conservation is central to Groavy’s operations. Using advanced irrigation methods like drip irrigation and rainwater harvesting, we reduce water waste and ensure that crops receive adequate hydration without depleting local water sources. This approach protects resources, ensures crop health, and aligns with sustainable agricultural practices for long-term productivity.",
        },
        {
          question: "What crops are grown on Groavy's managed farmland?",
          answer:
            "Groavy focuses on high-value, sustainable crops such as timber trees and fruit-bearing plants that thrive in the local environment. These crops offer strong yields with minimal ecological impact, aligning with investor goals for profitability and environmental responsibility. Our crop selection maximizes returns while promoting sustainable land use.",
        },
      ],
    },
    {
      category: "Investment and Legalities",
      questions: [
        {
          question: "Is investing in managed farmland near Lepakshi a good idea?",
          answer:
            "Yes, investing in managed farmland near Lepakshi is an excellent choice due to its strategic location, proximity to Bangalore, and growing demand for sustainable farmland investments. Elegant Orchards by Groavy Builders offers plots with high growth potential.",
        },
        {
          question: "Do investors have full ownership of the farmland?",
          answer:
            "Yes, when you invest with Groavy, you receive full legal ownership of the farmland, with all associated rights. Our transparent transaction process ensures you have complete control over your investment, with clear documentation and seamless land title transfer, making the experience secure and stress-free.",
        },
        {
          question: "Are there any hidden costs in owning managed farmland?",
          answer:
            "Groavy maintains a policy of complete transparency with no hidden fees. All expenses, including management and maintenance, are outlined upfront, ensuring investors can make informed decisions. You can invest with confidence, knowing there won’t be any unexpected costs down the road.",
        },
        {
          question: "Can I sell or transfer my farmland in the future?",
          answer:
            "Yes, farmland ownership is fully transferable. You can sell or pass on your property at any time, and with Groavy’s prime locations near Bangalore, resale potential is high. Farmland offers not just present-day returns but also long-term growth and liquidity, making it a versatile asset for your portfolio.",
        },
        {
          question:
            "Does Groavy offer legal assistance during the investment process?",
          answer:
            "Yes, Groavy provides comprehensive legal support to ensure a smooth transaction. Our team handles all necessary documentation, including title transfer and registration, ensuring compliance with regional laws. We make the process seamless, so you can focus on the benefits of your investment without legal hassles.",
        },
      ],
    },
    {
      category: "Amenities & Agritourism",
      questions: [
        {
          question: "What amenities does Groavy offer on its managed farmland?",
          answer:
            "Groavy offers more than 20 premium amenities, including advanced irrigation, 24/7 security, farmhouses, and scenic trails. These features not only protect and enhance the land but also make it a destination for relaxation and recreation. Investors enjoy a unique blend of profitability and personal use, perfect for those who appreciate nature and comfort.",
        },
        {
          question: "Can I develop a farmhouse on my managed farmland?",
          answer:
            "Yes, Groavy supports farmhouse construction, allowing investors to create a personal retreat on their farmland. Our team provides guidance on design and approvals to ensure that any development aligns with sustainable practices and the natural beauty of the land, making it a true sanctuary.",
        },
        {
          question: "How does Groavy promote agritourism on managed farmland?",
          answer:
            "Groavy promotes agritourism through guided farm tours, picnic areas, and farm-stay options, drawing tourists to the land. This not only supports rural tourism but also provides additional income opportunities for investors. Agritourism diversifies your revenue streams and makes your investment more dynamic and community-focused.",
        },
        {
          question: "Are there popular tourist spots near Groavy’s farmland?",
          answer:
            "Yes, Groavy’s farmlands are located near attractions like Nandi Hills and Lepakshi, which add recreational value and attract agritourists. These scenic spots enhance the land’s appeal, providing investors with a unique opportunity to tap into tourism-related revenue while offering a picturesque environment.",
        },
      ],
    },
  ];

  return (
    <>
      {/* Render Helmet only if the location is not the home page */}
      {location.pathname !== "/" && (
        <Helmet>
          <title>Frequently Asked Questions (FAQs) - Groavy</title>
          <meta
            name="description"
            content="Find answers to frequently asked questions about managed farmland investments, sustainability practices, and legalities with Groavy."
          />
          <meta
            name="keywords"
            content="FAQs about managed farmland, Groavy FAQ, farmland investment questions, sustainability in farmland, legal aspects of farmland"
          />
          <meta name="author" content="GroavyBuildcon" />
          <meta
            property="og:title"
            content="Frequently Asked Questions (FAQs) - Groavy"
          />
          <meta
            property="og:description"
            content="Find answers to frequently asked questions about managed farmland investments, sustainability practices, and legalities with Groavy."
          />
          <meta property="og:image" content={logo} />
          <meta property="og:url" content="https://www.groavy.com/faqs" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="GroavyBuildcon" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Frequently Asked Questions (FAQs) - Groavy"
          />
          <meta
            name="twitter:description"
            content="Find answers to frequently asked questions about managed farmland investments, sustainability practices, and legalities with Groavy."
          />
          <meta name="twitter:image" content="URL-to-your-featured-image" />
          <meta name="twitter:site" content="@yourtwitterhandle" />
          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="canonical" href="https://www.groavy.com/faq/" />
        </Helmet>
      )}

      <div className="container my-5">
        {/* Render H1 only if location is not home page */}
        {location.pathname !== "/" && (
          <h1 className="text-center mb-4 text-success font1">
            Frequently Asked Questions (FAQs)
          </h1>
        )}

        {faqs.map((category, index) => (
          <div key={index} className="">
            <div className="accordion" id={`accordion-${index}`}>
              {category.questions.map((item, qIndex) => (
                <div className="accordion-item border-0" key={qIndex}>
                  <h2
                    className="accordion-header"
                    id={`heading-${index}-${qIndex}`}
                  >
                    <button
                      className="accordion-button collapsed d-flex justify-content-between align-items-center bg-light para-color2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${index}-${qIndex}`}
                      aria-expanded="false"
                      aria-controls={`collapse-${index}-${qIndex}`}
                      style={{ color: "#e58e26", fontWeight: "500" }}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${index}-${qIndex}`}
                    className="accordion-collapse collapse para-color1"
                    aria-labelledby={`heading-${index}-${qIndex}`}
                    data-bs-parent={`#accordion-${index}`}
                  >
                    <div className="accordion-body para-color3">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
