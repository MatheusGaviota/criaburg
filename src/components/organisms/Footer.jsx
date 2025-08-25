import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <footer className="flex item-center justify-between w-full px-30 py-5 bg-foreground">
            <Link to="/" className='flex items-center justify-center gap-15'>
                <img src="/3dburguer.png" alt="" className="size-15"/>
                <h3 className="font-lexend font-bold text-base">CriaBurg</h3>
            </Link>
            <div className="flex items-center justify-center gap-15 text-primary text-xl">
                <p className="text-sm">Av. Antônia Rosa Fioravanti, 804 - Centro, Mauá - SP, 09390-120</p>
                <p className="text-sm">criaburguer@gmail.com</p>
            </div>
        </footer>
    )

}