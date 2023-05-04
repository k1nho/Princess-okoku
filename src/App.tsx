import { Board } from "./Components/Board";
import { Dashboard } from "./Components/Dashboard";
import { MainMenu } from "./Components/MainMenu";
import usePlayerStore from "./store/store";

function App() {
    const [gameMode] = usePlayerStore((state) => [state.gameMode])
    if (gameMode === "MainMenu") {
        return <MainMenu />
    }

    else if (gameMode === "Dashboard") {
        return <Dashboard />
    }

    return (
        <>
            <div>
                <Board></Board>
            </div>
        </>
    );
}

export default App;
