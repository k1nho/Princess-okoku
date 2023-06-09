import { Board } from "./Components/Board";
import { Dashboard } from "./Components/Dashboard";
import { GachaMachine } from "./Components/GachaMachine";
import { Learn } from "./Components/Learn";
import { MainMenu } from "./Components/MainMenu";
import { StoryBoard } from "./Components/StoryBoard";
import usePlayerStore from "./store/store";

function App() {
    const [gameMode] = usePlayerStore((state) => [state.gameMode])
    if (gameMode === "MainMenu") {
        return <MainMenu />
    }

    else if (gameMode === "Dashboard") {
        return <Dashboard />
    }

    else if (gameMode === "Story") {
        return <StoryBoard />
    }

    else if (gameMode === "Learn") {
        return <Learn />
    }

    else if (gameMode === "Gacha") {
        return <GachaMachine />
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
