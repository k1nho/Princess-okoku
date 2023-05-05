import { DeckDisplay } from "../DeckDisplay"

export const ConfirmDeck = () => {
    return (
        <div className="flex flex-col justify-center space-y-4 items-center">
            <div className="font-semibold text-2xl text-stone-50">
                All set you have selected this deck to start your adventure
            </div>
            <div
            >
                <DeckDisplay />
            </div>
        </div>
    )
}
