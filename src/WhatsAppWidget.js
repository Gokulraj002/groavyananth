import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const WhatsAppWidget = () => {
  const location = useLocation();

  useEffect(() => {
    const existingScript = document.getElementById('wa-widget');
    if (existingScript) {
      existingScript.remove();
    }

    // Create a new script element for the WhatsApp widget
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.msgmaker.in/es.chat.min.js?t=be21cb2c-8445-4c06-b24f-8864293d830f';
    script.id = 'wa-widget';

    document.body.appendChild(script);

    return () => {
      if (script) {
        script.remove();
      }
    };
  }, [location]);

  return null;
};

export default WhatsAppWidget;





// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const WhatsAppWidget = () => {
//   const location = useLocation();

//   useEffect(() => {
//     // Remove the existing script if already added
//     const existingScript = document.getElementById('wa-widget');
//     if (existingScript) {
//       // console.log("Removing old script");
//       existingScript.remove();
//     }

//     // Create a new script element for the WhatsApp widget
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = 'https://d2jyl60qlhb39o.cloudfront.net/integration-plugin.js';
//     script.id = 'wa-widget';
//     script.setAttribute('widget-id', '3wTGPu');

//     // Append the script to the body
//     document.body.appendChild(script);

//     // Log the script loading
//     // console.log("WhatsApp Widget Script Loaded");

//     // Cleanup on unmount
//     return () => {
//       // console.log("Cleaning up WhatsApp widget script");
//       if (script) {
//         script.remove();
//       }
//     };
//   }, [location]);

//   return null;
// };

// export default WhatsAppWidget;
