import logo from '../assets/logo.png'
import Menu from './Menu';
import '../assets/css/header.css'


function Header(){

    return(
        <>
            <header>
                <div className='caja'>
                    <h1><img src={logo} alt="Logo de la Barber Shop" className='logo'/></h1>
                    <Menu/>
                </div>
            </header>
        </>
    )
}

export default Header;