import headerStyle from '../styles/header.module.css'
import Image from 'next/image';

export default function header() {
    return (
        <header className={headerStyle.content}>
            <div>
                <h1>Nós incentivamos suas ideias</h1>
                <div>
                    Conheça nossas soluções em desenvolvimento web e mobile. <br></br>
                    Entre em contato com a gente para fazer seu orçamento. 
                </div>
                <div>
                    <button className={headerStyle.appointmentButton}>
                        Quero agendar uma reunião
                    </button>
                </div>
            </div>
            <div>
                <Image
                    src="/images/general/hero.png"
                    height={300}
                    width={500}
                />
            </div>
        </header>
    );
}