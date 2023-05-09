import usePlayerStore from "../store/store"
import { GiCrown } from "react-icons/gi"
import { StoryTechno } from "./scenarios/StoryTechno";
import { StoryFairy } from "./scenarios/StoryFairy";
import { StoryDragon } from "./scenarios/StoryDragon";
import { StoryCats } from "./scenarios/StoryCats";

export const StoryBoard: React.FC = () => {
    const [setGameMode, level] = usePlayerStore((state) => [state.setGameMode, state.level])

    const renderStory = () => {
        switch ((level) % 4) {
            case 0:
                return <StoryTechno />;
            case 1:
                return <StoryDragon />;
            case 2:
                return <StoryFairy />;
            case 3:
                return <StoryCats />;
            default:
                return <></>
        }
    };


    return (
        <div>
            {renderStory()}
            <button className="flex items-center space-x-2 bg-pink-400 rounded-full px-4 py-2 hover:bg-pink-600 transition ease-in-out duration-700 text-white" onClick={() => setGameMode("Dashboard")}>
                <p>Dashboard</p>
                <GiCrown />
            </button>
        </div>
    )
}
