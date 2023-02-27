import Image from "next/image"
import Link from "next/link"
import { formatoFecha } from '../utils/helpers.js'
import styles from '../styles/blog.module.css'

export default function Post({post}) {
    const { contenido, imagen, titulo, publishedAt, url } = post
  return (
    <article className="contenedor">
        
        <Image
            width={400}
            height={250}
            src={imagen.data.attributes.formats.medium.url}
            alt={`Imagen del articulo ${titulo}`}
        />
        <div className={styles.contenido}>
            <h3 className="">{titulo}</h3>
            <p className={styles.fecha}>{ formatoFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
            <Link className={styles.enlace} href={`/blog/${url}`}>Leer Post</Link>
        </div>
    </article>
  )
}
