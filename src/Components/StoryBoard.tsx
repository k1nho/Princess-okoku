import usePlayerStore from "../store/store"
import { StoryTechno } from "./scenarios/StoryTechno";
import { StoryFairy } from "./scenarios/StoryFairy";
import { StoryDragon } from "./scenarios/StoryDragon";
import { StoryCats } from "./scenarios/StoryCats";

export const StoryBoard: React.FC = () => {
    const [level] = usePlayerStore((state) => [state.level])

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
        <div className="min-h-screen flex items-center justify-center">
            {renderStory()}
        </div>
    )
}
