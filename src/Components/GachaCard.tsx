import { motion } from "framer-motion"
import { getGachaCard } from "../store/store"
import { gachaImages } from "./gachaCardImages"
import { parseInt } from "lodash"

interface props {
    id: string
}

export const GachaCard: React.FC<props> = ({ id }) => {
    const card = id ? getGachaCard(id) : getGachaCard("1000")
    const cardIdx = parseInt(id, 10)
    const cardImg = gachaImages[cardIdx - 1000]

    return (

        <motion.div className="w-28 cursor-pointer" whileHover={{ scale: 1.1 }}>
            <div id="info" className="flex justify-center bg-yellow-500 relative text-white rounded-t-md">
                <div className="absolute -top-4 -left-6 rounded-full  px-3 py-1 border-2 border-stone-900 bg-blue-800 text-amber-100 font-semibold">{card.cost}</div>
                <div className="font-semibold text-center">{card.name}</div>
            </div>
            <img src={cardImg} alt={card.name} className="w-28 h-28 rounded-sm" />
            <div className="flex justify-between text-amber-100 font-semibold bg-stone-900">
                <div className="bg-red-700 rounded-br px-3 py-1 flex items-center justify-center">
                    {card.atk > 0 ? card.atk : "S"}
                </div>
                <div className="bg-blue-700 rounded-bl px-3 py-1 flex items-center justify-center">
                    {card.def > 0 ? card.def : "S"}
                </div>
            </div>
            <div className="flex flex-wrap bg-stone-900 rounded-b-md">
                <p className="w-full text-xs text-white p-2">{card.description}</p>
            </div>
        </motion.div >
    )
}
