import { Card } from "./Card"

export const CardControls: React.FC = () => {
    return (
        <div className="flex gap-8">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    )
}
