import 'bootstrap/dist/css/bootstrap.css';
import {useForm} from "react-hook-form";
import {useState} from 'react'
import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../../services/Firebase'

import Swal from 'sweetalert2'

const Formulario = () => {

    const { register, formState: { errors }} = useForm();

    const {carrito, sumaTotal} = useContext(CartContext)


    const [datos, setDatos] = useState({
        nombre: '', 
        direccion: '', 
        tel: '', 
        mail: '', 
    })

    const {nombre, direccion, tel, mail} = datos

    const handleInputChange = (e) => {
        setDatos({ 
            ...datos, 
            [e.target.name] : e.target.value 

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!nombre.trim() || !direccion.trim() || !tel.trim() || !mail.trim()) {
            Swal.fire({
                title: 'Error',
                text: 'Todos los campos son requeridos',
                icon: 'error'
            })
            return;
        }
        console.log(datos)
        Swal.fire({
            title: 'Exito',
            text: 'Se completaron los datos con exito',
            icon: 'success',
        })
    }


    const crearOrden = () => {
        console.log('se genero la orden')
        const ObjOrden = {
            cliente: datos,
            items: carrito,
            total: sumaTotal()
        }

        const coleccion = collection(db, 'ordenes')
        addDoc(coleccion, ObjOrden).then(({ id }) => {
            console.log(`Se creo la orden con el id Nº ${id}`)
        })
    }



    return (
        <div className="container">
            <h2>Orden de compra</h2>
            <form onSubmit = {handleSubmit} className='row'>
                <label>
                    Nombre completo
                    <input 
                        type='text' 
                        name='nombre' 
                        placeholder='Escribe tu nombre' 
                        className='form-control mb-4'
                        {...register('nombre', {required: true, message: 'Campo requerido' })}
                        onChange={handleInputChange}
                        value={datos.nombre}
                    />
                    {errors.nombre?.type === 'required' && <span className='text-danger text-small d-block mb-2'>{errors.nombre.message}</span>}
                    {/*errors.nombre && <span className='text-danger text-small d-block mb-2'>{errors.nombre.message}</span>*/}
                </label>
                <label>
                    Direccion
                    <input 
                        type='text' 
                        name='direccion' 
                        placeholder='Escribe tu direccion' 
                        className='form-control mb-4' 
                        {...register('direccion', {required: true, message: 'Campo requerido' })}
                        onChange={handleInputChange}
                        value={datos.direccion}

                    />
                    {/*errors.direccion && <span className='text-danger text-small d-block mb-2'>{errors.direccion.message}</span>*/}
                </label>
                <label>
                    Telefono
                    <input 
                        type='number' 
                        name='tel' 
                        placeholder='09xxxxxxx' 
                        className='form-control mb-4' 
                        {...register('tel', {required: true, message: 'Campo requerido' })}
                        onChange={handleInputChange}
                        value={datos.tel}

                    />
                    {/*errors.tel && <span className='text-danger text-small d-block mb-2'>{errors.tel.message}</span>*/}

                </label>
                <label>
                    Correo electronico
                    <input 
                        type='mail' 
                        name='mail' 
                        placeholder='ejemplo@mail.com' 
                        className='form-control mb-4'
                        {...register('mail', {required: true, message: 'Campo requerido' })}
                        onChange={handleInputChange}
                        value={datos.mail}
                    />
                    {/*errors.mail && <span className='text-danger text-small d-block mb-2'>{errors.mail.message}</span>*/}
                </label>
                <button className='ButtonDetail' style={{width: '150px', display: 'block', margin: '0 auto'}} type='submit' onClick={crearOrden()}>Enviar</button>
            </form>
        </div>
    )
}

export default Formulario

