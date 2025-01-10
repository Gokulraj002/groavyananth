import { useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';

// Reducer function for managing script loading states
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_SCRIPT':
      return { ...state, loading: true, error: null };
    case 'SCRIPT_LOADED':
      return { ...state, loading: false, error: null };
    case 'SCRIPT_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const WhatsAppWidget = () => {
  const location = useLocation();
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: null,
  });

  useEffect(() => {
    const existingScript = document.getElementById('wa-widget');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.msgmaker.in/es.chat.min.js?t=be21cb2c-8445-4c06-b24f-8864293d830f';
    script.id = 'wa-widget';

    // Dispatch loading state
    dispatch({ type: 'LOAD_SCRIPT' });

    // Handle script load
    script.onload = () => {
      dispatch({ type: 'SCRIPT_LOADED' });
      console.log('WhatsApp Widget Script Loaded');
    };

    // Handle script error
    script.onerror = () => {
      dispatch({ type: 'SCRIPT_ERROR', payload: 'Failed to load WhatsApp Widget script' });
      console.error('Failed to load WhatsApp Widget script');
    };

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (script) {
        script.remove();
        console.log('Cleaning up WhatsApp widget script');
      }
    };
  }, [location]);

  if (state.error) {
    return <div>Error loading WhatsApp Widget: {state.error}</div>;
  }

  return null;
};

export default WhatsAppWidget;
