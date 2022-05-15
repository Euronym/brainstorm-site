import teamStyle from '../styles/team.module.css'

import CardMember from './cardMember'

export default function Team() {

    const Members = require('../members.json')

    return(
        <div>
            <p>Nosso time</p>
            <h2>Conheça nossa equipe <span>#HardNaBrain</span></h2>
            <div>
                Nosso diferencial é a criatividade e a clareza de ideias. 
                Buscamos alcançar a inovação e a qualidade nos serviços prestados pela empresa. 
            </div>
            <div className={teamStyle.membersCarrosel}>
                {Members.members.map((item , _i) => <CardMember memberInfo={item}/>)}
            </div>
        </div>
    );
}