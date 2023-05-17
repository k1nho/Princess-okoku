import coin from "../assets/coin_nbg.png"

export const CoinSvg = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            version="1.1"
            viewBox="0 0 144 144"
            className="h-12 w-12"
        >
            <image
                xlinkHref={coin}
            />
        </svg>
    );
};
