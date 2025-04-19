import Image from "next/image"

export default function Hero() {
    return (
        <div className="bg-[url(/hero.JPG)] bg-cover bg-center h-[350px] md:h-[500px] flex justify-center items-center gap-x-6">
            <Image src='/icon.png' alt="icon image" width={80} height={80} className="w-[80px] md:w-[120px] lg:w-[150px] h-80px md:h-[120px] lg:h-[150px] rounded-full" />
            <div className="flex flex-col justify-center items-center gap-y-2">
                <div className="text-3xl md:text-5xl lg:text-6xl text-gray-900">Jumpei Kawahara</div>
                <div className="text-lg md:text-2xl lg:text-3xl text-gray-700">Computer Science College Student</div>
            </div>
        </div>
    );
}
