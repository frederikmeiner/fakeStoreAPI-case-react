// src/components/Col1Text.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface MotionTextProps {
    text: string;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02,
        }
    }
};

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
    }
};

const MotionText: React.FC<MotionTextProps> = ({ text }) => (
    <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="overflow-hidden"
    >
        {text.split("").map((char, index) => (
            <motion.span key={index} variants={childVariants}>
                {char}
            </motion.span>
        ))}
    </motion.div>
);

export default function Col1Text() {
    const text = "Wecome to our Fake store API!";
    const subText = "In this project, React, Vite, TypeScript, React Router 6.4, and Framer Motion were utilized to create a modern, interactive web experience. Data was fetched from the Fake Store API (https://fakestoreapi.com).";

    return (
        <section className="bg-custom-brown text-white mt-32 pt-32 pb-32">
            <div className="max-w-1366 mx-auto px-10">
                <h1 className="text-xl md:text-2xl">
                    <MotionText text={text} />
                </h1>
                <h2 className="text-base Montserrat max-w-screen-sm md:text-xl mt-2">
                    <MotionText text={subText} />
                </h2>
            </div>
        </section>
    );
}
