import { motion } from "framer-motion"
import usePlayerStore, { getDeck } from "../store/store"
import { StaticCard } from "./StaticCard"

export const DeckDisplay: React.FC = () => {
    const [deckId] = usePlayerStore((state) => [state.deck])
    const deck = [...getDeck(deckId * 12, (deckId * 12) + 12).map((c) => ({ ...c }))]

    return (
        <div className="grid grid-cols-4 justify-items-center gap-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 rounded-lg p-8 cursor-pointer">
            {deck.map((card) => (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} key={card.id}>
                    <StaticCard id={card.id} />
                </motion.div>
            ))}

        </div>
    )
}
