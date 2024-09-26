import React from 'react';
import './image.css'

const Image = ({ image=" https://ik.imagekit.io/logoMGM/imageNotFound.jpg?updatedAt=1727344985527", alt=" ", className=" ", width="50%", height="50%" }) => {

        return(
            <img
                src={image}
                alt={alt}
                className={className}
                width={width}
                height={height}
            />
        );
};
export default Image;