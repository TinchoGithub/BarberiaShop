import cabello from '../assets/imagenes/cabello.jpg';
import barba from '../assets/imagenes/barba.jpg';
import cabelloBarba from '../assets/imagenes/cabello+barba.jpg';
import '../assets/css/productos.css'

function Productos(){
    return (
        <>
            <ul class="productos">
                <li>
                    <h2>Cabello</h2>
                    <img src={cabello}/>
                    <p className="producto-descripcion">Con tijera o máquina, a gusto del cliente</p>
                    <p className="producto-precio">$ 2500</p>
                </li>
                <li>
                    <h2>Barba</h2>
                    <img src={barba}/>
                    <p className="producto-descripcion">Corte y diseño profesional de barba</p>
                    <p className="producto-precio">$ 1500</p>
                </li>
                <li>
                    <h2>Cabello + Barba</h2>
                    <img src={cabelloBarba}/>
                    <p className="producto-descripcion">Paquete completo de cabello y barba</p>
                    <p className="producto-precio">$ 3500</p>
                </li>
            </ul>
        
        </>
    )
}

export default Productos;