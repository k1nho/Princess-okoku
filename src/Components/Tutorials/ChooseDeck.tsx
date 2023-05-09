import { motion } from "framer-motion";
import { StaticCard } from "../StaticCard";
import usePlayerStore from "../../store/store";

export const ChooseDeck: React.FC = () => {
    const [setDeck] = usePlayerStore((state) => [state.setDeck]);

    const handleSetDeck = (id: number) => {
        localStorage.setItem("po_playerdeck", id.toString());
        setDeck(id);
    };

    return (
        <div className="flex flex-col">
            <div className="flex justify-center font-semibold text-2xl p-2">
                <h1 className="font-bold text-4xl text-white">
                    Choose a starting deck
                </h1>
            </div>
            <div className="flex  flex-wrap justify-evenly p-2">
                <div
                    id="techno-princess"
                    className="w-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 rounded-lg p-1 cursor-pointer"
                    onClick={() => handleSetDeck(0)}
                >
                    <div className="flex justify-center font-bold text-2xl mb-4 text-stone-50">
                        <h1>Techno Princess</h1>
                    </div>
                    <div className="flex justify-center space-x-10">
                        <motion.div
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <StaticCard id="4" />
                        </motion.div>
                        <motion.div
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <StaticCard id="1" />
                        </motion.div>
                        <motion.div
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <StaticCard id="7" />
                        </motion.div>
                    </div>
                    <div className="flex flex-wrap font-semibold text-lg text-gray-100 text-center">
                        <p>
                            The Techno Princess deck is a tactical deck with emphasis on its
                            key ruler the AI Princess, hack your way through Althreisha with
                            this wonderful cyberpunk deck
                        </p>
                    </div>
                </div>
                <div
                    id="dragon-empire"
                    className=" w-1/2 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg p-1 cursor-pointer"
                    onClick={() => handleSetDeck(1)}
                >
                    <div className="flex justify-center font-bold text-2xl mb-4 text-stone-50">
                        <h1>Dragon Empire</h1>
                    </div>
                    <div className="flex justify-center space-x-10">
                        <motion.div
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <StaticCard id="14" />
                        </motion.div>
                        <motion.div
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <StaticCard id="20" />
                        </motion.div>
                        <motion.div
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <StaticCard id="13" />
                        </motion.div>
                    </div>
                    <div className="flex flex-wrap font-semibold text-lg text-gray-100 text-center">
                        <p>
                            The Dragon Empire deck is a scorching deck with emphasis on the
                            instant damage mechanic, set forth these legion of dragons as you
                            explore through Althreisha
                        </p>
                    </div>
                </div>

                <div
                    id="spirit-fairies"
                    className="w-1/2 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 rounded-lg p-4 cursor-pointer"
                    onClick={() => handleSetDeck(2)}
                >
                    <div className="flex justify-center font-bold text-2xl mb-4 text-stone-50">
                        <h1>Spirit Fairies</h1>
                    </div>
                    <div className="flex justify-center space-x-10">
                        <motion.div
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <StaticCard id="28" />
                        </motion.div>

                        <motion.div
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <StaticCard id="32" />
                        </motion.div>
                        <motion.div
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <StaticCard id="29" />
                        </motion.div>
                    </div>
                    <div className="flex flex-wrap font-semibold text-lg text-gray-100 text-center">
                        <p>
                            The Spirit Fairies deck is a control deck with emphasis on the
                            instant attack boost mechanic,use the fairies as your guiding
                            light through Althreisha
                        </p>
                    </div>
                </div>
                <div
                    id="dolls"
                    className="w-1/2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg p-4"
                    onClick={() => handleSetDeck(3)}
                >
                    <div className="flex justify-center font-bold text-2xl mb-4 text-stone-50">
                        <h1>Sweet Dolls</h1>
                    </div>
                    <div className="flex justify-center space-x-10">
                        <motion.div
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                        ></motion.div>

                        <motion.div
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                        ></motion.div>
                        <motion.div
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                        ></motion.div>
                    </div>
                    <div className="flex flex-wrap font-semibold text-lg text-gray-100 text-center">
                        <p>
                            The Sweet Dolls deck is a fast play deck with emphasis on the
                            reduce cost mechanic, command these sugary dolls through the lands
                            of Althreisha
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
