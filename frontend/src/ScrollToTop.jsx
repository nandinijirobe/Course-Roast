import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);  // Scrolls to the top of the page
    }, [location]);

    return null;  // This component does not render anything
}

export default ScrollToTop;
