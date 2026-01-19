"use client";

import React from "react";
import { motion } from "framer-motion";

const RotatingLogo = () => {
    const text = "OWOLABI EMMANUEL • OWOLABI EMMANUEL • ";

    return (
        <div className="relative w-20 h-20 flex items-center justify-center">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="w-full h-full"
            >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                        <path
                            id="circlePath"
                            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        />
                    </defs>
                    <text className="fill-[#64ffda] text-[10px] uppercase font-mono tracking-widest">
                        <textPath xlinkHref="#circlePath">
                            {text}
                        </textPath>
                    </text>
                </svg>
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#64ffda] font-mono text-xl font-bold">OE</span>
            </div>
        </div>
    );
};

export default RotatingLogo;
