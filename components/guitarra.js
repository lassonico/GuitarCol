import Image from "next/image"
import Link from "next/link"
import styles from '../styles/guitarras.module.css'

export default function Guitarra({guitarra}) {

  const { nombre, descripcion, precio, imagen, url } = guitarra

  return (
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
        <Link className={styles.enlace} href={`/guitarras/${url}`}>
          Ver detalles
        </Link>
      </div>
    </div>
  )
}
