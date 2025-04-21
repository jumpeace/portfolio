import Image from "next/image"

// 作品群を表示するコンポーネント
export default function Works({works}) {
    return (
        <div className="flex py-8 md:py-12 bg-gray-50">
            <div className="flex-1"></div>
            <div className="flex-initial md:mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                {/* 作品群のループ */}
                {works.map(work => 
                    <div key={work.title} className="w-[266px] h-[340px] md:h-[355px] flex flex-col bg-gray-50 rounded-3xl shadow-xl">
                        {/* ヒーロー画像 */}
                        <Image src={`/works_images/${work.imgPath}`} alt={work.title} width={304} height={171}
                            className="w-[266px] h-[150px] flex-inline mx-auto rounded-t-3xl object-cover"
                        />

                        {/* 文章部分 */}
                        <div className="m-5 flex-1 flex flex-col">
                            {/* 見出し */}
                            <div className="text-base md:text-lg text-gray-900">{work.title}</div>
                            {/* 日付 */}
                            <div className="flex-initial text-xs text-gray-500 text-right">
                                {work.date}
                            </div>

                            {/* 簡単な説明 */}
                            <div className="h-20 md:h-24 mt-2 tracking-wide text-gray-900 text-xs md:text-sm font-light">{work.description}</div>

                            {/* リンク */}
                            {work?.link && (
                                <div className="ml-auto">
                                    <a href={work.link.uri} target="_blank" rel="noreferrer"
                                        className="px-3 py-1 tracking-wide rounded-lg text-sm no-underline text-gray-900 font-light bg-gray-200 hover:text-gray-500"
                                    >
                                        {work.link.title}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className="flex-1"></div>
        </div>
    );
}
