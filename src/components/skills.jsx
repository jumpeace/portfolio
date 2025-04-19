import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills({skillGenre}) {
    return (
        <div key={skillGenre.title} className={`flex py-8 md:py-16 lg:py-20 bg-${skillGenre.bgColor}`}>
            <div className="flex-1"></div>
            <div className="flex-initial flex flex-col gap-y-4 md:gap-y-6">
                <div className="flex gap-x-3 md:gap-x-4 lg:gap-x-6 items-center">
                    <FontAwesomeIcon icon={skillGenre.icon} className="text-gray-500 text-3xl lg:text-4xl" />
                    <div className="text-gray-600 text-2xl md:text-3xl lg:text-4xl tracking-wider font-light">{skillGenre.title}</div>
                </div>
                <div className="grid grid-flow-row grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 lg:gap-10">
                    {skillGenre.skills.map((skill) => (
                        <div key={skill.title} className="flex flex-col gap-y-1 md:gap-y-3 items-center px-2">
                            <FontAwesomeIcon icon={skill.icon} className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] text-gray-400" />
                            <div className="flex flex-col md:gap-y-1 text-gray-500">
                                <div className="text-center text-lg md:text-xl lg:text-2xl w-[100px] md:w-[150px] lg:w-[200px]">{skill.title}</div>
                                <div className="text-center text-xs md:text-sm lg:text-base font-thin">{skill.details}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1"></div>
        </div>
    );
}
