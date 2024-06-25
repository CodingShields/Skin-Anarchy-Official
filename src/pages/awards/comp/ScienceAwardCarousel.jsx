import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import PropTypes from 'prop-types';

const ScienceAwardCarousel = ({data}) => {

    return (
			<Carousel autoplay={true} infiniteLoop={true} interval={1}>
				{data.map((image, index) => (
					<img key={index} src={image.image} alt={`award ${index}`} className='w-32 h-fit mx-auto my-auto' />
				))}
			</Carousel>
		);
}

ScienceAwardCarousel.propTypes = {
    data: PropTypes.array.isRequired
};

export default ScienceAwardCarousel


