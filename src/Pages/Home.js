import banner from '../assets/banner/banner.jpg'
import utensillos from '../assets/imagenes/utensilios[1].jpg'
import diferenciales from '../assets/diferenciales/diferenciales.jpg'
import '../assets/css/home.css'

function Home (){

    return(
        <>
            <img src={banner} className='banner'/>
            <main>
                <section className="principal">
                    <h2 className="titulo-principal">Sobre la Barbería Alura</h2>
                    <img className="utensillos" src={utensillos} alt="utensillos de un barbero"/>
                    <p>Ubicada en el corazón de la ciudad, la <strong>Barbería Alura</strong> trae para el mercado lo que hay de mejor para su cabello y barba. Fundada en 2020, la Barbería Alura ya es destaque en la ciudad y conquista nuevos clientes diariamente.</p>
                    <p id="mision"><em>Nuestra misión es: <strong>"Proporcionar autoestima y calidad de vida a nuestros clientes"</strong>.</em></p>
                    <p>Ofrecemos profesionales experimentados que están constantemente observando los cambios y movimiento en el mundo de la moda, para así ofrecer a nuestros clientes las últimas tendencias. El atendimiento posee un padrón de excelencia y agilidad, garantizando calidad y satisfacción de nuestros clientes.</p> 
                </section>

                <section className="mapa">
                    <h3 className="titulo-principal">Nuestra Ubicación</h3>
                    <p>Nuestro local se encuentra en el corazon de la ciudad</p>
                    <div className="contenido-mapa">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13143.15396274525!2d-58.459844266468394!3d-34.55891028753599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5cd6771dc5d%3A0xd7124126efb68e1f!2sBelgrano%20C%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1661717592857!5m2!1ses-419!2sar" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>
        
                <section className="diferenciales">
                    <h3 className="titulo-principal">Diferenciales</h3>
                    <div className="contenido-diferenciales">
                        <ul className="lista-diferenciales">
                            <li className="items">Atención personalizada a los clientes</li>
                            <li className="items">Espacio diferenciado</li>
                            <li className="items">Localización</li>
                            <li className="items">Profesesionales calificados</li>
                            <li className="items">Puntualidad</li>
                            <li className="items">Limpieza</li>
                        </ul>
                        <img src={diferenciales} className="imagen-diferenciales"/>
                    </div>
                    <div className="video">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/8pWtdanVz3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </section>
            </main>
        </>
    )


}

export default Home;