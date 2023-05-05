import { getCard } from "../store/store"

interface props {
    id?: string
}

export const StaticCard: React.FC<props> = ({ id }) => {
    const card = id ? getCard(id) : getCard("1")
    return (

        <div className="w-28">
            <div id="info" className="flex justify-center bg-yellow-500 relative text-white">
                <div className="absolute -top-4 -left-6 rounded-full  px-3 py-1 border-2 border-stone-900 bg-blue-800 text-amber-100 font-semibold">{card.cost}</div>
                <div className="font-semibold">{card.name}</div>
            </div>
            <img src={card.iml} alt={card.name} className="w-28 h-28 rounded-sm" />
            <div className="flex justify-between text-amber-100 font-semibold bg-stone-900">
                <div className="bg-red-700 rounded-br px-3 py-1 flex items-center justify-center">
                    {card.atk}
                </div>
                <div className="bg-blue-700 rounded-bl px-3 py-1 flex items-center justify-center">
                    {card.def}
                </div>
            </div>
            <div className="flex flex-wrap bg-stone-900 rounded-b-md">
                {card.special ? <p className="w-full text-xs text-white p-2"><span className="text-red-500 font-bold">Effect: </span>Instant damage 2</p> : <></>}
            </div>
        </div >

    )
}
