import React from "react";
import LayoutImage from "./ElegantImages/elegant-layout.jpg";

const Layout = () => {

  // Function to open image in a new tab
  const openInNewTab = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  return (
    <div className="container-fluid gx-0">
      {/* <h2 className="text-center pt-4 font1" style={{ color: "#255946" }}>
        Layout
      </h2> */}
      <div className="layout-zoom px-md-5">
        <img
          className="w-100 mx-auto d-block zoomable-image"
          src={LayoutImage}
          style={{cursor:'pointer'}}

          width={"100%"}
          height={"auto"}
          alt="Elegant Orchards Layout"
          onClick={() => openInNewTab(LayoutImage)} // Open image in new tab on click
        />
      </div>
    </div>
  );
};

export default Layout;
