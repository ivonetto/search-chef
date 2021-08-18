import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/67226-food-app-interaction.json';

export default () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return <Lottie options={defaultOptions} />;
};

