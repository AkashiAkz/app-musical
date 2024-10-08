import logo from '../Componentes/imagens/instagram_logo_icon_216343.webp'
import ListItem from '../Componentes/ListItem'
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsBrowserSafari } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";


export default function ConteudoLateral() {
    return (
        <div className="ConteudoLateral">
            <img src={logo} className="LogoInsta" alt="Logo do Instagram" />
            <div>
                <ul className='MenuLateral'>
                    <ListItem texto='Home' icone={<FaHome />}/>
                    <ListItem texto='Pesquisa' icone={<CiSearch />}/>
                    <ListItem texto='Buss' icone={<BsBrowserSafari />}/>
                    <ListItem texto='Mensagens' icone={<BsChatDots />}/>
                    <ListItem texto='Notificações' icone={<FaHeart />}  />
                </ul>

            </div>
        </div>
    )
}