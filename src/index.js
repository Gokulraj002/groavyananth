import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import Loader from './Component/Loader';
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'; // AOS initialization
import { addFacebookPixel } from './ScriptTags/facebookPixel';

const App = React.lazy(() => import('./App')); // Lazy load the App component

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppWithLoaderDelay = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 900, // AOS animation duration
      once: true, // AOS triggers only once
    });
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Delay to show loader
    addFacebookPixel();

    return () => clearTimeout(timer); // Cleanup timer
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      {isLoading ? <Loader /> : <App />}
    </Suspense>
  );
};

root.render(<AppWithLoaderDelay />);
