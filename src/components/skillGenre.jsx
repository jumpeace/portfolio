import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillGenre({skillGenre}) {
    return (
        <div key={skillGenre.title} className={`flex py-8 md:py-16 lg:py-20 bg-${skillGenre.bgColor}`}>
            <div className="flex-1"></div>
            <div className="flex-initial flex flex-col gap-y-4 md:gap-y-6">
                <div className="flex gap-x-3 md:gap-x-4 lg:gap-x-6 items-center justify-center">
                    <FontAwesomeIcon icon={skillGenre.icon} className="text-gray-900 text-2xl md:text-4xl" />
                    <div className="text-gray-900 text-xl md:text-3xl tracking-wider font-light">{skillGenre.title}</div>
                </div>
                <div className="mx-16 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-2 md:gap-y-4">
                    {skillGenre.skills.map((skill) => (
                        <div key={skill.title} className="flex flex-col gap-y-1 md:gap-y-2 items-center px-2">
                            <FontAwesomeIcon icon={skill.icon} className="w-[48px] h-[48px] md:w-[80px] md:h-[80px] text-gray-600" />
                            <div className="flex flex-col md:gap-y-1 text-gray-500">
                                <div className="text-center text-md md:text-2xl w-[100px] md:w-[170px]">{skill.title}</div>
                                <div className="text-center text-[9px] md:text-base font-thin text-pretty">{skill.details}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1"></div>
        </div>
    );
}
