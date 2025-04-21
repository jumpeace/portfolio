import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillGenre({skillGenre}) {
    return (
        <div key={skillGenre.title} className={`flex py-8 md:py-12 bg-${skillGenre.bgColor}`}>
            <div className="flex-1"></div>
            <div className="flex-initial flex flex-col gap-y-4 md:gap-y-8">
                <div className="flex gap-x-3 items-center justify-center">
                    <FontAwesomeIcon icon={skillGenre.icon} className="text-gray-700 text-2xl md:text-3xl" />
                    <div className="text-gray-700 text-xl md:text-2xl tracking-wider font-light">{skillGenre.title}</div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-2 md:gap-y-4">
                    {skillGenre.skills.map((skill) => (
                        <div key={skill.title} className="flex flex-col gap-y-1 items-center px-2">
                            <FontAwesomeIcon icon={skill.icon} className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] text-gray-700" />
                            <div className="flex flex-col text-gray-500">
                                <div className="text-center text-md md:text-[16px] w-[100px]">{skill.title}</div>
                                <div className="text-center text-xs font-thin text-pretty">{skill.details}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1"></div>
        </div>
    );
}
