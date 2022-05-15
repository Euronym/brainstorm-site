import navbarStyle from '../styles/navbar.module.css'

export default function Navbar() {
    return (
        <nav className={navbarStyle.navContainer}>
            <ul className={navbarStyle.navList}>
                <li>Home</li> 
                <li>Sobre Nós</li> 
                <li>Serviços</li> 
                <li>Portfólio</li> 
                <li>Contato</li> 
            </ul>
        </nav>
    );
}