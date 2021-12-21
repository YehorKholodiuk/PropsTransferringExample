import React from 'react';

function Services(props) {


    return (
        <div>
            <h2>Tours</h2>
            {props.services.map(el =>
                <>
                    <p>{el.place}</p>
                    <li> {el.term} days at the {el.hotel} Hotel</li>
                </>)}
        </div>
    );
}

export default Services;