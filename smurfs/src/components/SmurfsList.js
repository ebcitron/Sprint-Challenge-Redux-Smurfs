import React from 'react';

const SmurfsList = props => {
    return (
        <div>
            <ul>
            {props.smurfs.map(smurf => {
                return (
                    <li>
                        <div>
                            <h3>Name: {smurf.name}</h3>
                            <h5>Age: {smurf.age}</h5>
                            <h5>Height: {smurf.height}</h5>
                        </div>
                    </li>
                );
                
            })}
            </ul>
        </div>

    );

};

export default SmurfsList;