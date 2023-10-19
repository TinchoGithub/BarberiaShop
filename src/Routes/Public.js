
import {
    Routes,
    Route
} from 'react-router-dom'
import Contacto from '../Pages/Contacto'
import Home from '../Pages/Home'
import Productos from '../Pages/Productos'

function Public (){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/productos' element={<Productos/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
    )
}

export default Public;