export function addFacebookPixel() {
  // Ensure this only runs on production URLs, skip for localhost
  const isProduction = window.location.hostname !== "localhost";

  if (isProduction) {
    // Check if fbq is already loaded
    if (!window.fbq) {
      (function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        t.onload = function () {
          if (window.fbq) {
            try {
              window.fbq("init", "2207331599665801"); // Replace with your Pixel ID
              window.fbq("track", "PageView");
            } catch (error) {
              console.error("Error initializing Facebook Pixel:", error);
            }
          } else {
            console.error("Facebook Pixel script failed to initialize.");
          }
        };
        t.onerror = function () {
          console.error("Error loading Facebook Pixel script.");
        };
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    } else {
      // If fbq is already available, track PageView
      try {
        window.fbq("track", "PageView");
      } catch (error) {
        console.error("Error tracking PageView with Facebook Pixel:", error);
      }
    }
  } else {
    // console.log("Facebook Pixel is disabled on localhost.");
    
  }
}
