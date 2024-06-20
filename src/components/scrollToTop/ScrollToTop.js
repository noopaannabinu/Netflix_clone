import React, { useEffect, useState } from 'react';
import "./scrollToTop.css";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle visibility based on scroll position
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Function to scroll back to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        // Add scroll event listener when component mounts
        window.addEventListener("scroll", toggleVisibility);

        // Clean up function to remove scroll event listener when component unmounts
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []); // Empty dependency array ensures this effect runs only on mount and unmount

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollToTop}>
                    <i className="fas fa-arrow-circle-up fa-3x"></i>
                </div>
            )}
        </div>
    );
};

export default ScrollToTop;
