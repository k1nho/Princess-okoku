import usePlayerStore from "../store/store";
import { GiQueenCrown, GiInfo, GiCrown } from "react-icons/gi";
import { StaticCard } from "./StaticCard";
import { motion } from "framer-motion"

export const MainMenu: React.FC = () => {
    const [setGameMode] = usePlayerStore((state) => [state.setGameMode]);
    return (
        <>
            <div className="flex flex-col space-y-10 justify-center items-center min-h-screen bg-stone-800 relative">
                <motion.div animate={{ y: 50 }} transition={{ delay: 1, ease: "easeInOut" }} className="text-8xl text-pink-500">
                    <GiCrown />
                </motion.div>
                <motion.div className="absolute top-10 left-6" animate={{ x: 100, y: 100, rotate: -25 }} transition={{ duration: 1 }}><StaticCard id="1" /></motion.div>
                <motion.div className="absolute bottom-0 right-10" animate={{ x: -80, y: -50, rotate: -25 }} transition={{ duration: 1 }}><StaticCard id="13" /></motion.div>
                <motion.div className="absolute top-10 right-6" animate={{ x: -60, y: 80, rotate: 30 }} transition={{ duration: 1 }}><StaticCard id="14" /></motion.div>
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
                        <button className=" flex items-center space-x-2 px-6 py-6 rounded-full bg-amber-400 hover:bg-amber-500 transition ease-in-out duration-700 text-gray-100">
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
