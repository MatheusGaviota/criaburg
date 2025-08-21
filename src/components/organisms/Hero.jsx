export default function Hero() {

    return (
        <div className="h-screen w-screen bg-[url(/hero-background.png)] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/35 backdrop-blur-sm z-1"/>
            <h1 className="uppercase z-2 text-7xl font-lexend font-bold text-center leading-28">Faça seu Hamburg<br/>também!</h1>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary z-2"/>
        </div>
    )

}