import Layout from '../../components/layout'
import Image from 'next/image'
import styles from '../../styles/blog.module.css'
import { formatoFecha } from '../../utils/helpers.js'

export default function Post({post}) {

    const { titulo, contenido, imagen, publishedAt } = post[0].attributes;

  return (
    <Layout
        title={titulo}
    >
        <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image
                width={800}
                height={250}
                src={imagen.data.attributes.url}
                alt={`Imagen del articulo ${titulo}`}
            />
            <div className={styles.contenido}>
                <h3 className="">{titulo}</h3>
                <p className={styles.fecha}>{ formatoFecha(publishedAt)}</p>
                <p className={styles.texto}>{contenido}</p>
            </div>
        </article>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}){
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const { data: post } = await respuesta.json()
    return {
        props: {
            post
        }
    }
}
