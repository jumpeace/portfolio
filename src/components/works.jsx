import Image from "next/image"

export default function Works({works}) {
    return (
        <div className="flex py-8 md:py-12 bg-gray-50">
            <div className="flex-1"></div>
            <div className="flex-initial mx-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-8">
                {works.map(work => 
                    <div key={work.title} className="w-[174px] h-[260px] md:w-[304px] md:h-[400px] flex flex-col bg-gray-50 rounded-3xl shadow-xl">
                        <Image src={`${work.imgPath}`} alt={work.title} width={304} height={171}
                            className="w-[174px] h-[98px] md:w-[304px] md:h-[171px] flex-inline mx-auto rounded-t-3xl object-cover"
                        />

                        {/* 文章部分 */}
                        <div className="m-3 md:m-5 flex-1 flex flex-col">
                            {/* 見出し */}
                            <div className="text-xs md:text-xl text-gray-900">{work.title}</div>
                            {/* 日付 */}
                            <div className="flex-initial mt-1 text-[9px] md:text-sm text-gray-500 text-right">
                                {work.date}
                            </div>

                            {/* 簡単な説明 */}
                            <div className="h-16 md:h-24 mt-2 md:mt-3 tracking-wide text-gray-900 text-[9px] md:text-base font-light">{work.description}</div>

                            {/* リンク */}
                            {work?.link && (
                                <div className="ml-auto mt-2">
                                    <a href={work.link.uri} target="_blank" rel="noreferrer"
                                        className="px-2 md:px-3 py-1 md:py-[7px] tracking-wide rounded-lg text-[9px] md:text-base no-underline text-gray-900 font-light bg-gray-200 hover:text-gray-500"
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
