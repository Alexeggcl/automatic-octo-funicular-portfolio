import React from "react";

const ShuvaniAbout = () => {
    return (
        <p className="text-base leading-relaxed text-white" >
            Shuvani is an <span className="text-[#ffd864]">Isometric Single Player Roguelike</span> where action and strategy complement each other in a unique combat system based on magic and music.
            Unleash your inner power and fulfill your destiny.
            I joined Raging Games during the July - September period as an AI programmer to help prepare the game for PlayStation Talents.
        </p>
    )
};

export const ShuvaniDetails = () => {
    return (
        <div className="text-white">
            <p className="text-base leading-relaxed">Technologies Used:</p>
            <ul className="list-disc pl-5">
                <li> <span className="text-[#ffd864]">Unreal Engine 4</span></li>
                <li> <span className="text-[#ffd864]">Perforce</span></li>
                <li>HacknPlan</li>
                <li>Jenkins</li>
            </ul>
            <p className="text-base leading-relaxed">Programming Language: <span className="text-[#ffd864]">C++</span></p>
            <p className="text-base leading-relaxed">Available on <span className="text-[#ffd864]">Steam</span></p>
            <p className="text-base leading-relaxed">
                Currently, we are looking forward to presenting the project at the <span className="text-[#ffd864]">PlayStation Talents Spain</span> event.
            </p>
        </div>
    );
};

export const ShuvaniTasks = () => {
    return (
        <div className="text-white">
            <p className="text-base leading-relaxed mb-4">
                AI Programmer: My main task in this project was to implement the bomber enemy, which attacks the player by predicting their movements. This enemy also has a rotating shield, so to damage it, it's necessary to first break its shield, pass through it, or hit it through the opening it has.
            </p>
            <p className="text-base leading-relaxed mb-4">
                Additionally, I also worked on improving the behavior of other existing enemies, such as the aiming of the ranged enemies, the attack patterns of the melee enemies, and the movement of the buffer enemies.
            </p>
        </div>
    );
};

export const NautilooseAbout = () => {
    return (
        <p className="text-base leading-relaxed text-gray-400" >
            Nautiloose Club is an <span className="text-[#ffd864]">coso de gestion de people</span>
        </p>
    )
};

export const NeutrumAbout = () => {
    return (
        <p className="text-base leading-relaxed text-gray-400" >
            Neutrum es un <span className="text-[#ffd864]">coso de gestion de sensores</span>
        </p>
    )
};

export default ShuvaniAbout;
