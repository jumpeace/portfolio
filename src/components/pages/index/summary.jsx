import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// プロフィールの概要を表示するコンポーネント
export default function Summary({summaryItems}) {
    return (
        <div className="py-16 flex">
            <div className="flex-1"></div>
            <div className="flex-initial justify-center items-center flex flex-col gap-y-6 md:gap-y-10 bg-white">
                {/* 概要の項目群のループ */}
                {summaryItems.map(summaryItem => (
                    <div key={summaryItem.key} className="flex flex-col gap-y-1 md:gap-y-3">
                        {/* 項目 */}
                        <div className="flex justify-center items-center gap-x-3">
                            <FontAwesomeIcon icon={summaryItem.icon} cla1ssName="w-6 h-6 md:w-10 md:h-10 text-gray-700" />
                            <div className="text-xl md:text-3xl text-gray-700">{summaryItem.title}</div>
                        </div>
                        {/* 項目に対応する値 */}
                        <div className="text-lg md:text-2xl text-gray-700">{summaryItem.value}</div>
                    </div>
                ))}
            </div>
            <div className="flex-1"></div>
        </div>
    );
}
