export default function Hero() {

    return (
        <div className="h-screen w-full bg-[url(/hero-background.png)] bg-cover flex items-center justify-center">
            <div className="absolute inset-0 bg-black/35 backdrop-blur-sm"/>
            <h1 className="uppercase z-2 text-7xl font-lexend font-bold text-center leading-28">Faça seu Hamburg<br/>também!</h1>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary"/>
        </div>
    )

}