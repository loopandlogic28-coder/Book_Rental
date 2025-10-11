import React, { useState, useEffect } from 'react';
import './GuidePopUp.css';
import add_item_to_cart from "../../assets/additemtocart.png"

const GuidePopUp = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [showGuide, setShowGuide] = useState(false);

    const steps = [
        { title: "Welcome to Grillz!", description: "Here's an Quick Tour about Uses", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Added Item To Cart", description: "Please CLick on the "+" icon to add item in to cart and "-" to remove item from it", image: add_item_to_cart },
        { title: "Browse the Menu", description: "Check out our delicious menu items from here.", image: "image2.jpg" },
        { title: "Your Cart", description: "View and manage your selected items in the cart from here.", image: "image3.jpg" },
        { title: "Place Your Order", description: "Select the payment method and click on proceed to payment to proceed.", image: "image4.jpg" },
        { title: "Your Orders Page", description: "Please Click on your profile icon and choose orders to view your orders", image: "image4.jpg" }
    ];

    useEffect(() => {
        const timer = setTimeout(() => setShowGuide(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowGuide(false);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleClose = () => {
        setShowGuide(false);
    };

    return (
        showGuide && (
            <div className="overlay">
                <div className="guide-content">
                    <span className="close" onClick={handleClose}>&times;</span>
                    <div className="guide-step">
                        <img src={steps[currentStep].image} alt="Guide Step" className="guide-image" />
                        <h2>{steps[currentStep].title}</h2>
                        <p>{steps[currentStep].description}</p>
                    </div>
                    <div className="guide-controls">
                        <button onClick={handlePrev} disabled={currentStep === 0}>Previous</button>
                        <button onClick={handleNext}>
                            {currentStep === steps.length - 1 ? 'Close' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default GuidePopUp;
