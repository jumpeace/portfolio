import Image from "next/image"

// ヒーロー画像とタイトルを表示するコンポーネント
export default function Hero({hero, title}) {
    return (
        <div className="relative w-screen h-[180px] md:h-[220px]">
            {/* ヒーロー画像 */}
            <Image src= {`/${hero.link}`} width={1000} height={500} className="w-full h-[180px] md:h-[220px] object-cover" />
            {/* タイトルのアイコン画像 */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-x-2 md:gap-x-3">
                <Image src={`/${title.icon.link}`} alt={title.icon.alt} width={80} height={80} className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full" />
                {/* タイトルの文字部分 */}
                <div className="flex flex-col justify-center items-center md:gap-y-1">
                    <div className="text-2xl md:text-3xl text-gray-900">{title.title}</div>
                    <div className="text-lg md:text-xl text-gray-700">{title.subTitle}</div>
                </div>
            </div>
        </div>
    );
}
