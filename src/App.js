import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "./Component/Header/Layout";
import Homes from "./Component/Home/Homes";
import NoPage from "./Component/NoPage/NoPage";
import About from "./Component/About/About";
import Service from "./Component/Service/Service";
import Contact from "./Component/Contact/Contact";
import Eligentpage from "./Component/Projects/Eligent/Eligentpage";
import PrivacyPolicy from "./Component/Policies/PrivacyPolicy";
import TermsAndConditions from "./Component/Policies/TermsConditions";
import Blog from "./Component/Media/Blogs/Blog";
import News from "./Component/Media/News/News";
// import TimberValley from "./Component/Projects/TimberValley/TimberValley";
import ElegantBlog from "./Component/Media/Blogs/ReadMoreBlogs/ElegantBlog";
import MahoganyBlog from "./Component/Media/Blogs/ReadMoreBlogs/Mahogany";
import SandalwoodBlogs from "./Component/Media/Blogs/ReadMoreBlogs/SandalwoodBlog3";
import FourthBlog from "./Component/Media/Blogs/ReadMoreBlogs/FourthBlog";
import CareerHome from "./Component/Careers/CareerHome";
import Analytics from "./ScriptTags/Analytics";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import WhatsAppWidget from "./WhatsAppWidget";
import FifthBlog from "./Component/Media/Blogs/ReadMoreBlogs/FifthBlog";
import SixthBlog from "./Component/Media/Blogs/ReadMoreBlogs/SixthBlog";
import SeventhBlog from "./Component/Media/Blogs/ReadMoreBlogs/SeventhBlog";
// import Chatbot from "./ChatBot/Chatbot";
import EighthBlog from "./Component/Media/Blogs/ReadMoreBlogs/EighthBLog";
import Sep11th from "./Component/Media/Blogs/September/Sep11th";
import Sep12th from "./Component/Media/Blogs/September/Sep12th";
import Sep13 from "./Component/Media/Blogs/September/sept13";
import Sep16 from "./Component/Media/Blogs/September/Sep16th";
import Sep17 from "./Component/Media/Blogs/September/Sep17th";
import Sep19 from "./Component/Media/Blogs/September/Sep19";
import Sep20 from "./Component/Media/Blogs/September/Sep20";
import Sep21 from "./Component/Media/Blogs/September/Sep21";
import Sep23 from "./Component/Media/Blogs/September/Sep23";
import Sep24 from "./Component/Media/Blogs/September/Sep24";
import Sep25 from "./Component/Media/Blogs/September/Sep25";
import GalleryHome from "./Component/Gallery/GalleryHome";
import Sep26 from "./Component/Media/Blogs/September/Sep26";
import Sep27 from "./Component/Media/Blogs/September/Sep27";
import Sep28 from "./Component/Media/Blogs/September/Sep28";
import Sep30 from "./Component/Media/Blogs/September/Sep30";
import Oct1 from "./Component/Media/Blogs/October/Oct1";
import Oct2 from "./Component/Media/Blogs/October/Oct2";
import Oct3 from "./Component/Media/Blogs/October/Oct3";
import Oct4 from "./Component/Media/Blogs/October/Oct4";
import Oct5 from "./Component/Media/Blogs/October/Oct5";
import Oct8 from "./Component/Media/Blogs/October/Oct8";
import Oct10 from "./Component/Media/Blogs/October/Oct10";
import Oct28 from "./Component/Media/Blogs/October/Oct28";
import FAQ from "./Component/Home/Faq";
import Dec2 from "./Component/Media/Blogs/December/Dec2";
import Dec10 from "./Component/Media/Blogs/December/Dec10";
import Dec18 from "./Component/Media/Blogs/December/Dec18";
import Dec20 from "./Component/Media/Blogs/December/Dec20";
import Dec26 from "./Component/Media/Blogs/December/Dec26";
import Dec28 from "./Component/Media/Blogs/December/Dec28";
import Jan10 from "./Component/Media/Blogs/Jan2025/Jan10";
import Jan15 from "./Component/Media/Blogs/Jan2025/Jan15";
// import RSSFeed from "./Component/Media/Blogs/RSSFeed";

function App() {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Analytics />
        <WhatsAppWidget />
        {/* <RSSFeed/> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homes />} />
            <Route path="about/" element={<About />} />
            <Route path="elegantorchards/" element={<Eligentpage />} />
            <Route path="service/" element={<Service />} />
            <Route path="blogs" element={<Blog showHomepageLayout={false} />} />
            <Route
              path="blogs/page/:page"
              element={<Blog showHomepageLayout={false} />}
            />
            <Route path="news/" element={<News />} />
            <Route path="gallery/" element={<GalleryHome />} />
            <Route path="careers/" element={<CareerHome />} />
            <Route path="contact/" element={<Contact />} />
            <Route path="managed-farmland/" element={<Sep11th />} />
            <Route
              path="timbervalley"
              element={<Navigate to="/elegantorchards" replace />}
            />
            <Route
              path="blogs/grow-your-future-benefits-of-owning-managing-farmland/"
              element={<ElegantBlog />}
            />
            <Route
              path="blogs/elegantorchards-embraces-green-growth-with-mahoganytrees/"
              element={<MahoganyBlog />}
            />
            <Route
              path="blogs/invest-in-sandalwood-on-your-farm-with-elegant-orchards-estate/"
              element={<SandalwoodBlogs />}
            />
            <Route
              path="blogs/farmland-vs-mutual-funds-which-offers-better-investment-returns/"
              element={<FourthBlog />}
            />
            <Route
              path="blogs/why-your-next-big-investment-should-be-farmland/"
              element={<FifthBlog />}
            />
            <Route
              path="blogs/expert-advice-for-investing-in-managed-farmland/"
              element={<SixthBlog />}
            />
            <Route
              path="blogs/managed-farmland-near-bengaluru-future-of-agriculture/"
              element={<SeventhBlog />}
            />
            <Route
              path="blogs/managed-farmland-near-chikkaballapur/"
              element={<EighthBlog />}
            />{" "}
            <Route
              path="blogs/choosing-the-right-managed-farmland-key-considerations/"
              element={<Sep12th />}
            />
            <Route
              path="blogs/managing-your-managed-farmland-investment-best-practices/"
              element={<Sep13 />}
            />
            <Route
              path="blogs/best-managed-farmland-near-bengaluru/"
              element={<Sep16 />}
            />
            <Route
              path="blogs/best-farmland-near-chikkaballapur/"
              element={<Sep17 />}
            />
            <Route
              path="blogs/how-to-choose-the-best-managed-farmland-based-on-location-and-amenities/"
              element={<Sep19 />}
            />
            <Route
              path="blogs/managed-farmland-vs-residential-property-investment/"
              element={<Sep20 />}
            />
            <Route
              path="blogs/managed-farmland-vs-traditional-farming-profitability/"
              element={<Sep21 />}
            />
            <Route
              path="blogs/the-rise-of-premium-managed-farmland-investments/"
              element={<Sep23 />}
            />
            <Route
              path="blogs/best-managed-farmland-near-north-bengaluru/"
              element={<Sep24 />}
            />
            <Route
              path="blogs/why-agricultural-land-investments-are-gaining-popularity/"
              element={<Sep25 />}
            />
            <Route
              path="blogs/why-investors-trust-groavy-Buildcon-for-farmland-projects/"
              element={<Sep26 />}
            />
            <Route
              path="blogs/top-5-reasons-to-invest-in-managed-farmland-in-2025/"
              element={<Sep27 />}
            />
            <Route
              path="blogs/chikkaballapurs-hidden-gem-investing-in-premium-farmland/"
              element={<Sep28 />}
            />
            <Route
              path="blogs/the-benefits-of-owning-farmland-near-tourist-destinations/"
              element={<Sep30 />}
            />
            <Route
              path="blogs/navigating-the-legal-landscape-of-farmland-investments/"
              element={<Oct1 />}
            />
            <Route
              path="blogs/financial-insights-evaluating-the-roi-of-agricultural-land/"
              element={<Oct2 />}
            />
            <Route
              path="blogs/agricultural-innovations-transforming-farmland-near-chikkaballapur/"
              element={<Oct3 />}
            />
            <Route
              path="blogs/luxury-farmhouse-living-at-elegant-orchards-near-chikkaballapur/"
              element={<Oct4 />}
            />
            <Route
              path="blogs/market-trends-understanding-the-demand-for-premium-managed-farmland/"
              element={<Oct5 />}
            />
            <Route
              path="blogs/farm-plots-near-chikkaballapur-a-promising-investment-opportunity/"
              element={<Oct8 />}
            />
            <Route
              path="blogs/farmland-near-chikkaballapur-the-perfect-blend-of-agritourism-and-investment/"
              element={<Oct10 />}
            />
            <Route
              path="blogs/buy-farmland-near-bangalore-managed-farmland-for-sale/"
              element={<Oct28 />}
            />
            <Route
              path="blogs/managed-farmland-near-bangalore/"
              element={<Dec2 />}
            />
            <Route
              path="blogs/managed-farmland-near-nandi-hills/"
              element={<Dec10 />}
            />
            <Route
              path="blogs/which-is-best-managed-farmland-in-bangalore/"
              element={<Dec18 />}
            />
            <Route
              path="blogs/managed-farmland-near-bangalore-airport/"
              element={<Dec20 />}
            />
            <Route
              path="blogs/premium-agricultural-farmland-near-chikkaballapur/"
              element={<Dec26 />}
            />
            <Route
              path="blogs/essential-things-to-know-before-purchasing-farmland/"
              element={<Dec28 />}
            />
            <Route
              path="blogs/farmplot-for-sale-agricultural-farmland-near-bangalore/"
              element={<Jan10 />}
            />
              <Route
              path="blogs/managed-farmland-near-isha-foundation/"
              element={<Jan15 />}
            />
            <Route path="privacypolicies/" element={<PrivacyPolicy />} />
            <Route path="termsandcondition/" element={<TermsAndConditions />} />
            <Route path="faq/" element={<FAQ />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        {/* <Chatbot /> */}
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
