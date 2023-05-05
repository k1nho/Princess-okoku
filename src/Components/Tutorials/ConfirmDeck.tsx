import { motion } from "framer-motion"
import { StaticCard } from "../StaticCard"
import usePlayerStore from "../../store/store"

export const ConfirmDeck = () => {
    const [deck] = usePlayerStore((state) => [state.deck])
    return (
        <div className="flex flex-col justify-center space-y-4 items-center">
            <div className="font-semibold text-2xl text-stone-50">
                All set you have selected this deck to start your adventure
            </div>
            <div
                className=" flex flex-col justify-center items-center space-y-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 rounded-lg p-1 cursor-pointer"
            >

                <div className="flex justify-center items-center">
                    {deck.map((card) => (
                        <StaticCard id={card.id} />
                    ))}

                </div>
                <div className="flex flex-wrap font-semibold text-lg text-gray-100 text-center">
                    <p>
                        The Techno Princess deck is a tactical deck with emphasis on its
                        key ruler the AI Princess, combine these wonderful cyberpunk deck
                        to make your way through Althreisha
                    </p>
                </div>
            </div>
        </div>
    )
}
