import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://cdn.msgmaker.in/es.chat.min.js?t=be21cb2c-8445-4c06-b24f-8864293d830f'; // The script URL

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []); 

  return null;
};

export default Chatbot;
