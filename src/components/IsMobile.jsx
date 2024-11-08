import { useState, useEffect } from 'react';

export const useIsMobile = () => {
    const checkIfMobile = () => {
        const isMobileDevice = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
            navigator.userAgent
        );
        const isSmallScreen = window.innerWidth < 1300;
        return isMobileDevice || isSmallScreen;
    };

    const [isMobile, setIsMobile] = useState(checkIfMobile());

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(checkIfMobile());
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
};
