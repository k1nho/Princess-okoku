import usePlayerStore from "../store/store"
import { Card } from "./Card"

export const CardControls: React.FC = () => {
    const [setGameMode] = usePlayerStore((state) => [state.setGameMode])
    return (
        <div className="flex gap-8">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <div className="flex items-center justify-center">
                <button className="rounded-full px-2 py-0.5 bg-red-500 text-white" onClick={() => setGameMode("Dashboard")}>X</button>
            </div>
        </div>
    )
}
