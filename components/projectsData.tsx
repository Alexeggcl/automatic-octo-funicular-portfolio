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
                I was responsible for creating the <span className="text-[#ffd864]">main menu, options, and credits</span> interfaces, as well as implementing seamless navigation between them.
                I also handled the integration of all sound-related aspects using <span className="text-[#ffd864]">FMOD</span>.
            </p>
            <p className="text-base leading-relaxed mb-4">
                Furthermore, I took on the tasks of <span className="text-[#ffd864]">level design, blocking, and dressing</span>. I <span className="text-[#ffd864]">incorporated animations</span> for the customers and developed materials for plant movement.
            </p>
            <p className="text-base leading-relaxed mb-4">
                I also held the responsibility of <span className="text-[#ffd864]">managing both customers and dancers</span> during the night. For customers, I oversaw their entry and exit from the bar, as well as took care of their orders. As for the dancers, I coordinated their patrols throughout different areas of the bar and their performances for the customers' enjoyment.
            </p>
        </div>
    );
};

export const NeutrumAbout = () => {
    return (
        <div className="text-white">
            <p className="text-base leading-relaxed mb-4">
                Neutrum is a project developed in response to critical challenges in managing data generated by
                <span className="text-[#ffd864]"> IoT devices</span> for the company <span className="text-[#ffd864]">Archibus Solution Center Spain</span>.
                I was in charge of leading the remodeling initiative for this project due to usability, performance, and functionality issues in the previous version.
            </p>
            <p className="text-base leading-relaxed mb-4">
                Neutrum's main objective is to act as an efficient intermediary between IoT devices and the applications that require data from these devices.
                It effectively connects to a variety of IoT devices, collects <span className="text-[#ffd864]">real-time data</span>, and
                <span className="text-[#ffd864]"> normalizes</span> it into a standardized format. This allows for easier management of large volumes of data,
                simplifies maintenance, and structures the data uniformly, making it easier for other applications and systems to exploit.
            </p>
        </div>
    )
};

export const NeutrumDetails = () => {
    return (
        <div className="text-white">
            <ul className="list-disc pl-5">
                <li>The Frontend has been created using <span className="text-[#ffd864]">JavaScript and React</span>. Additionally, the <span className="text-[#ffd864]">DevExtreme</span> suite of components and tools has been used.</li>
                <li>The Backend is developed in <span className="text-[#ffd864]">Java and Spring</span>. The database is with <span className="text-[#ffd864]">JDBC and SQL Server</span>.</li>
                <li>Asana</li>
                <li>Confluence</li>
            </ul>
        </div>
    );
};

export const NeutrumTasks = () => {
    return (
        <div className="text-white">
            <p className="text-base leading-relaxed mb-4">
                Creation of the <span className="text-[#ffd864]">Administration</span> Frontend: An administration interface was developed to allow users to create, edit, or delete database elements. Users can view a table with the existing data, such as sensors, locations, devices, etc.
            </p>
            <p className="text-base leading-relaxed mb-4">
                Creation of a <span className="text-[#ffd864]">Monitoring</span> Frontend: An interface that allows users to view data collected by sensors, perform tests on devices, locate them on the map, and more.
            </p>
            <p className="text-base leading-relaxed mb-4">
                Creation of a <span className="text-[#ffd864]">Dashboard</span> Frontend: An interface for users to visualize current device measurements through graphs.
            </p>
            <p className="text-base leading-relaxed mb-4">
                <span className="text-[#ffd864]">API optimization</span>: Modifications were made to the backend to enhance the efficiency of queries through the API.
            </p>
            <p className="text-base leading-relaxed mb-4">
                <span className="text-[#ffd864]">Refactoring and optimization</span> of Java code: Changes were made to the existing Java code to improve its structure and performance.
            </p>
        </div>
    );
};

export const ParkingAbout = () => {
    return (
        <div className="text-white">
            <p className="text-base leading-relaxed mb-4">
                The Parking Booking project stems from Archibus' Workplace module with the aim of providing users with a fast and <span className="text-[#ffd864]">easy way to reserve parking spaces</span>.
                It has been designed following the standards of other applications, maintaining coherence both in its aesthetics and functionality.
                Personally, I was responsible for its comprehensive development, from <span className="text-[#ffd864]">creating the database</span> to implementing necessary <span className="text-[#ffd864]">backend functions</span>,
                and building the entire <span className="text-[#ffd864]">frontend using React</span>.
            </p>
        </div>
    )
};

export const ParkingDetails = () => {
    return (
        <div className="text-white">
            <ul className="list-disc pl-5">
                <li>The Frontend has been created using <span className="text-[#ffd864]">JavaScript and React</span>.</li>
                <li>The Backend is developed in <span className="text-[#ffd864]">Java</span>. The database is with <span className="text-[#ffd864]">SQL Server</span>.</li>
                <li>Asana</li>
                <li>Confluence</li>
                <li>Notion</li>
            </ul>
        </div>
    );
};

export const ParkingTasks = () => {
    return (
        <div className="text-white">
            <p className="text-base leading-relaxed mb-4">
                Parking Area Reservations divided into two types:
                <ul className="list-disc pl-5">
                    <li><span className="text-[#ffd864]">Unassigned</span> Parking Areas: Represent parking spaces where users don’t select an exact space but have a <span className="text-[#ffd864]">pool of options upon arrival</span>.</li>
                    <li><span className="text-[#ffd864]">Assigned</span> Parking Areas: Represent parking spaces where users <span className="text-[#ffd864]">must choose a specific space on the floorplan</span>.</li>
                </ul>
            </p>

            <p className="text-base leading-relaxed mb-4">
                Users can select their preferred <span className="text-[#ffd864]">time slot</span> from the available options within the area. Additionally, they can specify whether the reservation is for <span className="text-[#ffd864]">themselves, another available employee, or a visitor</span>.
            </p>

            <p className="text-base leading-relaxed mb-4">
                Calendar Overview: Users can <span className="text-[#ffd864]">view their reservations on a calendar</span>. By clicking on each reservation, they can access its details, location on the map, and have the option to <span className="text-[#ffd864]">confirm or cancel</span> it.
            </p>

            <p className="text-base leading-relaxed mb-4">
                Administrative Views in Archibus: Admins can easily <span className="text-[#ffd864]">manage all data</span>. This includes configuring parking areas, time slots, assigned spaces, and associated employees. They also have the ability to set up reservation confirmation requirements.
            </p>

            <p className="text-base leading-relaxed mb-4">
                Integration with the client’s <span className="text-[#ffd864]">Access Control System</span>: This integration occurs in two ways:
                <ul className="list-disc pl-5">
                    <li><span className="text-[#ffd864]">Daily synchronization</span> to report accesses for the following day.</li>
                    <li><span className="text-[#ffd864]">Real-time updates</span> to report accesses at the time of reservation..</li>
                </ul>
            </p>
        </div>
    );
};

export default ShuvaniAbout;
