import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import style from '../styles/header.module.css'

export default function Header({carrito}) {

    const router = useRouter()

  return (
    <header className={style.header}>
        <div className={`contenedor ${style.barra}`}>
            <Image 
                width={200}
                height={70}
                src="/img/logo.svg"
                alt="Imagen logotipo"
            />
            <nav className={style.navegacion}>
                <Link href="/" className={ router.pathname === "/" ? style.active : '' }>Inicio</Link>
                <Link href="/nosotros" className={ router.pathname === "/nosotros" ? style.active : '' }>Nosotros</Link>
                <Link href="/tienda" className={ router.pathname === "/tienda" ? style.active : '' }>Tienda</Link>
                <Link href="/blog" className={ router.pathname === "/blog" ? style.active : '' }>Blog</Link>
                <Link href="/carrito" >
                <Image width={30} height={25} src="/img/carrito.png" alt="Imagen carrito"/>
                <span>{carrito.length}</span>
            </Link>
            </nav>
        </div>
    </header>
  )
}
