import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Recipe() {
    return (
        <div className="bg-foreground text-primary items-center justify-center mx-30 mt-30 mb-20">
            <div className="relative w-full border-b-2">
                <Link to="/"><ArrowLeft className="absolute left-5 top-6" /></Link>
                <h3 className="text-2xl text-center pt-5">X-Tudo</h3>
            </div>
            <div className="flex px-20 py-10 justify-between gap-20">
                <img src="/x-tudo.png" alt="" className="w-[60%] h-[100%] aspect-square object-contain" />
                <div className="w-full">
                    <h3 className="text-2xl border-b-2">Ingredientes</h3>
                    <ul className="list-disc py-4 pl-5">
                        <li>500 g de pernil suíno moído</li>
                        <li>1 embalagem de SAZÓN® Tempera & Dá Liga Tradicional</li>
                        <li>2 colheres (sopa) de óleo</li>
                        <li>5 fatias de queijo prato</li>
                        <li>5 fatias de bacon cortado ao meio</li>
                        <li>5 ovos</li>
                        <li>5 pães de hambúrguer com gergelim cortados ao meio</li>
                        <li>3 colheres (sopa) de maionese</li>
                        <li>1 tomate médio cortado em rodelas finas</li>
                        <li>5 folhas de alface mimosa</li>
                    </ul>
                </div>
            </div>
            <div className="py-4 px-20">
                <h3 className="text-2xl border-b-2">Modo de Preparo</h3>
                <ol className="list-decimal py-4 pl-5 space-y-2">
                    <li>Em uma tigela grande, coloque a carne moída, o SAZÓN® Tempera & Dá Liga, e misture. Divida em 5 partes iguais e, com as mãos untadas, modele hambúrgueres finos.</li>
                    <li>Em uma frigideira grande, coloque metade do óleo e leve ao fogo alto para aquecer. Disponha os hamburgueres, aos poucos, e, grelhe por 10 minutos de cada lado, ou até dourar, repondo o óleo quando necessário.</li>
                    <li>Desligue o fogo, coloque a fatia de queijo por cima dos hambúrgueres e tampe a frigideira, aguardando por 2 minutos, ou até o queijo derreter. Reserve aquecido.</li>
                    <li>Na mesma frigideira média, disponha as fatias de bacon, leve ao fogo médio e deixe por 3 minutos, ou até as fatias dourarem. Retire da frigideira e reserve aquecido.</li>
                    <li>Na mesma frigideira, ainda com a gordura do bacon, frite os ovos por 2 minutos, ou até a gema estar cozida. Retire e reserve aquecido.</li>
                    <li>Em uma das metades do pão, passe parte da maionese, disponha o hambúrguer, o bacon, o ovo, o tomate e a alface. Cubra com a outra metade do pão e repita com os ingredientes restantes. Sirva em seguida.</li>
                </ol>
            </div>
        </div>
    );
}