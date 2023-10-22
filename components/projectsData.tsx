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
        <div className="text-base leading-relaxed text-white">
            <p className="text-base leading-relaxed mb-4">
                In one of the most mysterious and uncharted realms of the vast ocean, where sunlight never dares to venture,
                lies Nautiloose Club an enticing nocturnal haven within the Abyssal Zone. Here, amidst the depths, emerges a thriving nightclub,
                teeming with abyssal fish, jellyfish, and giant squids as they awaken with the night.
            </p>
            <p>
                Dive into the enigmatic aquatic world of Nautiloose Club, embracing the role of a <span className="text-[#ffd864]">club manager</span> in this beacon of untapped potential.
            </p>
        </div>
    )
};

export const NautilooseDetails = () => {
    return (
        <div className="text-white">
            <p className="text-base leading-relaxed">Technologies Used:</p>
            <ul className="list-disc pl-5">
                <li> <span className="text-[#ffd864]">Unity 2D</span></li>
                <li> <span className="text-[#ffd864]">Github</span></li>
                <li>Discord</li>
            </ul>
            <p className="text-base leading-relaxed">Programming Language: <span className="text-[#ffd864]">C#</span></p>
            <p className="text-base leading-relaxed">Available on <span className="text-[#ffd864]">Itch.io</span></p>
        </div>
    );
};

export const NautilooseTasks = () => {
    return (
        <div className="text-white">
            <p className="text-base leading-relaxed mb-4">
                Programmer: For this project, I was responsible for managing both employees and customers during the night. In the case of customers, this included handling entrance and exit to the bar, taking requests for services (such as drinks or dancing), or even escorting them out of the club. For the employees, I oversaw patrols between different areas of the bar and taking note of customer requests, providing them with their services. I also handled the movement of the fish throughout the club.
            </p>
            <p className="text-base leading-relaxed mb-4">
                Other: Other tasks I took on included integrating 2D animations for some of the fish and also designing the instructions screen between the main menu and the game.
            </p>
        </div>
    );
};

export const NeutrumAbout = () => {
    return (
        <p className="text-base leading-relaxed text-gray-400" >
            Neutrum es un <span className="text-[#ffd864]">coso de gestion de sensores</span>
        </p>
    )
};

export default ShuvaniAbout;
