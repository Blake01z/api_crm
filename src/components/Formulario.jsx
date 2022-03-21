import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'
import Spinner from './Spinner'

const Formulario = ({cliente, cargando}) => {

    const navigate = useNavigate()

    const nuevoClienteShcema = Yup.object().shape({
        nombre: Yup.string()
                .min(3, 'El nombre es muy corto')
                .max(20, 'El nombre es muy largo')
                .required('El nombre del cliente es obligatorio'),
        empresa: Yup.string()
                .required('El Nombre de la empresa es obligatorio'),
        email: Yup.string()
                .email('Email no valido')
                .required('El email es obligatorio'),
        telefono: Yup.number()
                .positive('Numero no valido')
                .integer('Numero no valido')
                .typeError('El numero no es valido'),
    })

    const handleSubmit = async (valores) => {
        try {
            const url = `http://localhost:4000/clientes`

            const respuesta = await fetch(url,{
                method: 'POST',
                body: JSON.stringify(valores),
                headers: {
                    "Content-Type": 'application/json'
                }
            })
            const resultado = await respuesta.json()
            // console.log(resultado)
            navigate('/clientes')
        } catch (error) {
            console.log(error)
        }
    }

  return (

    cargando ? <Spinner /> : (

      <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
            {cliente.nombre ? 'Editar Cliente' : 'Agregar Cliente'}
        </h1>
      
        <Formik
        initialValues={{
            nombre: cliente?.nombre ?? '',
            empresa: cliente?.empresa ?? '',
            email: cliente?.email ?? '',
            telefono: cliente?.telefono ?? '',
            notas: cliente?.notas ?? ''
        }}
        enableReinitialize={true}
        onSubmit = {async (values,{resetForm})=> {
            await handleSubmit(values)
            resetForm()
        }}
        validationSchema = {nuevoClienteShcema}
        >
            {({errors,touched}) => {
                // console.log(errors);
            return(
                <Form className='mt-10'>
                    <div className='mb-4'>
                        <label htmlFor="nombre" className='text-gray-800'>Nombre: </label>
                        <Field type="text" id="nombre" 
                        className="mt-2 w-full p-3 bg-blue-100 rounded-sm"
                        placeholder='Ingresa el nombre'
                        name="nombre"
                        />
                        {errors.nombre &&  touched.nombre ? (
                            <Alerta>{errors.nombre}</Alerta>
                        ): null}
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="empresa" className='text-gray-800'>Empresa: </label>
                        <Field type="text" id="empresa" 
                        className="mt-2 w-full p-3 bg-blue-100 rounded-sm"
                        placeholder='Ingresa la empresa'
                        name="empresa"
                        />
                        {errors.empresa &&  touched.empresa ? (
                            <Alerta>{errors.empresa}</Alerta>
                        ): null}
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email" className='text-gray-800'>Email: </label>
                        <Field type="email" id="email" 
                        className="mt-2 w-full p-3 bg-blue-100 rounded-sm"
                        placeholder='Ingresa el email'
                        name="email"
                        />
                        {errors.email &&  touched.email ? (
                            <Alerta>{errors.email}</Alerta>
                        ): null}
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="telefono" className='text-gray-800'>Telefono: </label>
                        <Field type="tel" id="telefono" 
                        className="mt-2 w-full p-3 bg-blue-100 rounded-sm"
                        placeholder='Ingresa el telefono'
                        name="telefono"
                        />
                        {errors.telefono &&  touched.telefono ? (
                            <Alerta>{errors.telefono}</Alerta>
                        ): null}
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="notas" className='text-gray-800'>Notas: </label>
                        <Field type="text" id="notas" as="textarea"
                        className="mt-2 w-full p-3 bg-blue-100 rounded-sm h-40"
                        placeholder='Notas del cliente'
                        name="notas"
                        />
                    </div>
                    <input type="submit" value={cliente.nombre ? 'Actualizar Cliente' : 'Agregar Cliente'}
                    className="mt-5 w-full bg-blue-800 p-3 text-white uppercase hover:bg-blue-900 cursor-pointer
                    transition-colors"
                    />
                </Form>
            )}}
        </Formik>
      </div>
    )
  )
}

Formulario.defaultProps = {
    cliente:{},
    cargando: false
}

export default Formulario