import { Link } from 'react-router-dom';

export default function Navbar() {  
    return (
        <nav className="fixed flex item-center justify-between top-0 left-0 w-full px-30 py-5 bg-foreground/35 z-10">
            <Link to="/" className='flex items-center justify-center gap-15'>
                <img src="/3dburguer.png" alt="" className="size-15"/>
                <h3 className="font-lexend font-bold text-2xl">CriaBurg</h3>
            </Link>
            <div className="flex items-center justify-center gap-15 text-primary text-xl">
                <Link to="/">Início</Link>
                <Link to="/">Receitas</Link>
                <p className="cursor-pointer">Minha Conta</p>
            </div>
        </nav>
    )
}