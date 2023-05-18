import { GiCrown, GiCardPick, GiCancel } from "react-icons/gi"
import usePlayerStore from "../store/store"
import { useState } from "react"
import { CoinSvg } from "./CoinSvg"
import { motion } from "framer-motion"
import { GachaCard } from "./GachaCard"

export const GachaMachine = () => {
    const [setGameMode, coins, decreaseCoins, cardCollection, setCardsCollected, getCardsCollected] = usePlayerStore((state) => [state.setGameMode, state.currency, state.decreaseCurrency, state.cardsCollected, state.setCardsCollected, state.getCardsCollected])
    const [spinning, setSpinning] = useState(false);
    const [cardId, setCardId] = useState<string | null>(null);
    const [isCardCollectionOpen, setIsCardCollectionOpen] = useState(false)

    const pullLever = () => {
        setSpinning(true);
        decreaseCoins();
        // Simulate card selection
        setTimeout(() => {
            const id = (Math.floor(Math.random() * 27) + 1000).toString();
            setCardId(id);
            setCardsCollected(id)
            localStorage.setItem("po_collected", JSON.stringify(getCardsCollected()))
            localStorage.setItem("po_coins", (coins - 10).toString())
            setSpinning(false);
        }, 1000);
    };

    const CardCollection = (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center z-10">
            <p className="text-lg font-bold text-white">Cards Collected ({`${cardCollection.length}/27`})</p>
            <div className="p-4 rounded-lg grid grid-cols-10 grid-rows-10 gap-2 bg-stone-900">
                {cardCollection.map((deckId) => (
                    <div key={deckId} className="flex flex-col justify-center items-center text-white">
                        {deckId}
                        <GachaCard id={deckId} />
                    </div>
                ))}
            </div>
            <button
                className="px-4 py-2 rounded-md  text-white bg-red-500 hover:bg-red-400 focus:outline-none text-lg mt-2"
                onClick={() => setIsCardCollectionOpen(false)}
            >
                <GiCancel />
            </button>
        </div>
    );


    return (
        <div className=" min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 flex flex-col space-y-4 items-center justify-center">
            {isCardCollectionOpen && CardCollection}
            <div>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="rounded-lg bg-stone-900 p-4">
                        <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Okoku Gacha Machine</h1>
                    </div>
                    <div className="w-80 h-96 bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 rounded-md flex flex-col items-center justify-center">
                        <div className="w-64 h-64 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 rounded-full flex items-center justify-center">
                            <div className={`w-56 h-56 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 rounded-full flex items-center justify-center ${spinning ? 'card-spin' : ''}`}>
                                {cardId ? (
                                    <GachaCard id={cardId} />
                                ) : (
                                    <div className="w-32 h-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 rounded-full"></div>
                                )}
                            </div>
                        </div>
                        <motion.div whileHover={{ scale: 1.1 }} transition={{ ease: "easeInOut" }}>
                            <button className="mt-4 px-4 py-2 bg-stone-900 rounded-md shadow-md cursor-pointer" onClick={pullLever} disabled={coins === 0}>
                                <h1 className="text-2xl text-white transition ease-in-out duration-700 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
                                    Summon
                                </h1>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center space-x-4 bg-stone-900 p-4 rounded-lg">
                <div className="flex items-center justify-center bg-stone-700 rounded-full px-4 py-0.5">
                    <div>
                        <CoinSvg />
                    </div>
                    <div className="text-white font-semibold">
                        {coins}
                    </div>

                </div>
                <button
                    className="flex items-center space-x-2 bg-stone-700 rounded-full px-4 py-2 hover:bg-stone-600 transition ease-in-out duration-700 text-white"
                    onClick={() => setIsCardCollectionOpen(true)}
                >
                    <GiCardPick />
                    <p>My Cards</p>
                </button>

                <button
                    className="flex items-center space-x-2 bg-stone-700 rounded-full px-4 py-2 hover:bg-stone-600 transition ease-in-out duration-700 text-white"
                    onClick={() => setGameMode("Dashboard")}
                >
                    <GiCrown />
                    <p>Back To Dashboard</p>
                </button>
            </div>
        </div>
    )
}
