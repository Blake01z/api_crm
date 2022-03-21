import React from 'react'
import { Formik, Form, Field } from 'formik'


const Formulario = () => {
  return (
      <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>
      
        <Formik
        initialValues={{
            nombre:'',
            empresa: '',
            email: '',
            telefono: '',
            notas: ''
        }}
        >
            {()=> (
                <Form className='mt-10'>
                    <div className='mb-4'>
                        <label htmlFor="nombre" className='text-gray-800'>Nombre: </label>
                        <Field type="text" id="nombre" 
                        className="mt-2 w-full p-3 bg-blue-100 rounded-sm"
                        placeholder='Ingresa el nombre'
                        name="nombre"
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="empresa" className='text-gray-800'>Empresa: </label>
                        <Field type="text" id="empresa" 
                        className="mt-2 w-full p-3 bg-blue-100 rounded-sm"
                        placeholder='Ingresa la empresa'
                        name="empresa"
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email" className='text-gray-800'>Email: </label>
                        <Field type="email" id="email" 
                        className="mt-2 w-full p-3 bg-blue-100 rounded-sm"
                        placeholder='Ingresa el email'
                        name="email"
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="telefono" className='text-gray-800'>Telefono: </label>
                        <Field type="tel" id="telefono" 
                        className="mt-2 w-full p-3 bg-blue-100 rounded-sm"
                        placeholder='Ingresa el telefono'
                        name="telefono"
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="notas" className='text-gray-800'>Notas: </label>
                        <Field type="text" id="notas" as="textarea"
                        className="mt-2 w-full p-3 bg-blue-100 rounded-sm h-40"
                        placeholder='Notas del cliente'
                        name="notas"
                        />
                    </div>
                    <input type="submit" value="Agregar Cliente"
                    className="mt-5 w-full bg-blue-800 p-3 text-white uppercase hover:bg-blue-900 cursor-pointer
                    transition-colors"
                    />
                </Form>
            )}
        </Formik>
      </div>
  )
}

export default Formulario