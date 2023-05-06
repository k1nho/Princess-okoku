export const CardPlaceholder: React.FC = () => {
    return (
        <div className="w-28">
            <div
                id="info"
                className="flex justify-center bg-stone-900 relative text-white rounded-t-md"
            >
                <div className="font-semibold"></div>
            </div>
            <div className="w-28 h-28 rounded-sm bg-stone-900"></div>
            <div className="flex justify-between text-amber-100 font-semibold bg-stone-900">
            </div>
            <div className="flex flex-wrap bg-stone-900 rounded-b-md">
                <p className="w-full text-xs text-white p-2"></p>
            </div>
        </div>
    );
};
