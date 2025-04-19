import Image from "next/image"

export default function Hero() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div 
                className="flex flex-col md:flex-row gap-y-6 md:gap-x-12 justify-center items-center"
            >
                <Image src='/icon.png' alt="icon image" width={80} height={80} className="md:hidden rounded-full" />
                <Image src='/icon.png' alt="icon image" width={120} height={120} className="hidden md:block lg:hidden rounded-full" />
                <Image src='/icon.png' alt="icon image" width={150} height={150} className="hidden lg:block rounded-full" />
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <div className="text-3xl md:text-5xl lg:text-6xl text-gray-700">Jumpei Kawahara</div>
                    <div className="text-lg md:text-2xl lg:text-3xl text-gray-400">Computer Science College Student</div>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full h-screen z-[-1] opacity-40`}>
                <Image src={`/hero.JPG`} alt="hero image for top page" layout={`fill`} objectFit={`cover`} />
            </div>
        </div>
    );
}
