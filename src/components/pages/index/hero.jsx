import Image from "next/image"

export default function Hero() {
    return (
        <div className="bg-[url(/hero.png)] bg-cover bg-center h-[180px] md:h-[300px] flex justify-center items-center gap-x-3 md:gap-x-5">
            <Image src='/icon.jpg' alt="icon image" width={80} height={80} className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] rounded-full" />
            <div className="flex flex-col justify-center items-center md:gap-y-1">
                <div className="text-2xl md:text-4xl text-gray-900">Jumpei Kawahara</div>
                <div className="text-md md:text-2xl text-gray-700">Computer Science College Student</div>
            </div>
        </div>
    );
}
