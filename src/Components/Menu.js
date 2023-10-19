import { Link } from "react-router-dom";
import '../assets/css/menu.css'


function Menu(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/productos'}>Productos</Link></li>
                    <li><Link to={'/contacto'}>Contacto</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu;