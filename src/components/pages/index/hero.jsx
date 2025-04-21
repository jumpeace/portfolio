import Image from "next/image"

// ヒーロー画像とタイトルを表示するコンポーネント
export default function Hero({hero, title}) {
    return (
        // <div 
        //     style={{background: `url(/${hero.link}) no-repeat`, backgroundPosition: "center", backgroundSize: "cover"}}
        //     className={`h-[180px] md:h-[240px] flex justify-center items-center gap-x-3 md:gap-x-5`}
        // >
        //     {/* ↑ヒーロー画像は背景画像として読み込む */}
        //     {/* タイトルのアイコン画像 */}
        //     <Image src={`/${title.icon.link}`} alt={title.icon.alt} width={80} height={80} className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] rounded-full" />
        //     {/* タイトルの文字部分 */}
        //     <div className="flex flex-col justify-center items-center md:gap-y-1">
        //         <div className="text-2xl md:text-4xl text-gray-900">{title.title}</div>
        //         <div className="text-md md:text-2xl text-gray-700">{title.subTitle}t</div>
        //     </div>
        // </div>
        <div className="relative w-screen h-[180px] md:h-[240px]">
            {/* ヒーロー画像 */}
            <Image src= {`/${hero.link}`} width={1000} height={500} className="w-full h-[180px] md:h-[240px] object-cover" />
            {/* タイトルのアイコン画像 */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-x-3 md:gap-x-5">
                <Image src={`/${title.icon.link}`} alt={title.icon.alt} width={80} height={80} className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] rounded-full" />
                {/* タイトルの文字部分 */}
                <div className="flex flex-col justify-center items-center md:gap-y-1">
                    <div className="text-2xl md:text-4xl text-gray-900">{title.title}</div>
                    <div className="text-md md:text-2xl text-gray-700">{title.subTitle}t</div>
                </div>
            </div>
        </div>
    );
}
