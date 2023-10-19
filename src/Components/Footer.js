import logo from '../assets/logo.png'
import '../assets/css/footer.css'

function Footer (){
    return(
        <>
            <footer>
                <img src={logo} alt='Logo Barbería Shop' className='logo'/>
                <p className="copyright">Copyright Barbería Shop - 2023<br/><br/>Desarrollado por Martín Perez</p>
            </footer>
        </>
    )
}

export default Footer;