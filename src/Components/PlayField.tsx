import { Card } from "./Card";
import { CardControls } from "./CardControls";

interface props {
    isEnemyField: boolean;
}

export const PlayField: React.FC<props> = ({ isEnemyField }) => {
    const invocation = isEnemyField ? "einvocation" : "invocation";
    const spell = isEnemyField ? "espell" : "spell";
    return (
        <div className="flex flex-col justify-center items-center space-y-5">
            <div id="invocation-zone" className="flex gap-10">
                <Card key={`${invocation}-1`}></Card>
                <Card key={`${invocation}-2`}></Card>
                <Card key={`${invocation}-3`}></Card>
                <Card key={`${invocation}-4`}></Card>
            </div>
            <div id="spell-zone" className="flex gap-10">
                <Card key={`${spell}-1`}></Card>
                <Card key={`${spell}-2`}></Card>
                <Card key={`${spell}-3`}></Card>
                <Card key={`${spell}-4`}></Card>
            </div>

        </div>

    );
};
