import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export default function SigninForms() {

    return (
        <div className="flex flex-col bg-foreground text-primary items-center justify-center mx-30 mt-30 mb-20 gap-y-10">
            <h3 className="text-2xl text-center pt-10 uppercase font-lexend">Cadastre-se</h3>
            <div className="flex flex-col gap-y-10">
                <input type="text" className="border-b-2 border-primary bg-transparent text-primary placeholder:text-primary focus:outline-none w-100" placeholder="Email" />
                <input type="password" className="border-b-2 border-primary bg-transparent text-primary placeholder:text-primary focus:outline-none w-100" placeholder="Senha" />
                <input type="password" className="border-b-2 border-primary bg-transparent text-primary placeholder:text-primary focus:outline-none w-100" placeholder="Confirmar Senha" />
            </div>
            <button className="bg-primary text-foreground py-2 px-20 mb-10">Fazer Cadastro</button>
        </div>
    )

}