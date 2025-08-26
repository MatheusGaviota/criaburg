import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {  
    return (
        <nav className="fixed flex item-center justify-between top-0 left-0 w-full px-30 py-2 bg-foreground/35 z-10 backdrop-blur-lg">
            <Link to="/" className='flex items-center justify-center gap-15'>
                <img src="https://res.cloudinary.com/dvjb2v4gp/image/upload/v1756182379/3dburguer_zeckt3.png" alt="" className="size-15"/>
                <h3 className="font-lexend font-bold text-2xl">CriaBurg</h3>
            </Link>
            <div className="flex items-center justify-center gap-15 text-primary text-xl">
                <HashLink to="/#">Início</HashLink>
                <HashLink smooth to="/#receitas">Receitas</HashLink>
                <Link to="/login">Minha Conta</Link>
            </div>
        </nav>
    )
}