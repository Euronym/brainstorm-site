import aboutStyle from '../styles/about.module.css'
import Image from 'next/image';

export default function About() {
    return (
        <div className={aboutStyle.container}>
            <div>
                <Image
                    src='/images/members/team.png'
                    height={300}
                    width={400}
                />
                <div>
                    <div>Sobre a brainstorm</div>
                    <h2>Quem somos?</h2>
                    <div className={aboutStyle.aboutText}>
                        Uma empresa sem fins lucrativos composta por acadêmicos, e vinculada ao
                        curso de Engenharia da Computação da UFPA. Fundada em 2020, nosso objetivo
                        é integrar a academia ao mercado de trabalho, bem como oferecer serviços tecnológicos
                        de qualidade e baixo custo orçamentário.
                    </div>
                </div>
            </div>
            <div className={aboutStyle.services}>
                <div>
                    <div>O que criamos</div>
                    <h2>Explore e conheça nossos serviços</h2>
                    <div className={aboutStyle.servicesText}>
                        Desenvolvemos soluções web e mobile, como a construção de sites, aplicativos,
                        e-commerce e landing pages. Além de outros, como manutenção e consultoria. 
                        Traga sua ideia para nós!
                    </div>
                    <Image
                        src='/images/general/serv.png'
                        height={200}
                        width={300}
                    />
                </div>
                <div className={aboutStyle.cardsContainer}>
                    <div className={aboutStyle.cardService}>
                        <p>Soluções em T.I</p>
                    </div>
                    <div className={aboutStyle.cardService}>
                        <p>Manutenção</p>
                    </div>
                    <div className={aboutStyle.cardService}>
                        <p>Consultoria</p>
                    </div>
                </div>
            </div>
        </div>
    );
}