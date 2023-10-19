import '../assets/css/contacto.css'

function Contacto(){
    return(
        <>
            <div className='contacto'>
                <form>
                    <label for="nombreapellido">Nombre y Apellido</label>
                    <input type="text" id="nombreapellido" class="input-padron" required/>

                    <label for="correoelectronico">Correo Electrónico</label>
                    <input type="email" id="correoelectronico" className="input-padron" required placeholder="email@dominio.com"/>

                    <label for="telefono">Teléfono</label>
                    <input type="tel" id="telefono" className="input-padron" required placeholder="(XX) XXXX XXXX"/>

                    <label for="mensaje">Mensaje</label>
                    <textarea cols="70" rows="10" id="mensaje" className="input-padron" required></textarea>
                    
                    <fieldset>
                        <legend>¿Cómo le gustaría que lo contactemos?</legend>

                        <label for="radio-email"><input type="radio" name="contacto" value="email" id="radio-email"/>Email</label>
                        
                        <label for="radio-telefono"><input type="radio" name="contacto" value="telefono" id="radio-telefono"/>Teléfono</label>
                        
                        <label for="radio-whatsapp"><input type="radio" name="contacto" value="whatsapp" id="radio-whatsapp" checked/>WhatsApp</label>
                        
                    </fieldset>
                
                    <fieldset>
                        <legend>¿En cuál horario prefiere ser atendido?</legend>
                        <select>
                            <option>Mañana</option>
                            <option>Tarde</option>
                            <option>Noche</option>
                        </select>
                    </fieldset>
                    
                    <label class="checkbox"><input type="checkbox" checked/>¿Le gustaría recibir novedades de la Barbería Alura?</label>                
                    
                    <input type="submit" value="Enviar formulario" className="enviar"/>
                </form>

            </div>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>Dia</th>
                            <th>Horario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lunes</td>
                            <td>08hs - 20hs</td>
                        </tr>
                        <tr>
                            <td>Miercoles</td>
                            <td>08hs - 20hs</td>
                        </tr>
                        <tr>
                            <td>Viernes</td>
                            <td>08hs - 20hs</td>
                        </tr>
                    </tbody>  
                </table>
            </div>
        </>
    )
}

export default Contacto;