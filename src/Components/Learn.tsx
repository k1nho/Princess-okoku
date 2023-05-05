import { GiCrown } from "react-icons/gi"
import usePlayerStore from "../store/store"

export const Learn: React.FC = () => {
    const [setGameMode] = usePlayerStore((state) => [state.setGameMode])
    return (
        <div>
            Learn
            <button className="flex items-center space-x-2 bg-pink-400 rounded-full px-4 py-2 hover:bg-pink-600 transition ease-in-out duration-700 text-white" onClick={() => setGameMode("Dashboard")}>
                <p>Dashboard</p>
                <GiCrown />
            </button>

        </div>
    )
}
