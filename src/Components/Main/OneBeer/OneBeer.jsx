import React from 'react';
import  "./OneBeer.scss"

const OneBeer = ({id, description, abv, first_brewed, image_url, name, tagline}) => {
    return (
        <div className={"oneBeer"}>
            <span>
            <img src={image_url}/>
            <h3>
                {name}
            </h3>
                <span>
                   abv: {abv}
                </span>
            </span>
            <div className={"description"}>
                {description.toString().length < 150 ? description : description.toString().substring(0,150)+"..."}
                <p>
                    tagline: {tagline}
                </p>
            </div>

        </div>
    )
}

export default OneBeer;
