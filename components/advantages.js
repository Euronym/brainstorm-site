import advantageStyle from '../styles/advantages.module.css'
import Image from 'next/image';

export default function Advantages() {
    return(
        <div className={advantageStyle.container}>
            <div>
                <h2>Por que escolher a brainstorm?</h2>
                <div>
                    Optar pelos serviços da Brainstorm Engenharia Júnior garante a você e sua empresa 
                    soluções pensadas exclusivamente para atender aos seus objetivos. Financiar projetos nunca foi 
                    tão fácil! 
                </div>
                <button className={advantageStyle.buttonAbout}>
                    Saiba mais sobre nós
                </button>
            </div>
            <div className={advantageStyle.reasons}>
                <div>
                    <div>
                        <circle><p>1.</p></circle> <h3>Custo acessível</h3>
                    </div>
                    <div>
                        Visando a acessibilidade de custos, os orçamentos são planejados 
                        conforme estimativas gerais. 
                    </div>
                </div>
                <div>
                    <div>
                        <circle><p>2.</p></circle><h3>Disponibilidade e assistência</h3>
                    </div>
                    <div>
                        Você terá assistência imediata da nossa equipe por meios dos nossos canais 
                        de comunicação. 
                    </div>
                </div>
                <div>
                    <div>
                        <circle><p>3.</p></circle><h3>Incentivo acadêmico</h3>
                    </div>
                    <div>
                        Além de obter serviços de excelência, você estará incentivando acadêmicos da área.
                    </div>
                </div>
                <div>
                    <div>
                        <circle><p>4.</p></circle><h3>Serviço personalizado</h3>
                    </div>
                    <div>
                        Elaboramos projetos com a sua identidade ou a da sua empresa. Mas se 
                        você ainda não tem uma, nós também criamos para você. 
                    </div>
                </div>
            </div>
        </div>
    );
}