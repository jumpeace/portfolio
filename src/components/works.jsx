import Image from "next/image"

export default function Works({works}) {
    return (
        <div className="flex py-8 md:py-12 lg:py-16 bg-gray-50">
            <div className="flex-1"></div>
            <div className="flex-initial grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mx-auto">
                {works.map(work => 
                    <div key={work.title} className="flex flex-col bg-gray-50 rounded-3xl shadow-xl"
                        >
                        <Image src={`${work.imgPath}`} alt={work.title} width={272} height={153}
                            className="md:hidden flex-inline mx-auto rounded-t-3xl object-cover"
                        />
                        <Image src={`${work.imgPath}`} alt={work.title} width={304} height={171}
                            className="hidden md:block lg:hidden flex-inline mx-auto rounded-t-3xl object-cover"
                        />
                        <Image src={`${work.imgPath}`} alt={work.title} width={336} height={189}
                            className="hidden lg:block flex-inline mx-auto rounded-t-3xl object-cover"
                        />

                        {/* 文章部分 */}
                        <div className="m-5 flex-1 flex flex-col">
                            {/* 見出し */}
                            <div className="text-base md:text-lg lg:text-xl text-gray-700">{work.title}</div>
                            {/* 日付 */}
                            <div className="flex-initial mt-1 text-xs lg:text-sm text-gray-400 text-right">
                                {work.date}
                            </div>

                            {/* 簡単な説明 */}
                            <div className="h-14 mt-2 lg:mt-3 tracking-wide text-black text-xs md:text-sm lg:text-base font-light">{work.description}</div>

                            {/* リンク */}
                            {work?.link && (
                                <div className="ml-auto">
                                    <a href={work.link.uri} target="_blank" rel="noreferrer"
                                        className="px-2 md:px-3 lg:px-4 py-1 md:py-2 tracking-wide rounded-lg text-xs md:text-sm lg:text-base no-underline text-black font-light bg-gray-200 hover:text-gray-400"
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
