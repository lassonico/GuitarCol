import Image from "next/image"
import { useState } from 'react'
import styles from '../../styles/guitarras.module.css'
import Layout from "../../components/layout"

export default function Producto({guitarra, agregarCarrito}) {

    const [ cantidad, setCantidad ] = useState(0);
    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;

    const handleSubmit = e => {
        e.preventDefault()
        if(cantidad < 1){
            alert('Cantidad no válida')
            return
        }

        const guitarraSelec = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.formats.medium.url,
            precio,
            nombre,
            cantidad
        }

        agregarCarrito(guitarraSelec);
        
    }

  return (
    <Layout
        title={`Guitarra ${nombre}`}
    >
        <div className={styles.guitarra}>
        <Image
            width={200}
            height={100}
            src={imagen.data.attributes.formats.medium.url}
            alt={`Imagen de la guitarra ${nombre}`}
            />
        <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>

            <form className={styles.formulario} onSubmit={handleSubmit}>
                <label htmlFor="cantidad">Cantidad:</label>
                <select id="cantidad" onChange={e => setCantidad(+e.target.value)}>
                    <option value="0">Selecciona</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input 
                    type="submit"
                    value="Agregar al pedido"
                />
            </form>
        </div>
        </div>
    </Layout>
  )
}

// IMPORTANTE el objeto debe llamarce params    

export async function getStaticPaths(){
    
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json()

    const paths = data.map(guitarra => ({
        params: { url: guitarra.attributes.url }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {url}}){

    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const { data: guitarra } = await respuesta.json()

    return{
        props: {
            guitarra
        }
    }
}

// export async function getServerSideProps({query: { url }}){
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
//     const { data: guitarra } = await respuesta.json();

//     return{
//         props: {
//             guitarra
//         }
//     }
// }