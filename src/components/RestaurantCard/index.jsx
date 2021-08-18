import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import Skeleton from "../Skeleton";

import restaurantePhoto from '../../assets/03.jpg';

import { Restaurant, RestaurantInfo, Title, Adress, PhotoRes } from './styles';



const RestaurantCard = ({ restaurant, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars
                    count={5}
                    isHalf
                    edit={false}
                    value={restaurant.rating}
                    size={24}
                    activeColor="#ffd700"
                />
                <Adress>{restaurant.vicinity || restaurant.formatted_adress}</Adress>
            </RestaurantInfo>
            <PhotoRes
                imageLoaded={imageLoaded}
                src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantePhoto}
                onLoad={() => setImageLoaded(true)}
                alt='foto estabelecimento' />
            {!imageLoaded && <Skeleton width="100px" height="100px"/>}
        </Restaurant>
    );
};

export default RestaurantCard;