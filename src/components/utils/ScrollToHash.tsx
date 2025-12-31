import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash (e.g., #residential), find the element and scroll to it
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        // Small timeout ensures the page is fully rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      // If no hash, just scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;