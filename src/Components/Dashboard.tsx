import usePlayerStore from "../store/store"
import { RiSwordFill } from "react-icons/ri"
import { GiExitDoor } from "react-icons/gi"

export const Dashboard: React.FC = () => {

    const [setGameMode] = usePlayerStore((state) => [state.setGameMode])

    return (
        <div>
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 sticky top-0 z-50">
                <div className="flex justify-between md:justify-around mx-auto w-10/12 py-4 text-white">
                    <h1 className="text-2xl md:text-3xl transition duration-200 focus:outline-none font-semibold">
                        Princess Okoku
                    </h1>
                    <div className="flex items-center justify-center font-semibold text-base space-x-10 py-1">
                        <div className="">Player</div>
                        <div className="">Level</div>
                        <button className=" flex items-center space-x-2 bg-stone-900 rounded-full px-4 py-2 hover:bg-stone-700 transition ease-in-out duration-700" onClick={() => setGameMode("Battle")}>
                            <p>
                                Battle
                            </p>
                            <RiSwordFill />
                        </button>
                        <button className="text-xl" onClick={() => setGameMode("MainMenu")}><GiExitDoor /></button>
                    </div>
                </div>
            </div>
            <div className="min-h-screen">

            </div>
        </div>
    )
}
