import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Summary({summaryItems}) {
    return (
        <div className="py-16 flex">
            <div className="flex-1"></div>
            <div className="flex-initial justify-center items-center flex flex-col gap-y-2 bg-white">
                {summaryItems.map(summaryItem => (
                    <div key={summaryItem.key} className="flex flex-col py-4 gap-y-3">
                        <div className="flex justify-center items-center gap-x-3">
                            <FontAwesomeIcon icon={summaryItem.icon} className="w-10 h-10 text-gray-700" />
                            <div className="text-3xl text-gray-700">{summaryItem.title}</div>
                        </div>
                        <div className="text-2xl text-gray-700">{summaryItem.value}</div>
                    </div>
                ))}
            </div>
            <div className="flex-1"></div>
        </div>
    );
}
