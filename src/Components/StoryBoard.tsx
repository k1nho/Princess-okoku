import usePlayerStore from "../store/store"
import { StoryTechno } from "./scenarios/StoryTechno";
import { StoryFairy } from "./scenarios/StoryFairy";
import { StoryDragon } from "./scenarios/StoryDragon";
import { StoryCats } from "./scenarios/StoryCats";
import machinabg from "../assets/bgs/bg_story_techno.webp"
import dragonbg from "../assets/bgs/bg_story_dragon_px.webp"
import fairybg from "../assets/bgs/bg_story_fairies.webp"
import nebula from "../assets/bgs/bg_story_cats.webp"


const storybgs = [
    machinabg,
    dragonbg,
    fairybg,
    nebula
];

export const StoryBoard: React.FC = () => {
    const [level] = usePlayerStore((state) => [state.level])

    const storybg = storybgs[level % 4]


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
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${storybg})` }}>
            {renderStory()}
        </div>
    )
}
