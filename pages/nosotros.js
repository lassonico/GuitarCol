import Image from 'next/image'
import Layout from '../components/layout'
import style from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <>
      <Layout
        title={'Nosotros'}
        description={'Somo la tienda en linea de guitarras numero uno de Colombia'}
      >
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>
          <div className={style.contenido}>
            <Image
              src="/img/nosotros.jpg"
              alt="Imagen sobre nosotros"
              width={800}
              height={600}
            />
            <div>
              <p>
                Sed eu pretium lorem, at eleifend metus. Ut a nunc ipsum. Fusce tincidunt dolor in lorem viverra, a sodales elit accumsan. Proin tempus dignissim turpis ac ullamcorper. Vivamus sit amet mollis tellus. Ut tincidunt blandit felis vitae condimentum. Quisque faucibus non dolor eu faucibus. Nullam aliquet velit posuere, rutrum elit id, consequat justo.
                scipit iaculis augue ut consequat. Donec consequat sem sed lorem laoreet, accumsan sollicitudin nulla imperdiet.
              </p>
              <p>
                Duis sit amet eros vel mauris suscipit gravida. Integer eget fringilla erat. Fusce volutpat, dui at rutrum mattis, libero ex elementum ante, et lobortis dolor arcu eget ligula. Mauris congue, eros eget tempus interdum, nisi tortor tristique lacus, vel tempor lorem arcu tincidunt urna. Donec id magna turpis. Ut sit amet felis sed nisl gravida lacinia. Aliquam in efficitur nisi. Mauris velit odio, venenatis in posuere ut, tincidunt sit amet dui. Donec justo arcu, pharetra.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}
