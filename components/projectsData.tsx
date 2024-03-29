import React from "react";
import { useTranslation } from "react-i18next";

const ShuvaniAbout = () => {
    const { t } = useTranslation();
    return (
        <p className="text-base leading-relaxed text-white" >
            {t("Shuvani is an ")}<span className="text-[#ffd864]">{t("Isometric Single Player Roguelike")}</span>{t(" where action and strategy complement each other in a unique combat system based on magic and music.")}
            {t("Unleash your inner power and fulfill your destiny.")}
            {/* {t("I joined Raging Games during the July - September period as an gameplay programmer to help prepare the game for PlayStation Talents.")} */}
        </p>
    )
};

export const ShuvaniDetails = () => {
    const { t } = useTranslation();
    return (
        <div className="text-white">
            <p className="text-base leading-relaxed">{t("Technologies Used:")}</p>
            <ul className="list-disc pl-5">
                <li> <span className="text-[#ffd864]">Unreal Engine 4</span></li>
                <li> <span className="text-[#ffd864]">Perforce</span></li>
                <li>HacknPlan</li>
                <li>Jenkins</li>
            </ul>
            <p className="text-base leading-relaxed">{t("Programming Language: ")}<span className="text-[#ffd864]">C++</span></p>
            <p className="text-base leading-relaxed">{t("Available on ")}<span className="text-[#ffd864]">Steam</span></p>
            <p className="text-base leading-relaxed">
                {t("Currently, we are looking forward to presenting the project at the ")}<span className="text-[#ffd864]">{t("PlayStation Talents Spain")}</span>{t(" event.")}
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
    const { t } = useTranslation();
    return (
        <div className="text-base leading-relaxed text-white">
            <p className="text-base leading-relaxed mb-4">
                {t("In one of the most mysterious and uncharted realms of the vast ocean, where sunlight never dares to venture, lies Nautiloose Club an enticing nocturnal haven within the Abyssal Zone. Here, amidst the depths, emerges a thriving nightclub, teeming with abyssal fish, jellyfish, and giant squids as they awaken with the night.")}
            </p>
            <p>
                {t("Dive into the enigmatic aquatic world of Nautiloose Club, embracing the role of a ")}<span className="text-[#ffd864]">{t("club manager")}</span>{t(" in this beacon of untapped potential.")}
            </p>
        </div>
    )
};

export const NautilooseDetails = () => {
    const { t } = useTranslation();
    return (
        <div className="text-white">
            <p className="text-base leading-relaxed">{t("Technologies Used:")}</p>
            <ul className="list-disc pl-5">
                <li> <span className="text-[#ffd864]">Unity 2D</span></li>
                <li> <span className="text-[#ffd864]">Github</span></li>
                <li>Discord</li>
            </ul>
            <p className="text-base leading-relaxed">{t("Programming Language: ")}<span className="text-[#ffd864]">C#</span></p>
            <p className="text-base leading-relaxed">{t("Available on ")}<span className="text-[#ffd864]">Itch.io</span></p>
        </div>
    );
};

export const NautilooseTasks = () => {
    const { t } = useTranslation();
    return (
        <div className="text-white">
            <p className="text-base leading-relaxed mb-4">
                {t("I was responsible for creating the ")}<span className="text-[#ffd864]">{t("main menu, options, and credits")}</span>{t(" interfaces, as well as implementing seamless navigation between them.")}
                {t("I also handled the integration of all sound-related aspects using ")}<span className="text-[#ffd864]">FMOD</span>.
            </p>
            <p className="text-base leading-relaxed mb-4">
                {t("Furthermore, I took on the tasks of ")}<span className="text-[#ffd864]">{t("level design, blocking, and dressing")}</span>{t(". I ")}<span className="text-[#ffd864]">{t("incorporated animations")}</span>{t(" for the customers and developed materials for plant movement.")}
            </p>
            <p className="text-base leading-relaxed mb-4">
                {t("I also held the responsibility of ")}<span className="text - [#ffd864]">{t("managing both customers and dancers")}</span>{t(" during the night. For customers, I oversaw their entry and exit from the bar, as well as took care of their orders. As for the dancers, I coordinated their patrols throughout different areas of the bar and their performances for the customers' enjoyment.")}
            </p>
        </div >
    );
};

export const CorrefoomAbout = () => {
    const { t } = useTranslation();
    return (
        <div className="text-base leading-relaxed text-white">
            <p className="text-base leading-relaxed mb-4">
                {t("Explore vibrant Valencia in an exhilarating odyssey where magic and tradition collide.  As the courageous Fallera Mayor, armed with a firecracker pistol, recover the stolen Holy Grail from ruthless demons in the majestic cathedral. Traverse the city in flames, confronting infernal enemies amid centuries-old fallas and narrow alleys.")}
            </p>
            <p className="text-base leading-relaxed mb-4">
                {t("Do you possess the skill to halt these malevolent intruders? Brace for an explosive fusion of tradition, action, and folklore in this unforgettable pyrotechnic challenge.")}
            </p>
            <p className="text-base leading-relaxed mb-4">
                {t("The battle for Valencia has commenced, and the salvation of the city's sacred flame rests in your hands!")}
            </p>
        </div>
    )
};

export const CorrefoomDetails = () => {
    const { t } = useTranslation();
    return (
        <div className="text-white">
            <p className="text-base leading-relaxed">{t("Technologies Used:")}</p>
            <ul className="list-disc pl-5">
                <li> <span className="text-[#ffd864]">Unreal Engine 4</span></li>
                <li> <span className="text-[#ffd864]">Github</span></li>
                <li>Discord</li>
            </ul>
            <p className="text-base leading-relaxed">{t("Programming Language: ")}<span className="text-[#ffd864]">C++</span></p>
            <p className="text-base leading-relaxed">{t("Available on ")}<span className="text-[#ffd864]">Itch.io</span></p>
        </div>
    );
};

export const CorrefoomTasks = () => {
    const { t } = useTranslation();
    return (
        <div className="text-white">

            <p className="text-base leading-relaxed mb-4">
                {t("One of my main responsibilities was designing the ")}
                <span className="text-[#ffd864]">{t("behavior and attacks of enemies")}</span>
                {t(", specifically the melee, dasher, and the one that spawns enemies upon death. I also implemented the ")}
                <span className="text-[#ffd864]">{t("player's dash.")}</span>
            </p>

            <p className="text-base leading-relaxed mb-4">
                {t("Additionally, I took the lead in creating the ")}
                <span className="text-[#ffd864]">
                    {t("statistics system")}
                </span>
                {t(" for both the player and enemies. After completing this task, I handled the game's ")}
                <span className="text-[#ffd864]">
                    {t("pickables")}
                </span>
                {t(", including healing items and devices to reduce weapon overheating.")}
            </p>

            <p className="text-base leading-relaxed mb-4">
                {t("On the other hand, I designed the ")}
                <span className="text-[#ffd864]">
                    {t("options and credits menu")}
                </span>
                {t(". Within the credits, various graphical, sound, gameplay, and language options were incorporated, with support for ")}
                <span className="text-[#ffd864]">
                    {t("English, Spanish, and Valencian.")}
                </span>
            </p>

            <p className="text-base leading-relaxed mb-4">
                {t("Finally, I was in charge of a diverse range of ")}
                <span className="text-[#ffd864]">
                    {t("in-game visual effects")}
                </span>
                {t(", with a particular emphasis on ")}
                <span className="text-[#ffd864]">
                    {t("fire")}
                </span>
                {t(" effects used in combat zone walls, map boundaries, and enemy projectiles, as well as the implementation of ")}
                <span className="text-[#ffd864]">
                    {t("fireworks")}
                </span>
                {t(" effects.")}
            </p>


        </div >
    );
};

export const NeutrumAbout = () => {
    const { t } = useTranslation();
    return (
        <div className="text-white">
            <p className="text-base leading-relaxed mb-4">
                {t("Neutrum is a project developed in response to critical challenges in managing data generated by")}
                <span className="text-[#ffd864]">{t(" IoT devices")}</span>{t(" for the company ")}<span className="text-[#ffd864]">Archibus Solution Center Spain</span>.
                {t(" I was in charge of leading the remodeling initiative for this project due to usability, performance, and functionality issues in the previous version.")}
            </p>
            <p className="text-base leading-relaxed mb-4">
                {t("Neutrum's main objective is to act as an efficient intermediary between IoT devices and the applications that require data from these devices.")}
                {t(" It effectively connects to a variety of IoT devices, collects ")}<span className="text-[#ffd864]">{t("real-time data")}</span>{t(", and")}
                <span className="text-[#ffd864]">{t(" normalizes")}</span>{t(" it into a standardized format. This allows for easier management of large volumes of data,")}
                {t("simplifies maintenance, and structures the data uniformly, making it easier for other applications and systems to exploit.")}
            </p>
        </div>
    )
};

export const NeutrumDetails = () => {
    const { t } = useTranslation();
    return (
        <div className="text-white">
            <ul className="list-disc pl-5">
                <li>{t("The Frontend has been created using ")}<span className="text-[#ffd864]">{t("JavaScript and React")}</span>{t(". Additionally, the ")}<span className="text-[#ffd864]">DevExtreme</span>{t(" suite of components and tools has been used.")}</li>
                <li>{t("The Backend is developed in ")}<span className="text-[#ffd864]">{t("Java and Spring")}</span>{t(". The database is with ")}<span className="text-[#ffd864]">{t("JDBC and SQL Server")}</span>.</li>
                <li>Asana</li>
                <li>Confluence</li>
            </ul>
        </div>
    );
};

export const NeutrumTasks = () => {
    const { t } = useTranslation();
    return (
        <div className="text-white">
            <p className="text-base leading-relaxed mb-4">
                {t("Creation of the ")}<span className="text-[#ffd864]">{t("Administration")}</span>{t(" Frontend: An administration interface was developed to allow users to create, edit, or delete database elements. Users can view a table with the existing data, such as sensors, locations, devices, etc.")}
            </p>
            <p className="text-base leading-relaxed mb-4">
                {t("Creation of a ")}<span className="text-[#ffd864]">{t("Monitoring")}</span>{t(" Frontend: An interface that allows users to view data collected by sensors, perform tests on devices, locate them on the map, and more.")}
            </p>
            <p className="text-base leading-relaxed mb-4">
                {t("Creation of a ")}<span className="text-[#ffd864]">{t("Dashboard")}</span>{t(" Frontend: An interface for users to visualize current device measurements through graphs.")}
            </p>
            <p className="text-base leading-relaxed mb-4">
                <span className="text-[#ffd864]">{t("API optimization")}</span>{t(": Modifications were made to the backend to enhance the efficiency of queries through the API.")}
            </p>
            <p className="text-base leading-relaxed mb-4">
                <span className="text-[#ffd864]">{t("Refactoring and optimization")}</span>{t(" of Java code: Changes were made to the existing Java code to improve its structure and performance.")}
            </p>
        </div>
    );
};

export const ParkingAbout = () => {
    const { t } = useTranslation();
    return (
        <div className="text-white">
            <p className="text-base leading-relaxed mb-4">
                {t("The Parking Booking project stems from Archibus' Workplace module with the aim of providing users with a fast and ")}
                <span className="text-[#ffd864]">{t("easy way to reserve parking spaces")}</span>.
                {t(" It has been designed following the standards of other applications, maintaining coherence both in its aesthetics and functionality.")}
                {t(" Personally, I was responsible for its comprehensive development, from ")}
                <span className="text-[#ffd864]">{t("creating the database")}</span>
                {t(" to implementing necessary ")}
                <span className="text-[#ffd864]">{t("backend functions")}</span>,
                {t(" and building the entire")}
                <span className="text-[#ffd864]">{t(" frontend using React")}</span>.
            </p>
        </div>
    )
};

export const ParkingDetails = () => {
    const { t } = useTranslation();
    return (
        <div className="text-white">
            <ul className="list-disc pl-5">
                <li>{t("The Frontend has been created using ")}<span className="text-[#ffd864]">{t("JavaScript and React")}</span>.</li>
                <li>{t("The Backend is developed in ")}<span className="text-[#ffd864]">Java</span>{t(". The database is with ")}<span className="text-[#ffd864]">SQL Server</span>.</li>
                <li>Asana</li>
                <li>Confluence</li>
                <li>Notion</li>
            </ul>
        </div>
    );
};

export const ParkingTasks = () => {
    const { t } = useTranslation();
    return (
        <div className="text-white">
            <p className="text-base leading-relaxed mb-4">
                {t("Parking Area Reservations divided into two types:")}
                <ul className="list-disc pl-5">
                    <li><span className="text-[#ffd864]">{t("Unassigned")}</span>{t(" Parking Areas: Represent parking spaces where users don’t select an exact space but have a ")}<span className="text-[#ffd864]">{t("pool of options upon arrival")}</span>.</li>
                    <li><span className="text-[#ffd864]">{t("Assigned")}</span>{t(" Parking Areas: Represent parking spaces where users ")}<span className="text-[#ffd864]">{t("must choose a specific space on the floorplan")}</span>.</li>
                </ul>
            </p>

            <p className="text-base leading-relaxed mb-4">
                {t("Users can select their preferred ")}<span className="text-[#ffd864]">{t("time slot")}</span>{t(" from the available options within the area. Additionally, they can specify whether the reservation is for ")}<span className="text-[#ffd864]">{t("themselves, another available employee, or a visitor")}</span>.
            </p>

            <p className="text-base leading-relaxed mb-4">
                {t("Calendar Overview: Users can ")}<span className="text-[#ffd864]">{t("view their reservations on a calendar")}</span>{t(". By clicking on each reservation, they can access its details, location on the map, and have the option to ")}<span className="text-[#ffd864]">{t("confirm or cancel")}</span>{t(" it.")}
            </p>

            <p className="text-base leading-relaxed mb-4">
                {t("Administrative Views in Archibus: Admins can easily ")}<span className="text-[#ffd864]">{t("manage all data")}</span>{t(". This includes configuring parking areas, time slots, assigned spaces, and associated employees. They also have the ability to set up reservation confirmation requirements.")}
            </p>

            <p className="text-base leading-relaxed mb-4">
                {t("Integration with the client’s ")}<span className="text-[#ffd864]">{t("Access Control System")}</span>{t(": This integration occurs in two ways:")}
                <ul className="list-disc pl-5">
                    <li><span className="text-[#ffd864]">{t("Daily synchronization")}</span>{t(" to report accesses for the following day.")}</li>
                    <li><span className="text-[#ffd864]">{t("Real-time updates")}</span>{t(" to report accesses at the time of reservation.")}</li>
                </ul>
            </p>
        </div>
    );
};

export default ShuvaniAbout;
