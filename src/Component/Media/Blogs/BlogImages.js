// utils/getImage.js
import Mahogany from "../../../images/tree-mahogany.jpg";
import Elegant from "../../../images/Blog 1 image.jpg";
import Blog3 from "../../../images/sandalwood.jpg";
import Blog4 from "../../../images/website-blogs 2.jpg";
import Blog5 from "../../../images/Blog52.png";
import Blog6 from "./Image/Blog.jpg";
import Blog7 from "./Image/Blog71.jpg";
import Blog8 from "./Image/Blog8.png";
import Blog9 from "./Image/Sep11.png";
import Sep12th from "./Image/Sep12th.jpg";
import Sep13 from "./Image/sep-13.jpg";
import Sep18 from "./Image/sep-17.jpg";
// import Sep18 from "./Image/Sep-16.jpg";
import Sep17 from "../../../images/sliderimages/1.png";
// import Sep18 from "../../Projects/Eligent/ElegantImages/Live-Images/1.jpg";

import Sep19 from "../../Projects/Eligent/ElegantImages/elegant-main.jpg"
import Sep20 from "./Image/Sep20.jpg";
import Sep21 from "./Image/Sep21.jpg";
import Sep23 from "./Image/sep-23.jpg";
import Sep24 from "./Image/Sep-24.jpg";
import Sep25 from "./Image/sep25.jpg";
import Sep26 from '../../../images/trop.png'
import Sep27 from "./Image/sep-27.jpg";
import Sep28 from "./Image/sep-28.jpg";
import Sep30 from "./Image/sep-30.jpg";
import Oct1 from "./October/Image/Oct1.jpg"
import Oct2 from "./October/Image/oct-2.jpg"
import Oct3 from "./October/Image/Oct3.png"
import Oct4 from "./October/Image/oct-4.jpg"
import Oct5 from "./October/Image/otc-5.jpg"
import Oct8 from "./October/Image/oct-8.jpg"
import Oct10 from "./October/Image/Oct10.jpg";
import Oct28 from "./October/Image/Oct28.png";
import Dec2 from "./Image/Dec2.webp";
import Dec10 from "./Image/Nandhi.jpg";
import Dec18 from "../../Projects/Eligent/ElegantImages/Live-Images/1.jpg";
import Dec20 from "./Image/Dec20.webp";
import Dec26 from "./Image/Dec26.webp";
import Dec28 from "./Image/Dec28.webp";
import Jan10 from "./Image/Jan10.webp";



const imageMap = {
  Mahogany,
  Elegant,
  Blog3,
  Blog4,
  Blog5,
  Blog6,
  Blog7,
  Blog8,
  Blog9,
  Sep12th,
  Sep13,
  Sep17,
  Sep18,
  Sep19,
  Sep20,
  Sep21,
  Sep23,
  Sep24,
  Sep25,
  Sep26,
  Sep27,
  Sep28,
  Sep30,
  Oct1,
  Oct2,
  Oct3,
  Oct4,
  Oct5,
  Oct8,
  Oct10, 
  Oct28,
  Dec2,
  Dec10,
  Dec18,
  Dec20,
  Dec26,
  Dec28,
  Jan10

};

export const getImage = (imageName) => imageMap[imageName] || null;
