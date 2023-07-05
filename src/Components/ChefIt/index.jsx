import React from 'react';
import "./ChefIt.css";
import Continentals from '../common/Continentals';

const chefItContinentals = [
    {
        id: 1,
        title: "Kashmiri",
    },
    {
        id: 2,
        title: "Punjabi",
    },
    {
        id: 3,
        title: "Rajasthani",
    },
    {
        id: 4,
        title: "Bengali",
    },
    {
        id: 5,
        title: "South Indian",
    },
];

const ChefIt = () => {
    return (
        <div>
            <div className="max-width">
                <Continentals contList={chefItContinentals}/>
            </div>
        </div>
    )
}

export default ChefIt;