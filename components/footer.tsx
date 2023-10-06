import React from "react";

export default function Footer() {
    return (
        <footer className="mb-10 px-4 text-center text-[#ffd864]">
            <small className="mb-2 block text-xs">
                Alejandro Esteban Gonzalez Gatica
            </small>
            <p className="text-xs">
                <span className="font-semibold">About this website:</span> built with
                React & Next.js , TypeScript, Tailwind CSS,
                Framer Motion, React Email & Resend, Vercel hosting.
            </p>
        </footer>
    );
}