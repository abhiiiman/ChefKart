import React from 'react';
import "./ChefParty.css";
import Continentals from '../common/Continentals';

const chefPartyContinentals = [
    {
        id: 1,
        title: "Indian",
    },
    {
        id: 2,
        title: "Italian",
    },
    {
        id: 3,
        title: "European",
    },
    {
        id: 4,
        title: "Arabic",
    },
    {
        id: 5,
        title: "Korean",
    },
    {
        id: 3,
        title: "Japanese",
    },
];

const ChefParty = () => {
    return (
        <div>
            <div className="max-width">
                <Continentals contList={chefPartyContinentals} />
            </div>
        </div>
    )
}

export default ChefParty;