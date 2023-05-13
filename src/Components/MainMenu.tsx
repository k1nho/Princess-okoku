import usePlayerStore from "../store/store";
import { GiQueenCrown, GiInfo, GiCrown } from "react-icons/gi";
import { StaticCard } from "./StaticCard";
import { motion } from "framer-motion"
import { useState } from "react";

export const MainMenu: React.FC = () => {
    const [setGameMode] = usePlayerStore((state) => [state.setGameMode]);
    const [isInfoOpen, setIsInfoOpen] = useState(false)


    const Modal = (<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
        <div className="bg-stone-900 text-white rounded-lg p-8 w-2/3 space-y-4">
            <h2 className="text-4xl font-bold mb-4 text-center">About Princess Okoku</h2>
            <p className="mb-4">
                Hi there! author here, thanks for trying out Princess Okoku hope you have fun as much as I had coding this one up. While there are some features to be implemented
                such as the effect system and a more responsive UI, the core of the game is there. In the future, there will be few more updates that will include the effect system as well as a gacha system and currency to get favorite cards and flex your dashboard. Enjoy your stay in Althreisha!
            </p>
            <div>
                <div className="flex flex-col space-y-1">
                    <div className="flex space-x-2">
                        <p>Learn about the creation of Princess Okoku:</p>
                        <a href="https://medium.com/@k1nho/from-concept-to-creation-the-making-of-princess-okoku-with-ai-assets-generation-and-react-ae93a31ae2dc" target="_blank" className="text-blue-500">medium.com/@k1nho</a>
                    </div>
                    <div className="flex space-x-2">

                        <p>Github:</p>
                        <a href="https://github.com/k1nho" target="_blank" className="text-blue-500">github.com/k1nho</a>
                    </div>

                </div>
            </div>
            <button onClick={() => setIsInfoOpen(false)} className="bg-red-500 rounded-lg p-2 hover:bg-red-400">Close</button>
        </div>
    </div>)

    return (
        <>
            <div className="flex flex-col space-y-10 justify-center items-center min-h-screen bg-stone-800 relative">
                {isInfoOpen && Modal}
                <motion.div animate={{ y: 50 }} transition={{ delay: 1, ease: "easeInOut" }} className="text-8xl text-pink-500">
                    <GiCrown />
                </motion.div>
                <motion.div className="absolute top-10 left-6" animate={{ x: 100, y: 100, rotate: -25 }} transition={{ duration: 1 }}><StaticCard id="7" /></motion.div>
                <motion.div className="absolute bottom-0 right-10" animate={{ x: -80, y: -50, rotate: -25 }} transition={{ duration: 1 }}><StaticCard id="32" /></motion.div>
                <motion.div className="absolute top-10 right-6" animate={{ x: -60, y: 80, rotate: 30 }} transition={{ duration: 1 }}><StaticCard id="44" /></motion.div>
                <motion.div className="absolute bottom-0 left-10" animate={{ x: 100, y: -80, rotate: 25 }} transition={{ duration: 1 }}><StaticCard id="15" /></motion.div>
                <div>
                    <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient">
                        Princess Okoku
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="flex space-x-10">
                        <button
                            className=" flex items-center space-x-2 px-6 py-6 rounded-full bg-pink-400 hover:bg-pink-500 transition ease-in-out duration-700 text-gray-100"
                            onClick={() => setGameMode("Dashboard")}
                        >
                            <span className="text-2xl">
                                <GiQueenCrown />
                            </span>
                            <p className="text-2xl">Play</p>
                        </button>
                        <button className=" flex items-center space-x-2 px-6 py-6 rounded-full bg-amber-400 hover:bg-amber-500 transition ease-in-out duration-700 text-gray-100" onClick={() => setIsInfoOpen(true)}>
                            <span className="text-2xl">
                                <GiInfo />
                            </span>
                            <p className="text-2xl">Info</p>
                        </button>
                    </div>
                    <div className="text-white text-lg font-semibold">
                        <p>Created with <a href="https://beta.pixelvibe.com/" target="_blank" className="text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600  ">Rosebud.ai PixelVibe</a> assets</p>
                    </div>
                </div>
            </div>
        </>
    );
};
