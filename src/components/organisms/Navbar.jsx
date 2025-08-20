export default function Navbar() {  
    return (
        <div className="fixed flex item-center justify-between top-0 left-0 w-full px-30 py-5 bg-foreground">
            <div className="flex items-center justify-center gap-15">
                <img src="/3dburguer.png" alt="" className="size-15"/>
                <h3 className="font-lexend font-bold text-2xl">CriaBurg</h3>
            </div>
            <div className="flex items-center justify-center gap-15 text-primary text-xl">
                <p className="">Início</p>
                <p className="">Sobre</p>
                <p className="">Menu</p>
            </div>
        </div>
    )
}